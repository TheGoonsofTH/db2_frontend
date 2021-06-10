# db2 frontend

## Features
- Vue 3
- Vuex 4 store (fully typed)
- TypeScript
- Tailwind CSS w/ JIT compiler + following plugins preinstalled
  - `@tailwindcss/aspect-ratio`
  - `@tailwindcss/line-clamp`
  - `@tailwindcss/typography`
  - `@tailwindcss/forms`
- PostCSS 8 w/ `postcss-nesting` plugin
- Eslint
- Prettier
- Alias `@` to `<project_root>/src`
- Cypress.io e2e tests (configured similarly to `vue-cli`)
- GitHub workflows
  - Dependabot
  - Automated e2e tests
## Project setup and usage

Install dependencies:

```
yarn
```

Run development server:

```
yarn dev
```

Open Cypress test runner:

```
yarn test
```

Run Cypress tests in headless mode:

```
yarn test:ci
```

