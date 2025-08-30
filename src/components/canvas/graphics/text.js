export default class Text {
  constructor(props = {}) {
    if (typeof props === 'object' && props !== null) {
      this.x = props.x ?? 0;
      this.y = props.y ?? 0;
      this.text = props.text ?? '';
      this.color = props.fill ?? props.color ?? '#000';
      this.font = props.font ?? '16px Arial';
      this.align = props.align ?? 'center';
      this.baseline = props.baseline ?? 'middle';
    } else {
      this.x = arguments[0] ?? 0;
      this.y = arguments[1] ?? 0;
      this.text = arguments[2] ?? '';
      this.color = arguments[3] ?? '#000';
      this.font = arguments[4] ?? '16px Arial';
      this.align = arguments[5] ?? 'center';
      this.baseline = arguments[6] ?? 'middle';
    }
  }

  draw(ctx) {
    ctx.fillStyle = this.color;
    ctx.font = this.font;
    ctx.textAlign = this.align;
    ctx.textBaseline = this.baseline;
    ctx.fillText(this.text, this.x, this.y);
  }
}
