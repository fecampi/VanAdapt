import Container from "./container.js";

export default class Rect extends Container {
  constructor(props = {}, ...children) {
    super(props, ...children);
    this.color = props.fill ?? props.color ?? "#000";
    this.borderRadius = props.borderRadius;
  }

  draw(ctx) {
    ctx.save();
    ctx.translate(this.x, this.y);
    
    // Desenha o retângulo
    ctx.fillStyle = this.color;
    if (this.borderRadius && this.borderRadius > 0) {
      const r = Math.min(this.borderRadius, this.width / 2, this.height / 2);
      ctx.beginPath();
      ctx.moveTo(r, 0);
      ctx.lineTo(this.width - r, 0);
      ctx.quadraticCurveTo(this.width, 0, this.width, r);
      ctx.lineTo(this.width, this.height - r);
      ctx.quadraticCurveTo(this.width, this.height, this.width - r, this.height);
      ctx.lineTo(r, this.height);
      ctx.quadraticCurveTo(0, this.height, 0, this.height - r);
      ctx.lineTo(0, r);
      ctx.quadraticCurveTo(0, 0, r, 0);
      ctx.closePath();
      ctx.fill();
    } else {
      ctx.fillRect(0, 0, this.width, this.height);
    }
    
    // Desenha os filhos (ex: Text) - sem translação extra
    for (const child of this.children) child.draw(ctx);
    
    ctx.restore();
  }
}
