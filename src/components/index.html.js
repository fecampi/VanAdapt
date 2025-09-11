import van from "vanjs-core";
const { tags } = van;
import ButtonHtml from "./html/ButtonHtml.js";

const create =
  (C) =>
  (...args) =>
    new C(...args).render();

export const Button = create(ButtonHtml);

export const View = (...args) => tags.div(...args);

export const state = (...args) => van.state(...args);

// Instanciadores VanJS para elementos gráficos
export function Text({
  text = "teste",
  color = "#000",
  x = 0,
  y = 0,
  font = "16px Arial",
  align = "center",
  baseline = "middle",
  ...props
} = {}) {
  return tags.span(
    {
      style: `
      position: absolute;
      left: ${x}px;
      top: ${y}px;
      color: ${color};
      font: ${font};
      text-align: ${align};
      vertical-align: ${baseline};
      ${props.style ?? ""}
    `,
      ...props,
    },
    text
  );
}

export function Rect(
  {
    x = 0,
    y = 0,
    width = 100,
    height = 40,
    color = "#000",
    borderRadius = 0,
    ...props
  } = {},
  ...children
) {
  return tags.div(
    {
      style: `
      position: absolute;
      left: ${x}px;
      top: ${y}px;
      width: ${width}px;
      height: ${height}px;
       background: ${color};
      border-radius: ${borderRadius}px;
      ${props.style ?? ""}
    `,
      ...props,
    },
    ...children
  );
}

export function Circle({
  x = 0,
  y = 0,
  radius = 20,
  color = "#000",
  ...props
} = {}) {
  return tags.div({
    style: `
      position: absolute;
      left: ${x - radius}px;
      top: ${y - radius}px;
      width: ${radius * 2}px;
      height: ${radius * 2}px;
      background: ${color};
      border-radius: 50%;
      ${props.style ?? ""}
    `,
    ...props,
  });
}

export function Container(
  { x = 0, y = 0, width, height, ...props } = {},
  ...children
) {
  return tags.div(
    {
      style: `
      position: absolute;
      left: ${x}px;
      top: ${y}px;
      ${width ? `width: ${width}px;` : ""}
      ${height ? `height: ${height}px;` : ""}
      ${props.style ?? ""}
    `,
      ...props,
    },
    ...children
  );
}
