import StateCanvas from "./canvas/State.js";
import TextComponent from "./canvas/graphics/text.js";
import RectComponent from "./canvas/graphics/rect.js";
import CircleComponent from "./canvas/graphics/circle.js";
import ContainerComponent from "./canvas/graphics/container.js";
import ViewComponent from "./canvas/graphics/view.js";
import ImageCanvas from "./canvas/graphics/ImageCanvas.js";

export function state(props) {
  return new StateCanvas(props);
}

function createComponent(ClassRef) {
  return function(props = {}, ...children) {
    const instance = new ClassRef(props, ...children);
    Object.entries(props).forEach(([key, val]) => {
      if (val && typeof val === "object" && typeof val.subscribe === "function") {
        instance[key] = val.val;
        val.subscribe((newVal) => {
          instance[key] = newVal;
        });
      } else if (!(key in instance)) {
        instance[key] = val;
      }
    });
    return instance;
  };
}

export const Text = createComponent(TextComponent);
export const Rect = createComponent(RectComponent);
export const Circle = createComponent(CircleComponent);
export const Container = createComponent(ContainerComponent);
export const View = createComponent(ViewComponent);
export const Image = createComponent(ImageCanvas);