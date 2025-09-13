// Componente ImageCanvas para renderizar imagem em canvas
export default class ImageCanvas {
  constructor({
    src,
    x = 0,
    y = 0,
    width = 100,
    height = 100,
    borderRadius = 0,
    ...props
  } = {}) {
    this.src = src;
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.borderRadius = borderRadius;
    this.props = props;
    this.image = new window.Image();
    this.image.src = src;
  }

  draw(ctx) {
    if (!this.image.complete) {
      this.image.onload = () => this.draw(ctx);
      return;
    }
    if (this.borderRadius > 0) {
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(this.x + this.borderRadius, this.y);
      ctx.lineTo(this.x + this.width - this.borderRadius, this.y);
      ctx.quadraticCurveTo(this.x + this.width, this.y, this.x + this.width, this.y + this.borderRadius);
      ctx.lineTo(this.x + this.width, this.y + this.height - this.borderRadius);
      ctx.quadraticCurveTo(this.x + this.width, this.y + this.height, this.x + this.width - this.borderRadius, this.y + this.height);
      ctx.lineTo(this.x + this.borderRadius, this.y + this.height);
      ctx.quadraticCurveTo(this.x, this.y + this.height, this.x, this.y + this.height - this.borderRadius);
      ctx.lineTo(this.x, this.y + this.borderRadius);
      ctx.quadraticCurveTo(this.x, this.y, this.x + this.borderRadius, this.y);
      ctx.closePath();
      ctx.clip();
      ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
      ctx.restore();
    } else {
      ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
    }
  }
}
