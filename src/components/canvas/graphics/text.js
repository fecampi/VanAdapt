import Container from "./container.js";

export default class Text extends Container {
  constructor(props = {}) {
    super(props);
    this.text = props.text ?? "";
    this.color = props.fill ?? props.color ?? "#000";
    this.font = props.font ?? "16px Arial";
    this.align = props.align ?? "center";
    this.baseline = props.baseline ?? "middle";
  }

  draw(ctx) {
    ctx.fillStyle = this.color;
    ctx.font = this.font;
    ctx.textAlign = this.align;
    ctx.textBaseline = this.baseline;
    ctx.fillText(this.text, this.x, this.y);
  }



  // Método auxiliar para obter as métricas do texto
  getTextMetrics() {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    ctx.font = this.font;
    return ctx.measureText(this.text);
  }
}
