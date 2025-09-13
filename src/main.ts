import { renderDOM } from "./renderers/dom.js"
import { renderCanvas } from "./renderers/canvas.js"

// Detecta o modo baseado na variável de ambiente do Vite
const isCanvasMode = import.meta.env.MODE === 'canvas'

// Bootstrap da aplicação - carrega o renderer apropriado
if (isCanvasMode) {
  renderCanvas()
} else {
  renderDOM()
}