import App from "../App.jsx"
import Stage from "../components/canvas/graphics/stage.js"

export function renderCanvas() {
  const appEl = document.getElementById("app")
  const appInstance = new App()

  const stage = new Stage(appInstance, 500, 500)
  stage.start()

  if (appEl) {
    const rendered = appInstance.render()

    if (rendered != null) {
      if (typeof rendered === "string") {
        // Caso o render() retorne string
        appEl.innerHTML = rendered
      } else if (rendered instanceof Node) {
        // Caso retorne um único Node (HTMLElement, Text, SVG, etc.)
        appEl.appendChild(rendered)
      } else if (Array.isArray(rendered)) {
        // Caso retorne uma lista de Nodes/strings
        rendered.forEach(el => {
          if (typeof el === "string") {
            appEl.insertAdjacentHTML("beforeend", el)
          } else if (el instanceof Node) {
            appEl.appendChild(el)
          }
        })
      } else {
        console.warn("Tipo de retorno de App.render() não suportado:", rendered)
      }
    }
  }
}