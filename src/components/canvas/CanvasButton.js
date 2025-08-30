import van from "vanjs-core";
import BaseCanvas from "./BaseCanvas.js";
const { tags } = van;


export default class CanvasButton extends BaseCanvas {
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
    fontFamily,
    textAlign,
    textBaseline,
  }) {
    super(); // Chamar o construtor da classe base

    const { canvasElement, ctx } = this.createCanvasElement({ width, height, x, y });
    this.canvasElement = canvasElement;

    // Desenhar botão no canvas com bordas arredondadas
    this.drawRoundedRect(ctx, 0, 0, width, height, borderRadius, backgroundColor);
   

    // Escrever texto no botão
    this.writeText(ctx, text, width / 2, height / 2, color, fontSize, fontFamily, textAlign, textBaseline);

    // Adicionar evento de clique
    this.canvasElement.addEventListener("click", (event) => {
      const rect = this.canvasElement.getBoundingClientRect();
      const clickX = event.clientX - rect.left;
      const clickY = event.clientY - rect.top;

      // Verificar se o clique está dentro do botão
      if (clickX >= 0 && clickX <= width && clickY >= 0 && clickY <= height) {
        onClick();
      }
    });
  }

  render() {
    return this.canvasElement;
  }
}
