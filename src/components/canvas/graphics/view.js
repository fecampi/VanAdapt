import Rect from "./rect.js";

export default class Focusable extends Rect {
  constructor(props = {}, ...children) {
    super(props, ...children);
    this.onClick = props.onClick;
    this.focusable = props.focusable ?? true;
  }

  isInside(px, py) {
    return (
      px >= this.x &&
      px <= this.x + this.width &&
      py >= this.y &&
      py <= this.y + this.height
    );
  }

  handleClick(x, y) {
    // Primeiro verifica se o clique está dentro do container
    if (!this.isInside(x, y)) {
      return;
    }
    // Se tem um handler de clique próprio, executa
    if (this.onClick) {
      this.onClick();
    }
  }
}
