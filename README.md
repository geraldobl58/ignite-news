## Frontend NextJS

O projeto consiste num blog onde para ler algum psoto você deverá ser assinante, e é usado a API do Stripe para o controle de pagamento e salvando os dados dos inscritos no FaunaDB.

## Preview

<img src="./docs/assets/preview-desktop.gif" width="100%">


## Como Iniciar?

1.  **Faça o clone do repositório.**

    ```
      git clone https://github.com/geraldobl58/ignite-news.git
    ```

2.  **Instalação das dependências**

   execute na pasta do projeto o seguinte comando:

    ```npm install ou yarn
    ```

    após a instalação execute o seguinte comando.

    ```npm run dev ou yarn dev
    ```

3.  **Verificando no navegador**

    O projeto vai executar no seguinte endereço: `http://localhost:3000`

## Techs

 - [x] React
 - [x] Typescript
 - [x] NextJS
 - [x] FaunaDB
 - [x] Axios
 - [x] Prismic
 - [x] Srtipe
 - [x] Sass
 - [x] Eslint
 - [x] Prettier

## Atenção

Este aplicativo usa o CORS Anywhere porque a API REST do Yelp Fusion é destinada à comunicação de servidor para servidor e não oferece suporte a CORS

## .ENV

```bash

# Stripe
STRIPE_API_KEY=
NEXT_PUBLIC_STRIPE_PUBLIC_KEY=
STRIPE_API_PRICE_KEY=
STRIPE_WEBHOOK_SECRET=
STRIPE_SUCESS_URL=
STRIPE_CANCEL_URL=

# Github
GITHUB_CLIENT_ID=
GITHUB_CLIENT_SECRET=

# FaunaDB
FAUNADB_KEY=

# Prismic CMS
PRISMIC_ENDPOINT=
PRISMIC_ACCESS_TOKEN=
```



Estrutura do projeto.

## Diretórios

Estrutura do projeto.

    .
    ├── node_modules
    ├── src
    ├──────── components
    ├──────── pages
    ├──────── services
    ├──────── styles
    ├── .gitignore
    ├── .prettierrc
    ├── .editorconfig
    ├── .eslint.js
    ├── package.json
    └── README.md

1.  **`/node_modules`**: Este diretório contém todos os módulos de código dos quais seu projeto depende (pacotes npm) são instalados automaticamente.

2.  **`/src`**: Este diretório conterá todo o código relacionado ao que você verá no front-end do site (o que você vê no navegador), como o cabeçalho do site ou um modelo de página. `src` é uma convenção para "código fonte ".

3.  **`.gitignore`**: Este arquivo informa ao git quais arquivos ele não deve rastrear / não manter um histórico de versão.

4.  **`.prettierrc`**: Este é um arquivo de configuração para Prettier é uma ferramenta para ajudar a manter a formatação do código consistente e para manter um padrão. [Prettier](https://prettier.io/).

5.  **`.eslint.json`**: ESLint é uma ferramenta de análise de código estática para identificar padrões problemáticos encontrados no código JavaScript. [Eslint](https://eslint.org/).

6.  **`.editorconfig`**: O EditorConfig ajuda a manter estilos de codificação consistentes para vários desenvolvedores que trabalham no mesmo projeto em vários editores e IDEs. [Editorconfig](https://editorconfig.org/)

7. **`package-lock.json`** Este é um arquivo gerado automaticamente com base nas versões exatas das dependências do npm que foram instaladas para o seu projeto. ** (Você não altera este arquivo diretamente)**

8. **`package.json`**: Um arquivo é executado para projetos Node.js, que inclui itens como metadados (nome, autor do projeto etc.). Este arquivo é como o npm sabe quais pacotes instalar para o seu projeto.
