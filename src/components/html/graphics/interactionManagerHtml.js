// Gerenciador de interatividade para HTML, padrão React Native
export default class InteractionManagerHtml {
  constructor(rootElement) {
    this.root = rootElement;
    this._bindEvents();
  }

  _bindEvents() {
    // Eventos de clique/seleção (botão OK do controle)
    this.root.addEventListener("click", (e) => this.handlePress(e));
    this.root.addEventListener("mousedown", (e) => this.handlePressIn(e));
    this.root.addEventListener("mouseup", (e) => this.handlePressOut(e));
    
    // Eventos de foco (navegação com setas do controle)
    this.root.addEventListener("focusin", (e) => this.handleFocus(e), true);
    this.root.addEventListener("focusout", (e) => this.handleBlur(e), true);
    
    // Eventos de teclado (controle remoto)
    this.root.addEventListener("keydown", (e) => this.handleKeyDown(e), true);
    this.root.addEventListener("keyup", (e) => this.handleKeyUp(e), true);
    
    // Eventos de mouse (para teste em desktop)
    this.root.addEventListener("mouseenter", (e) => this.handleFocus(e), true);
    this.root.addEventListener("mouseleave", (e) =>  this.handleBlur(e), true);
  }

  handlePress(e) {
    let target = e.target;
    
    // Procura o elemento focusable mais próximo (pode ser o próprio ou um pai)
    while (target && target !== this.root) {
      if (target.classList?.contains("focusable")) {
        break;
      }
      target = target.parentElement;
    }
    
    if (target && target.classList?.contains("focusable") && target.onpress) {
      target.onpress(e);
    }
  }

  handlePressIn(e) {
    const target = e.target;
    if (target && target.classList?.contains("focusable") && target.onpressin) {
      target.onpressin(e);
    }
  }

  handlePressOut(e) {
    const target = e.target;
    if (target && target.classList?.contains("focusable") && target.onpressout) {
      target.onpressout(e);
    }
  }

  handleFocus(e) {
    const target = e.target;
    if (target && target.classList?.contains("focusable") && target.onfocus) {
      target.onfocus(e);
    }
  }

  handleBlur(e) {
    const target = e.target;
    if (target && target.classList?.contains("focusable") && target.onblur) {
      target.onblur(e);
    }
  }

  handleKeyDown(e) {
    const target = e.target;
    if (target && target.classList?.contains("focusable") && target.onkeydown) {
      target.onkeydown(e);
    }
  }

  handleKeyUp(e) {
    const target = e.target;
    if (target && target.classList?.contains("focusable") && target.onkeyup) {
      target.onkeyup(e);
    }
  }

  handleMouseEnter(e) {
    const target = e.target;
    if (target && target.classList?.contains("focusable") && target.onmouseenter) {
      target.onmouseenter(e);
    }
  }

  handleMouseLeave(e) {
    const target = e.target;
    if (target && target.classList?.contains("focusable") && target.onmouseleave) {
      target.onmouseleave(e);
    }
  }
}
