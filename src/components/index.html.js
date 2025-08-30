import HtmlButton from "./html/HtmlButton.js";

export function Button(props) {
  const buttonInstance = new HtmlButton(props);
  return buttonInstance.render();
}

export * from "./html";
