import App from "../App";
import Stage from "../components/canvas/graphics/stage.js";
import { printTree } from "../utils/index.js";

export function renderCanvas() {
  const appEl = document.getElementById("app");
  const appInstance = new App();
  const stage = new Stage(appEl, 1280, 720);
  stage.start();

  const tree = appInstance.render();

  printTree(tree);

  stage.add(tree);
}
