import ViewCanvas from "./canvas/ViewCanvas.js";
import StateCanvas from "./canvas/State.js";
import TextComponent from "./canvas/graphics/text.js";
import RectComponent from "./canvas/graphics/rect.js";
import CircleComponent from "./canvas/graphics/circle.js";
import ContainerComponent from "./canvas/graphics/container.js";
import FocusableComponent from "./canvas/graphics/focusable.js";

export const View = (props, ...children) => {
  const viewCanvas = new ViewCanvas(props);
  viewCanvas.add(...children.map((el) => el.render()));
  return viewCanvas.render();
};


export function state(props) {
  return new StateCanvas(props);
}

// Agora aceita filhos extras para componentes que suportam (ex: Container)
function createReactiveInstance(ClassRef, props = {}, ...children) {
  const instance = new ClassRef(props, ...children);
  Object.entries(props).forEach(([key, val]) => {
    if (val && typeof val === "object" && typeof val.subscribe === "function") {
      instance[key] = val.val;
      val.subscribe((newVal) => {
        instance[key] = newVal;
      });
    } else if (!(key in instance)) {
      // Só define a propriedade se ela não existir na instância
      instance[key] = val;
    }
  });
  return instance;
}

// Instanciadores reativos para cada elemento gráfico
export function Text(props = {}) {
  return createReactiveInstance(TextComponent, props);
}

export function Rect(props = {}, ...children) {
  return createReactiveInstance(RectComponent, props, ...children);
}

export function Circle(props = {}) {
  return createReactiveInstance(CircleComponent, props);
}

// Agora Container aceita filhos diretamente!
export function Container(props = {}, ...children) {
  return createReactiveInstance(ContainerComponent, props, ...children);
}

export function Focusable(props = {}, ...children) {
  return createReactiveInstance(FocusableComponent, props, ...children);
}