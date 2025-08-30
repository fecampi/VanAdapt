import van from "vanjs-core";
const { tags } = van;
const { div } = tags;

export default class HtmlContainer {
  constructor({
    x,
    y,
    width,
    height,
  }) {
    this.containerElement = div({
      style: `
        position: absolute;
        left: ${x}px;
        top: ${y}px;
        width: ${width}px;
        height: ${height}px;
      `,
    });
  }

  render() {
    return this.containerElement;
  }
}
