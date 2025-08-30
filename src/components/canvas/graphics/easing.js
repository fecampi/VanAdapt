export const Easing = {
  linear: t => t,
  easeIn: t => t * t,
  easeOut: t => t * (2 - t)
};
