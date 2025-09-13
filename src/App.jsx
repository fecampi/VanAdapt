// Botão DOM
import { View, state, Text, Image } from "components";

// Constantes de estilo
const COLORS = {
  success: "#4CAF50",
  primary: "#2196F3",
  warning: "#FF9800",
  danger: "#F44336",
  focus: "#673AB7",
};
const BUTTON = {
  x: 50,
  width: 250,
  height: 80,
  borderRadius: 20,
};

const TEXT = {
  color: "white",
  x: 125,
  y: 40,
  font: "18px Arial",
  align: "center",
  baseline: "middle",
};

// App principal
export default class App {
  constructor() {
    this.text = state(0);

    // estados reativos para cor dos botões
    this.incrementColor = state(COLORS.primary);
    this.decrementColor = state(COLORS.primary);
  }

  handleIncrement = () => {
    this.text.val = this.text.val + 1;
  };

  handleDecrement = () => {
    this.text.val = this.text.val - 1;
  };

  render() {
    return View(
      { width: 1280, height: 720 },

      // Botão Increment
      View(
        {
          ...BUTTON,
          y: 100,
          color: this.incrementColor,
          focusable: true,
          onPress: () => this.handleIncrement(),
          onFocus: () => {
            this.incrementColor.val = COLORS.focus;
          },
          onBlur: () => {
            this.incrementColor.val = COLORS.primary;
          },
        },
        Text({ ...TEXT, text: "increment" })
      ),

      // Botão Decrement
      View(
        {
          ...BUTTON,
          y: 200,
          color: this.decrementColor,
          focusable: true,
          onPress: () => this.handleDecrement(),
          onFocus: () => {
            this.decrementColor.val = COLORS.focus;
          },
          onBlur: () => {
            this.decrementColor.val = COLORS.primary;
          },
        },
        Text({ ...TEXT, text: "decrement" })
      ),

      // Valor atual
      View(
        { ...BUTTON, y: 300, color: COLORS.warning },
        Text({ ...TEXT, text: this.text })
      ),
      Image({
        src: "https://picsum.photos/400/240",
        x: 50,
        y: 420,
        width: 400,
        height: 240,
        borderRadius: 20,
      })
    );
  }
}
