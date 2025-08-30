import van from "vanjs-core";
const { tags } = van;
const { div } = tags;

import { Button } from "components";

export default class App {
  constructor() {
  
  }

  render() {
    return div(
      Button({
        text: "Botão 1",
        onClick: () => alert("Botão 1 clicado!"),
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
        boxShadow: "2px 2px 5px rgba(0,0,0,0.3)",
        cursor: "pointer",
      }),
      Button({
        text: "Botão 2",
        onClick: () => alert("Botão 2 clicado!"),
        x: 50,
        y: 200,
        width: 250,
        height: 80,
        backgroundColor: "#007bff",
        color: "white",
        fontSize: "22px",
        borderRadius: 20,
        fontFamily: "Arial",
        textAlign: "center",
        textBaseline: "middle",
        lineHeight: "80px",
        boxShadow: "2px 2px 5px rgba(0,0,0,0.3)",
        cursor: "pointer",
      })
    );
  }
}
