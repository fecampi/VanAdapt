import CanvasButton from "./canvas/CanvasButton.js";

export function Button(props) {
  const buttonInstance = new CanvasButton(props);
  return buttonInstance.render();
}

export * from "./canvas";
