import Shape from "./shape.js";

export default class Rect extends Shape {
  constructor(props = {}) {
    super();
    if (typeof props === "object" && props !== null) {
      this.x = props.x ?? 0;
      this.y = props.y ?? 0;
      this.width = props.width ?? 0;
      this.height = props.height ?? 0;
      this.color = props.fill ?? props.color ?? "#000";
      this.borderRadius = props.borderRadius;
    } else {
      this.x = arguments[0] ?? 0;
      this.y = arguments[1] ?? 0;
      this.width = arguments[2] ?? 0;
      this.height = arguments[3] ?? 0;
      this.color = arguments[4] ?? "#000";
    }
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

  isInside(px, py) {
    return (
      px >= this.x &&
      px <= this.x + this.width &&
      py >= this.y &&
      py <= this.y + this.height
    );
  }
}
