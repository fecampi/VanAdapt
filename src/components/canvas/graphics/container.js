import Shape from "./shape.js";

export default class Container extends Shape {
  constructor(props = {}, ...children) {
    super();
    this.x = props.x ?? 0;
    this.y = props.y ?? 0;
    this.width = props.width ?? 0;
    this.height = props.height ?? 0;
    this.children = [];
    // Adiciona os elementos filhos recebidos no construtor
    children.forEach((child) => this.add(child));
    this.onClick = props.onClick;
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
    // Atualiza os tweens deste container
    super.update();
    
    // Atualiza todos os filhos
    for (const child of this.children) {
      if (child.update) child.update();
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

  handleClick(x, y) {
    // Primeiro verifica se o clique está dentro do container
    if (!this.isInside(x, y)) {
      return;
    }

    // Converte as coordenadas para o espaço local do container
    const localX = x - this.x;
    const localY = y - this.y;

    // Propaga o clique para os filhos
    for (const child of this.children) {
      if (child.handleClick) {
        child.handleClick(localX, localY);
      }
    }

    // Se tem um handler de clique próprio, executa
    if (this.onClick) {
      this.onClick();
    }
  }

  render() {
    return this;
  }
}
