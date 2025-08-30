import Shape from './shape.js';

export default class Circle extends Shape {
  constructor(x, y, radius, color) {
    super();
    this.x = x; this.y = y; this.radius = radius; this.color = color;
  }

  draw(ctx) {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI*2);
    ctx.fillStyle = this.color;
    ctx.fill();
  }

  isInside(px, py) {
    const dx = px - this.x;
    const dy = py - this.y;
    return dx*dx + dy*dy <= this.radius*this.radius;
  }
}
