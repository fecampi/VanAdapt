export default class Layer {
  constructor() {
    this.shapes = [];
    this.stage = null;
  }

  add(shape) {
    shape.layer = this;
    this.shapes.push(shape);
  }

  draw(ctx) {
    for (const shape of this.shapes) shape.draw(ctx);
  }

  update() {
    for (const shape of this.shapes) {
      if (shape.tweens) shape.tweens.forEach(t => t.update());
      shape.tweens = shape.tweens.filter(t => !t.finished);
    }
  }

  handleClick(x, y) {
    for (const shape of this.shapes) {
      if (shape.isInside(x, y) && shape.onClick) shape.onClick();
    }
  }
}
