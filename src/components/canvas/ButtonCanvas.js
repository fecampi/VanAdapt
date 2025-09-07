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
    ...props
  } = {}) {
    // Cria container do botão
    this.container = new Container({ x, y, width, height });

    // Cria retângulo do botão
    this.rect = new Rect({
      x: 0,
      y: 0,
      width,
      height,
      fill: backgroundColor,
      borderRadius,
    });
    this.rect.cursor = "pointer";

    // Cria texto do botão
    this.label = new Text({
      x: width / 2,
      y: height / 2,
      text: typeof text === "object" ? text.val : text, // Valor inicial
      fill: color,
      font: `${fontSize} ${fontFamily}`,
      align: textAlign,
      baseline: textBaseline,
    });

    // Se o texto for reativo, se inscreve para mudanças
    if (typeof text === "object" && typeof text.subscribe === "function") {
      text.subscribe(() => {
        this.label.text = text.val;
      });
    }

    // Adiciona retângulo e texto ao container
    this.container.add(this.rect);
    this.container.add(this.label);
    // Adiciona evento de clique
    this.container.onClick = onClick;
  }

  // Retorna o container pronto para ser adicionado a um Stage/Layer
  render() {
    return this.container;
  }
}
