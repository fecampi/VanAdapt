import { Easing } from './easing.js';

export default class Shape {
  constructor() {
    this.onClick = null;
    this.stage = null;
    this.tweens = [];
    this.focusable = false; // Por padrão, shapes não são focáveis
  }

  tween(props, duration = 1000, easing = 'linear') {
    const start = {};
    const change = {};
    for (const key in props) {
      start[key] = this[key];
      change[key] = props[key] - this[key];
    }
    const tween = {
      elapsed: 0,
      duration,
      easingFunc: Easing[easing] || Easing.linear,
      finished: false,
      update: () => {
        if (tween.finished) return;
        tween.elapsed += 16; // ~60fps
        let t = Math.min(tween.elapsed / tween.duration, 1);
        const factor = tween.easingFunc(t);
        for (const key in props) {
          this[key] = start[key] + change[key] * factor;
        }
        if (t >= 1) tween.finished = true;
      }
    };
    this.tweens.push(tween);
  }

  update() {
    // Atualiza todos os tweens deste shape
    this.tweens = this.tweens.filter((tween) => {
      tween.update();
      return !tween.finished;
    });
  }
}
