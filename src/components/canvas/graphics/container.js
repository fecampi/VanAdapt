import Shape from './shape.js';

export default class Container extends Shape {
  constructor(props = {}) {
    super();
    // Suporta tanto chamada antiga quanto props objeto
    if (typeof props === 'object' && props !== null) {
      this.x = props.x ?? 0;
      this.y = props.y ?? 0;
    } else {
      this.x = arguments[0] ?? 0;
      this.y = arguments[1] ?? 0;
    }
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
      if (child.tweens) child.tweens.forEach(t => t.update());
      child.tweens = child.tweens.filter(t => !t.finished);
    }
  }

  isInside(x, y) {
    return this.children.some(child => child.isInside(x - this.x, y - this.y));
  }
}
