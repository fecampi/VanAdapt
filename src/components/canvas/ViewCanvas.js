import {
  Stage,
  Layer,
} from "./graphics";

export default class ViewCanvas{
  constructor({ width = 500, height = 500 } = {}) {
    this.container = document.createElement("div");
    this.container.style.position = "relative";
    this.container.style.width = width + "px";
    this.container.style.height = height + "px";

    this.stage = new Stage(this.container, width, height);
    this.layer = new Layer();
    this.stage.add(this.layer);
    this.stage.start();
  }

  add(...elements) {
    elements.forEach(el => this.layer.add(el));
    this.stage.draw();
  }

  render() {
    return this.container;
  }
}