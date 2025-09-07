import Shape from "./shape.js";
import Container from "./container.js";

export default class Rect extends Container {
  constructor(props = {}) {
    super(props);
    this.color = props.fill ?? props.color ?? "#000";
    this.borderRadius = props.borderRadius;
  }

  draw(ctx) {
    ctx.fillStyle = this.color;
    if (this.borderRadius && this.borderRadius > 0) {
      const r = Math.min(this.borderRadius, this.width / 2, this.height / 2);
      ctx.beginPath();
      ctx.moveTo(this.x + r, this.y);
      ctx.lineTo(this.x + this.width - r, this.y);
      ctx.quadraticCurveTo(
        this.x + this.width,
        this.y,
        this.x + this.width,
        this.y + r
      );
      ctx.lineTo(this.x + this.width, this.y + this.height - r);
      ctx.quadraticCurveTo(
        this.x + this.width,
        this.y + this.height,
        this.x + this.width - r,
        this.y + this.height
      );
      ctx.lineTo(this.x + r, this.y + this.height);
      ctx.quadraticCurveTo(
        this.x,
        this.y + this.height,
        this.x,
        this.y + this.height - r
      );
      ctx.lineTo(this.x, this.y + r);
      ctx.quadraticCurveTo(this.x, this.y, this.x + r, this.y);
      ctx.closePath();
      ctx.fill();
    } else {
      ctx.fillRect(this.x, this.y, this.width, this.height);
    }
  }
}
