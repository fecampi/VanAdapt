import van from "vanjs-core";
const { tags } = van;
const { button } = tags;

export default class HtmlButton {
  constructor({
    text,
    onClick,
    x,
    y,
    width,
    height,
    backgroundColor,
    color,
    fontSize,
    borderRadius,
    cursor,
    fontFamily,
    textAlign,
    lineHeight,
    boxShadow,
  }) {
    this.buttonElement = button(
      {
        onclick: onClick,
        style: `
        position: absolute;
        left: ${x}px;
        top: ${y}px;
        width: ${width}px;
        height: ${height}px;
        background-color: ${backgroundColor};
        color: ${color};
        font-size: ${fontSize};
        border-radius: ${borderRadius}px;
        cursor: ${cursor};
        font-family: ${fontFamily};
        text-align: ${textAlign};
        line-height: ${lineHeight};
        box-shadow: ${boxShadow};
      `,
      },
      text
    );
  }

  render() {
    return this.buttonElement;
  }
}
