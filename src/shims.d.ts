// Declarações globais para módulos JS/JSX
declare module "../App" {
  const App: any;
  export default App;
}

declare module "../App.jsx" {
  const App: any;
  export default App;
}

declare module "../components/canvas/graphics/stage.js" {
  const Stage: any;
  export default Stage;
}

declare module "../utils/index.js" {
  export function printTree(...args: any[]): any;
}

declare module "../components/html/graphics/interactionManagerHtml.js" {
  const HtmlInteractionManager: any;
  export default HtmlInteractionManager;
}

// Declarações para caminhos absolutos também
declare module "*/App" {
  const App: any;
  export default App;
}

declare module "*/App.jsx" {
  const App: any;
  export default App;
}

declare module "*/stage.js" {
  const Stage: any;
  export default Stage;
}

declare module "*interactionManagerHtml.js" {
  const Manager: any;
  export default Manager;
}

declare module "*utils/index.js" {
  export function printTree(...args: any[]): any;
}
