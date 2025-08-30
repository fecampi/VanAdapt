import van from "vanjs-core"
import App from "./App"

// Monta o componente App dentro da div #app do index.html
const appEl = document.getElementById("app")
if (appEl) {
  const appInstance = new App()
  van.add(appEl, appInstance.render())
}