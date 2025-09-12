// Botão DOM
import { View, state, Text, Focusable } from "components";

// Constantes de estilo
const COLORS = {
  success: "#28a745",
  primary: "#007bff",
  warning: "#9c5809ff",
  danger: "#ff5733ff",
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
  }

  handleIncrement = () => {
    this.text.val = this.text.val + 1;
  };

  handleDecrement = () => {
    this.text.val = this.text.val - 1;
  };

  render() {
    return View(
      { width: 500, height: 500 },

      Focusable(
        {
          ...BUTTON,
          y: 100,
          color: COLORS.success,
          onClick: this.handleIncrement,
        },
        Text({ ...TEXT, text: "increment" })
      ),

      Focusable(
        {
          ...BUTTON,
          y: 200,
          color: COLORS.primary,
          onClick: this.handleDecrement,
        },
        Text({ ...TEXT, text: "decrement" })
      ),

      Focusable(
        { ...BUTTON, y: 300, color: COLORS.warning },
        Text({ ...TEXT, text: this.text })
      )
    );
  }
}
