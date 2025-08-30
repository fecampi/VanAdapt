# VanAdapt

VanAdapt é uma biblioteca de componentes flexível e adaptável, projetada para oferecer suporte a diferentes dispositivos e modos de renderização, como Canvas, HTML e outros sistemas nativos. Com o VanAdapt, você pode criar interfaces de usuário modernas e responsivas que funcionam perfeitamente em qualquer ambiente.

> **Inspirado e baseado nos frameworks estudados e utilizados, como [Konva](https://konvajs.org/), [React](https://react.dev/), [PixiJS](https://pixijs.com/), [VanJS](https://vanjs.org/) e outros.**

## Objetivo

O objetivo do VanAdapt é fornecer uma solução unificada para o desenvolvimento de componentes reutilizáveis, permitindo que desenvolvedores escolham o modo de renderização mais adequado às suas necessidades, sem comprometer a experiência do usuário.

## Funcionalidades

- **Compatibilidade com Canvas e HTML**: Escolha o modo de renderização ideal para seu projeto.
- **Componentes Modulares**: Crie e reutilize componentes de forma eficiente.
- **Desempenho Otimizado**: Build específico para cada modo, eliminando código desnecessário.

## Como Usar

1. Instale as dependências do projeto:
   ```bash
   npm install
   ```

2. Para desenvolver no modo Canvas:
   ```bash
   npm run dev:canvas
   ```

3. Para desenvolver no modo HTML:
   ```bash
   npm run dev:html
   ```

4. Para gerar builds otimizados:
   ```bash
   npm run build
   ```

## Tecnologias Utilizadas

- **VanJS**: Framework leve para criação de interfaces reativas.
- **Vite**: Ferramenta de build rápida e moderna.
- **TypeScript**: Para maior segurança e escalabilidade no desenvolvimento.

## Vantagens do Build Otimizado

O VanAdapt gera arquivos otimizados, incluindo apenas os componentes necessários para o modo escolhido (Canvas, HTML ou outros). Isso reduz o tamanho do bundle e melhora o desempenho, já que a escolha do modo é feita no build, não em tempo de execução.

## Diferencial: Sem Dependência do DOM

Ao contrário de frameworks como React, o VanAdapt não depende do DOM para renderizar componentes. Isso traz benefícios significativos:

- **Desempenho Superior**: Reduz a sobrecarga causada pela manipulação do DOM, especialmente em dispositivos com recursos limitados.
- **Flexibilidade**: Permite renderizar em diferentes ambientes, como Canvas ou sistemas nativos, sem restrições do DOM.
- **Menor Tamanho**: Elimina dependências desnecessárias, resultando em bundles mais leves.

Essa abordagem torna o VanAdapt ideal para aplicações que exigem alta performance e compatibilidade com múltiplos dispositivos.

---

VanAdapt: Componentes que se adaptam ao seu mundo.
