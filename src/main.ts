import van from "vanjs-core"
import App from "./App.jsx"

// Monta o componente App dentro da div #app do index.html
const appEl = document.getElementById("app")
if (appEl) {
  const appInstance = new App()
  van.add(appEl, appInstance.render())
}