import van from "vanjs-core";
const { tags } = van;
const { div } = tags;

export default class viewHtml {
  constructor(
    {
      onPress,
      onFocus,
      onBlur,
      onPressIn,
      onPressOut,
      onKeyDown,
      onKeyUp,
      onMouseEnter,
      onMouseLeave,
      x = 0,
      y = 0,
      width = 100,
      height = 40,
      color = "transparent",
      borderRadius = 0,
      cursor = "pointer",
      ...props
    } = {},
    ...children
  ) {
    const validProps = {};

    // Props padrão
    if (props.id) validProps.id = props.id;
    if (props.class) validProps.class = props.class;

    // Focusable
    if (props.focusable) {
      validProps.class =
        (validProps.class ? validProps.class + " " : "") + "focusable";
      validProps.tabIndex = 0;
    }

    // Função reativa para estilo, VanJS irá atualizar quando color mudar
    this.element = div(
      {
        ...validProps,
        style: () => `
          position: absolute;
          left: ${x}px;
          top: ${y}px;
          width: ${width}px;
          height: ${height}px;
          background-color: ${color?.val ?? color};
          border-radius: ${borderRadius}px;
          cursor: ${cursor};
          ${props.style ?? ""}
        `,
      },
      ...children
    );

    // Anexar eventos diretamente como propriedades JavaScript
    if (onPress) this.element.onpress = onPress;
    if (onPressIn) this.element.onpressin = onPressIn;
    if (onPressOut) this.element.onpressout = onPressOut;
    if (onFocus) this.element.onfocus = onFocus;
    if (onBlur) this.element.onblur = onBlur;
    if (onKeyDown) this.element.onkeydown = onKeyDown;
    if (onKeyUp) this.element.onkeyup = onKeyUp;
    if (onMouseEnter) this.element.onmouseenter = onMouseEnter;
    if (onMouseLeave) this.element.onmouseleave = onMouseLeave;
  }

  render() {
    return this.element;
  }
}
