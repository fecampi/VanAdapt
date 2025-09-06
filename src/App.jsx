// Botão DOM
import { Button, View, state } from "components";


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
      Button({
        text: this.text, 
        onClick: this.handleIncrement,
        x: 50,
        y: 100,
        width: 250,
        height: 80,
        backgroundColor: "#28a745",
        color: "white",
        fontSize: "18px",
        borderRadius: 20,
        fontFamily: "Arial",
        textAlign: "center",
        textBaseline: "middle",
        lineHeight: "80px",
        cursor: "pointer",
      }),
      Button({
        text: this.text,
        onClick: this.handleDecrement,
        x: 50,
        y: 200,
        width: 250,
        height: 80,
        backgroundColor: "#007bff",
        color: "white",
        fontSize: "18px",
        borderRadius: 20,
        fontFamily: "Arial",
        textAlign: "center",
        textBaseline: "middle",
        lineHeight: "80px",
        cursor: "pointer",
      })
    );
  }
}
