import van from "vanjs-core";
const { tags } = van;
import ButtonHtml from "./html/ButtonHtml.js";

const create =
  (C) =>
  (...args) =>
    new C(...args).render();

export const Button = create(ButtonHtml);


export const View = (...args) => tags.div(...args);
