import { Container, Rect, Text } from "./graphics/index.js";

export default class ButtonCanvas {
  constructor({
    text = "Botão Canvas",
    onClick = () => {},
    x = 50,
    y = 50,
    width = 150,
    height = 50,
    backgroundColor = "red",
    color = "white",
    fontSize = "16px",
    fontFamily = "Arial",
    textAlign = "center",
    textBaseline = "middle",
    borderRadius = 0,
  } = {}) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.backgroundColor = backgroundColor;
    this.color = color;
    this.fontSize = fontSize;
    this.fontFamily = fontFamily;
    this.textAlign = textAlign;
    this.textBaseline = textBaseline;
    this.labelText = text;
    this.borderRadius = borderRadius;
    this.onClick = onClick;

    // Cria container do botão
    this.container = new Container({ x: this.x, y: this.y });
    // Cria retângulo do botão
    const rect = new Rect({
      x: 0,
      y: 0,
      width: this.width,
      height: this.height,
      fill: this.backgroundColor,
      borderRadius: this.borderRadius,
    });
    rect.cursor = "pointer";

    // Cria texto do botão
    const label = new Text({
      x: this.width / 2,
      y: this.height / 2,
      text: this.labelText,
      fill: this.color,
      font: `${this.fontSize} ${this.fontFamily}`,
      align: this.textAlign,
      baseline: this.textBaseline,
    });

    // Adiciona retângulo e texto ao container
    this.container.add(rect);
    this.container.add(label);

    // Adiciona evento de clique
    this.container.onClick = this.onClick;
  }

  // Retorna o container pronto para ser adicionado a um Stage/Layer
  render() {
    return this.container;
  }
}
