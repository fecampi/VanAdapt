import van from "vanjs-core";
const { tags } = van;

import ViewHtml from "../components/html/graphics/viewHtml.js";
import ImageHtml from "../components/html/graphics/ImageHtml.js";

const create =
  (C) =>
  (...args) =>
    new C(...args).render();


export const View = create(ViewHtml);
export const Image = create(ImageHtml);



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
  verticalAlign,
  ...props
} = {}) {
  let positionStyle = "";
  if (baseline === "middle" || verticalAlign === "middle") {
    if (align === "center") {
      // Centralizar tanto horizontal quanto verticalmente
      positionStyle = `
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
      `;
    } else {
      positionStyle = `
        left: ${x}px;
        top: 50%;
        transform: translateY(-50%);
      `;
    }
  } else if (baseline === "bottom" || verticalAlign === "bottom") {
    positionStyle = `
      left: ${x}px;
      bottom: 0;
    `;
  } else {
    positionStyle = `
      left: ${x}px;
      top: ${y}px;
    `;
  }

  return tags.span(
    {
      style: `
      position: absolute;
      ${positionStyle}
      color: ${color};
      font: ${font};
      text-align: ${align};
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
