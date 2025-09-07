import Shape from "./shape.js";

export default class Container extends Shape {
  constructor(props = {}) {
    super();
    this.x = props.x ?? 0;
    this.y = props.y ?? 0;
    this.width = props.width ?? 0;
    this.height = props.height ?? 0;
    this.children = [];
  }

  add(shape) {
    shape.parent = this;
    this.children.push(shape);
  }

  draw(ctx) {
    ctx.save();
    ctx.translate(this.x, this.y);
    for (const child of this.children) child.draw(ctx);
    ctx.restore();
  }

  update() {
    for (const child of this.children) {
      if (child.tweens) child.tweens.forEach((t) => t.update());
      child.tweens = child.tweens.filter((t) => !t.finished);
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
