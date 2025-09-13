import Rect from "./rect.js";

export default class View extends Rect {
  constructor(props = {}, ...children) {
    super(props, ...children);
    this.onPress = props.onPress;
    this.onFocus = props.onFocus;
    this.onBlur = props.onBlur;
    this.onMouseEnter = props.onMouseEnter;
    this.onMouseLeave = props.onMouseLeave;
    this.focusable = props.focusable ?? false;
  }

  isInside(px, py) {
    return (
      px >= this.x &&
      px <= this.x + this.width &&
      py >= this.y &&
      py <= this.y + this.height
    );
  }

  handlePress(x, y) {
    // Primeiro verifica se o clique está dentro do container
    if (!this.isInside(x, y)) {
      return;
    }
    // Se tem um handler de press próprio, executa
    if (this.onPress) {
      // Criar evento padronizado para consistência com HTML
      const event = { target: this, type: 'press' };
      this.onPress(event);
    }
  }
}
