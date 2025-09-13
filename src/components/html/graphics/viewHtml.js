import van from "vanjs-core";
const { tags } = van;
const { div } = tags;

export default class viewHtml {
  constructor({
    onClick,
    x = 0,
    y = 0,
    width = 100,
    height = 40,
    backgroundColor,
    color, // aceitar tanto color quanto backgroundColor
    borderRadius = 0,
    cursor = "pointer",
    ...props
  } = {}, ...children) {
    // Usar backgroundColor ou color (para compatibilidade)
    const bgColor = backgroundColor || color || "transparent";
    // Filtrar apenas propriedades válidas para o elemento HTML
    const validProps = {};
    if (onClick) validProps.onclick = onClick;
    if (props.id) validProps.id = props.id;
    if (props.class) validProps.class = props.class;
    if (props.onclick) validProps.onclick = props.onclick; // permitir onclick adicional se existir

    this.element = div(
      {
        ...validProps,
        style: `
        position: absolute;
        left: ${x}px;
        top: ${y}px;
        width: ${width}px;
        height: ${height}px;
        background-color: ${bgColor};
        border-radius: ${borderRadius}px;
        cursor: ${cursor};
        ${props.style ?? ""}
      `,
      },
      ...children
    );
  }

  render() {
    return this.element;
  }
}