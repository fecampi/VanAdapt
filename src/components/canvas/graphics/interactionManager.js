export default class CanvasInteractionManager {
  constructor(canvas, shapes) {
    this.canvas = canvas;
    this.shapes = shapes;
    this._bindEvents();
  }

  _bindEvents() {
    this.canvas.addEventListener("click", (e) => this.handleClick(e));
    this.canvas.addEventListener("mousemove", (e) => this.handleMouseMove(e));
  }

  handleClick(e) {
    const rect = this.canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    console.log(`[InteractionManager] Click at x:${x} y:${y}`);
    for (const shape of this.shapes) {
      this.propagateFocusable(shape, x, y);
    }
  }

  handleMouseMove(e) {
    const rect = this.canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    function propagateHover(shape) {
      if (shape.constructor?.name === "Focusable" && shape.focusable === true) {
        const inside = shape.isInside && shape.isInside(x, y);
        if (inside && !shape.hovered) {
          shape.hovered = true;
          console.log(`[InteractionManager] Mouse entered:`, shape);
          if (typeof shape.onMouseEnter === "function") shape.onMouseEnter();
        } else if (!inside && shape.hovered) {
          shape.hovered = false;
          console.log(`[InteractionManager] Mouse left:`, shape);
          if (typeof shape.onMouseLeave === "function") shape.onMouseLeave();
        }
      }
      if (shape.children) {
        shape.children.forEach(child => propagateHover(child));
      }
    }
    for (const shape of this.shapes) {
      propagateHover(shape);
    }
  }

  propagateFocusable(shape, x, y) {
    if (
      shape.constructor?.name === "Focusable" &&
      shape.focusable === true &&
      typeof shape.onClick === "function"
    ) {
      console.log(`[InteractionManager] Testing Focusable:`, shape, `at x:${x} y:${y}`);
      if (shape.isInside && shape.isInside(x, y)) {
        console.log(`[InteractionManager] Focusable clicked!`, shape);
        shape.handleClick(x, y);
      }
    }
    if (shape.children) {
      shape.children.forEach((child) => this.propagateFocusable(child, x, y));
    }
  }
}
