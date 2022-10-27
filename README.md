<h1 align="center">
    <a href="https://www.cannect.life/">🔗 CANNECT CLIENT</a>
</h1>
<p align="center">🚀 Teste para validação do team cannect </p>

## What is inside?

Este projeto usa muitas coisas como:

- [TypeScript](https://www.typescriptlang.org/)
- [NextJS](https://nextjs.org/)
- [Styled Components](https://styled-components.com/)
- [Jest](https://jestjs.io/)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro)
- [Storybook](https://storybook.js.org/)
- [Eslint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [Husky](https://github.com/typicode/husky)


### OBS

Eu não finalizei o projeto, pois acabei ficando bem corrido com outros 2 projetos que precisava
entregar... mas consegui fazer algumas coisinhas para teste.

### Features

- [x] Husky - Lint
- [x] Generators
- [x] Styles
- [X] Jest
- [X] Storybook
- [ ] Cypress

## Começando

(obs): vou deixar apenas o front para rodar sem necessidade de baixar o back
caso queira rodar com o backend, pode me chamar, pois iria precisar do dump do back.
na home eu deixei apenas utilizando mocks, e comentado um fetch a baixo a API

Primeiro, execute o servidor de desenvolvimento:

```bash
npm run dev
# or
yarn dev
```

Abra [http://localhost:3000](http://localhost:3000) no seu navegador para ver o resultado.


## Commands

- `dev`: roda sua aplicação em `localhost:3000`
- `build`: cria uma versão para produção
- `start`: inicia um servidor simples com o código de produção da compilação
- `lint`: executa o linter em todos os componentes e páginas
- `test`: executa jest para testar todos os componentes e páginas
- `test:watch`: executa jest no modo de relógio
- `storybook`: roda o storybook em `localhost:6006`
- `build-storybook`: criar a versão de compilação do storybook
- `generate ${component-name}`: para criar um componente com a estrutura padrão do projeto


### Command Generate

  Particularmente para mim este comando é vida kkkk
utilizo o plop para gerar a estrutura inicial de um componente, assim deixando tudo no padrão

![alt text](https://github.com/Paulo-Martin182/cannect-client/blob/main/public/plop2.png)


### Exemplo da saida do Husky no terminal

![alt text](https://github.com/Paulo-Martin182/cannect-client/blob/main/public/huskyex.png)



## Estruturação geral

### o fluxo geral é dividio em
``` yarn generate -> criar os componentes utilizando storybook -> testes -> template Page -> data mock page -> data fetch page ```



## Fique por dentro

Para saber mais sobre Next.js, dê uma olhada nos seguintes recursos:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

Você pode conferir [the Next.js GitHub repository](https://github.com/vercel/next.js/) - seus comentários e contribuições são bem-vindos!
