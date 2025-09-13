import van from "vanjs-core";
const { tags } = van;
const { img } = tags;

export default class ImageHtml {
  constructor({
    src,
    alt = "",
    x = 0,
    y = 0,
    width = 100,
    height = 100,
    style = "",
    ...props
  } = {}) {
    this.element = img({
      src,
      alt,
      style: () => `
        position: absolute;
        object-fit: cover;
        display: block;
        left: ${x}px;
        top: ${y}px;
        width: ${width}px;
        height: ${height}px;
        border-radius: ${props.borderRadius ?? 0}px;
        ${style}
      `,
      ...props
    });
  }

  render() {
    return this.element;
  }
}
