
import ViewCanvas from "./canvas/ViewCanvas.js"
import Button2 from "./canvas/ButtonCanvas.js"
import StateCanvas from "./canvas/State.js"

export const View = (props, ...children) => {
  const viewCanvas = new ViewCanvas(props);
  viewCanvas.add(...children.map(el => el.render()));
  return viewCanvas.render();
}

export function Button(props = {}) {
  return new Button2(props);
}

export function state(props) {
  return new StateCanvas(props);
}

