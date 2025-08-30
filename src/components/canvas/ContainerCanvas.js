import van from "vanjs-core";
import BaseCanvas from "./BaseCanvas.js";
const { tags } = van;


export default class ContainerCanvas extends BaseCanvas {
  constructor({
    x,
    y,
    width,
    height,
  }) {
    super(); // Chamar o construtor da classe base

    const { canvasElement, ctx } = this.createCanvasElement({ width, height, x, y });
    this.canvasElement = canvasElement;

  }

  render() {
    return this.canvasElement;
  }
}
