// Botão DOM
import { Button, View, state, Text, Rect, Container } from "components";

// App principal
export default class App {
  constructor() {
    this.text = state(0);
    this.color = state("#9c5809ff");
  }

  handleIncrement = () => {
    this.text.val = this.text.val + 1;
    this.color.val = "#ff5733ff";
  };

  handleDecrement = () => {
    this.text.val = this.text.val - 1;
    this.color.val = "#28a745";
  };

  render() {
    return View(
      { width: 500, height: 500 },
      Button({
        text: "increment",
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
        text: "decrement",
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
      }),

      Container(
        { x: 50, y: 300, width: 250, height: 80},
        Rect({
          x: 0,
          y: 0,
          width: 250,
          height: 80,
          color: "#9c5809ff",
          borderRadius: 20,
        }),
        Text({
          text: this.text,
          color: "white",
          x: 125,
          y: 40,
          font: "18px Arial",
          align: "center",
          baseline: "middle",
        })
      )
    );
  }
}
