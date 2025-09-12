import { Stage } from "./graphics";

export default class ViewCanvas{
  constructor({ width = 500, height = 500 } = {}) {
    const app = document.getElementById("app");
    this.stage = new Stage(app, width, height);
    this.stage.start();
  }

  add(...elements) {
    elements.forEach(el => this.stage.add(el));
  }

  render() {
    return this.container;
  }
}