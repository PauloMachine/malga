# Checkout - E-commerce

## Descrição

Este projeto consiste em um sistema de Checkout para um e-commerce de grande escala no Brasil. O principal objetivo é permitir que os clientes efetuem pagamentos na página de Checkout e fornecer uma ferramenta para o time de operações do e-commerce acompanhar e controlar as vendas do dia.

Site: https://checkout-malga-santiago.vercel.app

## Tecnologias Utilizadas

- **Framework:** Next.js
- **Bibliotecas:** React, TypeScript, Tailwind CSS
- **Gerenciamento de Estado:** React Hooks
- **Mock de API:** Next.js
- **Validação de Formulários:** Card Validator

## Estrutura do Projeto

```
checkout/
├── public/
│   ├── db/ -> Mock JSON
│   ├── images/ -> Imagens estáticas
├── src/
│   ├── assets/ -> Estilos globais (Tailwind)
│   ├── components/
│   │   ├── checkout-process/
│   │   ├── ui/ -> "Design System"
│   ├── features/
│   │   ├── checkout/
│   │   ├── transactions/
│   │       ├── transaction/
│   ├── hooks/ -> Hooks globais (checkout e transactions)
│   ├── pages/
│   │   ├── api/ -> Mock Next
│   │   ├── transactions/
│   │   ├── _app.tsx
│   │   ├── _document.tsx
│   │   ├── checkout.tsx
│   ├── services/ -> Services globais (malga-api, checkout e transactions)
│   ├── types/ -> Types globais
│   ├── utils/ -> Utils globais
│   │   ├── App.tsx
├── .env
├── README.md
```

## Como Rodar o Projeto

1. Clone o repositório:
   ```sh
   git clone https://github.com/PauloMachine/checkout.git
   cd checkout
   ```
2. Instale as dependências:
   ```sh
   npm install
   ```
3. Inicie o projeto:
   ```sh
   npm run dev
   ```

## Pages Speed

- [x] Relatório
  - ![Pages Speed](/public/images/pages-speed.png)
