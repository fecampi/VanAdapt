export default class CanvasInteractionManager {
  constructor(canvas, shapes) {
    this.canvas = canvas;
    this.shapes = shapes;
    this._bindEvents();
  }

  _bindEvents() {
    this.canvas.addEventListener("click", (e) => this.handlePress(e));
    this.canvas.addEventListener("mousemove", (e) => this.handleMouseMove(e));
  }

  handlePress(e) {
    const rect = this.canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    // console.log(`[CanvasInteractionManager] Press at x:${x} y:${y}`);
    for (const shape of this.shapes) {
      this.propagateFocusable(shape, x, y);
    }
  }

  handleMouseMove(e) {
    const rect = this.canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    function propagateHover(shape) {
      if (shape.constructor?.name === "View" && shape.focusable === true) {
        const inside = shape.isInside && shape.isInside(x, y);
        if (inside && !shape.hovered) {
          shape.hovered = true;
          // console.log(`[CanvasInteractionManager] Mouse entered:`, shape);
          if (typeof shape.onFocus === "function") {
            // Criar evento padronizado para consistência com HTML
            const event = { target: shape, type: 'mouseenter' };
            shape.onFocus(event);
          }
        } else if (!inside && shape.hovered) {
          shape.hovered = false;
          // console.log(`[CanvasInteractionManager] Mouse left:`, shape);
          if (typeof shape.onBlur === "function") {
            // Criar evento padronizado para consistência com HTML
            const event = { target: shape, type: 'mouseleave' };
            shape.onBlur(event);
          }
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
      shape.constructor?.name === "View" &&
      shape.focusable === true &&
      typeof shape.onPress === "function"
    ) {
      // console.log(`[CanvasInteractionManager] Testing Focusable:`, shape, `at x:${x} y:${y}`);
      if (shape.isInside && shape.isInside(x, y)) {
        // console.log(`[CanvasInteractionManager] Focusable pressed!`, shape);
        shape.handlePress(x, y);
      }
    }
    if (shape.children) {
      shape.children.forEach((child) => this.propagateFocusable(child, x, y));
    }
  }
}
