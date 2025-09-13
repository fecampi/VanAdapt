import van from "vanjs-core";
const { tags } = van;
const { span } = tags;

export default class TextHtml {
  constructor({
    text = "",
    x = 0,
    y = 0,
    width = "auto",
    height = "auto",
    color = "#000000",
    fontSize = "16px",
    fontFamily = "Arial, sans-serif",
    textAlign = "left",
    fontWeight = "normal",
    ...props
  } = {}) {
    
    const validProps = {};
    
    // Props padrão
    if (props.id) validProps.id = props.id;
    if (props.class) validProps.class = props.class;

    this.element = span(
      {
        ...validProps,
        style: `
        position: absolute;
        left: ${x}px;
        top: ${y}px;
        width: ${width === "auto" ? "auto" : width + "px"};
        height: ${height === "auto" ? "auto" : height + "px"};
        color: ${color};
        font-size: ${fontSize};
        font-family: ${fontFamily};
        text-align: ${textAlign};
        font-weight: ${fontWeight};
        line-height: 1;
        user-select: none;
        pointer-events: none;
        display: inline-block;
        `
      },
      text
    );
  }
}