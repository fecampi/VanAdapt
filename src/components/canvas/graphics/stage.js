export default class Stage {
  constructor(container, width, height) {
  this.canvas = document.createElement('canvas');
  this.canvas.width = width;
  this.canvas.height = height;
  this.ctx = this.canvas.getContext('2d');
  this.canvas.style.display = "block";
  this.canvas.style.position = "absolute";
  this.canvas.style.left = "0";
  this.canvas.style.top = "0";
    if (typeof container === 'string') {
      document.getElementById(container)?.appendChild(this.canvas);
    } else if (container instanceof HTMLElement) {
      container.appendChild(this.canvas);
    }
    this.shapes = [];
    this.canvas.addEventListener('click', e => this.handleClick(e));
    this.animating = false;
    this.fps = 60; // padrão
    this.showFPS = true; 
    this.lastFrameTime = performance.now();
    this.currentFPS = 0;
  }

  add(shape) {
    this.shapes.push(shape);
    shape.stage = this;
    this.draw();
  }

  draw() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    // Desenhar shapes
    for (const shape of this.shapes) shape.draw(this.ctx);

    // Desenhar FPS se ativo
    if (this.showFPS) {
      this.ctx.save();
      this.ctx.fillStyle = "#0f0";
      this.ctx.font = "16px monospace";
      this.ctx.fillText(`FPS: ${this.currentFPS.toFixed(1)}`, 10, 20);
      this.ctx.restore();
    }
  }

  handleClick(e) {
    const rect = this.canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    for (const shape of this.shapes) {
      if (shape.handleClick) shape.handleClick(x, y);
    }
  }

  setFPS(fps) {
    this.fps = fps;
  }

  toggleFPS(show) {
    this.showFPS = show;
  }

  start() {
    if (!this.animating) {
      this.animating = true;
      let lastTime = performance.now();
      const loop = (now) => {
        if (!this.animating) return;
        const delta = now - lastTime;
        const interval = 1000 / this.fps;
        if (delta >= interval) {
          lastTime = now - (delta % interval);

          // Atualizar FPS
          this.currentFPS = 1000 / delta;

          this.draw();
          for (const shape of this.shapes) {
            if (shape.update) shape.update();
          }
        }
        requestAnimationFrame(loop);
      };
      requestAnimationFrame(loop);
    }
  }

  stop() {
    this.animating = false;
  }
}
