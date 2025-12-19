# Cadastro DevClub Usuários

Uma aplicação web de cadastro de usuários desenvolvida com **React**, **Vite** e **Styled Components**.

## 🚀 Tecnologias

- **React 19.2.0** — Biblioteca JavaScript para construir interfaces de usuário
- **Vite 7.2.4** — Build tool rápido e moderno
- **Styled Components 6.1.19** — Estilização CSS-in-JS
- **ESLint 9.39.1** — Linter para código JavaScript

## 📋 Funcionalidades

- ✅ Formulário de cadastro de usuários
- ✅ Campos: Nome, Idade e Email
- ✅ Design responsivo
- ✅ Estilos globais padronizados
- ✅ Componentes reutilizáveis com styled-components

## 📦 Estrutura do Projeto

```
cadastro-devclub-usuarios/
├── src/
│   ├── App.jsx                 # Componente principal
│   ├── main.jsx                # Ponto de entrada
│   ├── styles.js               # Componentes styled
│   ├── assets/                 # Imagens e recursos
│   └── styles/
│       └── GlobalStyles.js     # Estilos globais
├── index.html                  # HTML principal
├── package.json                # Dependências do projeto
├── vite.config.js              # Configuração do Vite
├── eslint.config.js            # Configuração do ESLint
└── README.md                   # Este arquivo
```

## 🔧 Instalação

1. Clone o repositório (ou extraia os arquivos)
2. Instale as dependências:

```bash
npm install
```

## ▶️ Como Executar

### Modo desenvolvimento

Inicie o servidor de desenvolvimento com:

```bash
npm run dev
```

A aplicação estará disponível em `http://localhost:5173` (ou a porta padrão do Vite).

### Build para produção

Compile o projeto para produção:

```bash
npm run build
```

Os arquivos otimizados serão gerados na pasta `dist/`.

### Preview da build

Visualize a build de produção localmente:

```bash
npm run preview
```

## 🔍 Linting

Verifique o código em busca de erros e inconsistências:

```bash
npm run lint
```

## 📁 Componentes Principais

### `App.jsx`
Componente raiz que renderiza o formulário de cadastro com:
- Imagem de usuário no topo
- Formulário com inputs para Nome, Idade e Email
- Botão de cadastro

### `styles.js`
Define componentes styled:
- `Container` — Contêiner principal
- `TopBackground` — Seção superior com imagem
- `Form` — Formulário estilizado
- `ContainerInput` — Grupo de inputs
- `Input` — Campo de entrada
- `Button` — Botão de cadastro
- `InputLabel` — Rótulo de input
- `TitleColor` — Título do formulário

### `styles/GlobalStyles.js`
Define estilos globais:
- Reset de margin e padding
- Box-sizing border-box
- Fonte padrão Roboto

## 🎨 Customização

Para alterar cores, fontes ou layouts, edite:
- `src/styles.js` — Para componentes individuais
- `src/styles/GlobalStyles.js` — Para estilos globais

## 📝 Notas de Desenvolvimento

- Os inputs aceitam apenas números para idade (`type="number"`)
- O email tem validação nativa do navegador (`type="email"`)
- A imagem do usuário deve estar em `src/assets/users.png`

## 🤝 Contribuições

Este é um projeto de aprendizado. Sinta-se livre para fazer ajustes e melhorias!

## 📄 Licença

Este projeto é de uso livre para fins educacionais.
