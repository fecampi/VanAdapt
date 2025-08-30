import van from "vanjs-core";
const { tags } = van;
const { canvas } = tags;

export default class BaseCanvas {
  drawRoundedRect(ctx, x, y, width, height, radius, fillStyle) {
    ctx.beginPath();
    ctx.moveTo(x + radius, y);
    ctx.lineTo(x + width - radius, y);
    ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
    ctx.lineTo(x + width, y + height - radius);
    ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
    ctx.lineTo(x + radius, y + height);
    ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
    ctx.lineTo(x, y + radius);
    ctx.quadraticCurveTo(x, y, x + radius, y);
    ctx.closePath();

    if (fillStyle) {
      ctx.fillStyle = fillStyle;
      ctx.fill();
    }
  }

  writeText(ctx, text, x, y, color, fontSize, fontFamily, textAlign, textBaseline) {
    ctx.fillStyle = color;
    ctx.font = `${fontSize} ${fontFamily}`;
    ctx.textAlign = textAlign;
    ctx.textBaseline = textBaseline;
    ctx.fillText(text, x, y);
  }

  createCanvasElement({ width, height, x, y }) {
    const canvasElement = canvas({
      width,
      height,
      style: `position:absolute; left:${x}px; top:${y}px;`,
    });
    const ctx = canvasElement.getContext("2d");
    return { canvasElement, ctx };
  }
}
