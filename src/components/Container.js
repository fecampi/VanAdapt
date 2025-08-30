import CanvasButton from "./canvas/CanvasButton.js";
import HtmlButton from "./html/HtmlButton.js";

export default function Button({ useCanvas, ...props }) {
  const ButtonClass = useCanvas ? CanvasButton : HtmlButton;
  const buttonInstance = new ButtonClass(props);
  return buttonInstance.render();
}
