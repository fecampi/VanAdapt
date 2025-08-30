// Botão DOM
import { Button, View } from "components";

// App principal
export default class App {
  constructor() {}

  render() {
    return View(
      { width: 500, height: 500 },
      Button({
        text: "Botão 1",
        onClick: () => alert("Botão DOM clicado!"),
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
      })
    );
  }
}
