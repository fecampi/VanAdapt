# VanAdapt

VanAdapt é um experimento simples para testar diferentes formas de renderização de interfaces: HTML e Canvas.

> **Inspirado e baseado nos frameworks [VanJS](https://vanjs.org/), [Konva](https://konvajs.org/) e outros.**

## Objetivo

Este é um projeto experimental para comparar performance e comportamento entre renderização HTML tradicional e Canvas, usando uma API simples e consistente.

## O que faz

- **Renderização HTML**: Usa DOM tradicional com VanJS
- **Renderização Canvas**: Desenha elementos diretamente no canvas
- **API Unificada**: Mesma sintaxe para ambos os modos
- **Estado Reativo**: Sistema simples de estado que funciona em ambos

## Como Usar

1. Instale as dependências:
   ```bash
   npm install
   ```

2. Para testar no modo Canvas:
   ```bash
   npm run dev:canvas
   ```

3. Para testar no modo HTML:
   ```bash
   npm run dev:html
   ```

## Exemplo

```javascript
// Mesmo código funciona em HTML e Canvas
import { Button, View, state } from "components";

const contador = state(0);

const app = View(
  { width: 500, height: 300 },
  Button({
    text: contador,
    onClick: () => contador.val++,
    x: 50, y: 50
  })
);
```

## Tecnologias

- **VanJS**: Para reatividade e HTML
- **Canvas API**: Para renderização gráfica
- **Vite**: Build tool

---

VanAdapt: Um experimento simples de renderização.
