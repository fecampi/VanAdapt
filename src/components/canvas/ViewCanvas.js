import {
  Stage,
  Layer,
} from "./graphics";

export default class ViewCanvas{
  constructor({ width = 500, height = 500 } = {}) {
    const app = document.getElementById("app");
    this.stage = new Stage(app, width, height);
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