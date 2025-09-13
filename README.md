# VanAdapt

VanAdapt é um experimento simples para testar diferentes formas de renderização de interfaces: HTML e Canvas.

## Objetivo

VanAdapt é um estudo pessoal, criado para aprimorar técnicas de desenvolvimento de interfaces gráficas. Não se trata de um framework pronto para uso em produção, mas sim de um laboratório experimental onde exploro ideias, padrões e abordagens para renderização híbrida (HTML e Canvas). O objetivo é aprender, comparar e testar soluções que possam ser úteis em projetos futuros, especialmente em ambientes como Smart TVs.


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

## Componentes Híbridos

Esses componentes podem ser usados tanto em renderização HTML quanto Canvas, com propriedades semelhantes para facilitar a adaptação entre ambientes.

### View
- `x`, `y`, `width`, `height`, `color`, `borderRadius`, `cursor`, `focusable`, `id`, `class`, `style`, `children`
- Eventos: `onPress`, `onFocus`, `onBlur`, `onPressIn`, `onPressOut`, `onKeyDown`, `onKeyUp`, `onMouseEnter`, `onMouseLeave`

### Text
- `text`, `x`, `y`, `width`, `height`, `color`, `fontSize`, `fontFamily`, `textAlign`, `fontWeight`, `font`, `align`, `baseline`, `id`, `class`

### Rect
- `x`, `y`, `width`, `height`, `color`, `borderRadius`, `children`

### Circle
- `x`, `y`, `radius`, `color`

### Container
- `x`, `y`, `width`, `height`, `children`

### Image
- `src`, `x`, `y`, `width`, `height`, `borderRadius`

> Todos os componentes aceitam propriedades reativas (state) e podem ser usados de forma consistente tanto em HTML quanto em Canvas.

### Foco e Interação

Os componentes híbridos suportam foco e eventos de interação para acessibilidade e navegação via teclado:

- `focusable`: Torna o componente focável pelo teclado (Tab). Adiciona `tabIndex=0` automaticamente.
- `onFocus`: Executa uma ação quando o componente recebe foco.
- `onBlur`: Executa uma ação quando o componente perde o foco.
- `onPress`: Executa uma ação ao clicar ou pressionar Enter/Espaço quando focado.

**Exemplo de uso:**
```js
View({
  focusable: true,
  onFocus: () => {
    // Ação ao entrar foco
  },
  onBlur: () => {
    // Ação ao sair do foco
  },
  onPress: () => {
    // Ação ao clicar ou pressionar Enter/Espaço
  },
  ...outras props
})
```

Esses eventos permitem criar interfaces acessíveis e responsivas, facilitando navegação por teclado e interação com botões e áreas clicáveis.

## Tecnologias

- **VanJS**: Para reatividade e HTML
- **Canvas API**: Para renderização gráfica
- **Vite**: Build tool

## Inspiração e Bibliotecas Utilizadas

Este projeto foi desenvolvido com base em estudos sobre frameworks gráficos e reatividade, especialmente:

- **Phaser.js**: Serviu de referência para a arquitetura baseada em componentes gráficos, containers, propriedades de estilo/posição e sistema de eventos. A ideia de modularidade e flexibilidade de renderização (Canvas/WebGL) foi adaptada para o contexto de interfaces híbridas.
- **VanJS**: Inspirou a implementação da reatividade e simplicidade na manipulação de estado e atualização automática da interface, além da integração direta com HTML.
- **Konva**: Influenciou a abordagem de componentes gráficos e manipulação de canvas, especialmente para formas e imagens.
- **create.js**: Algumas ideias e padrões de instanciadores de componentes, reatividade, animação, gerenciamento de stage, desenho de retângulos e outros elementos gráficos foram extraídos e adaptados.

---



