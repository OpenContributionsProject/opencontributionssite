# Development

We provide two preset ways to work on this repository that you can choose from:

- [Local Development](#local-development): Setting up the packages on your local machine
- [GitHub Codespaces](#github-codespaces): Using a cloud-hosted development environment

## Local Development

After [forking the repo from GitHub](https://help.github.com/articles/fork-a-repo) and [installing pnpm](https://pnpm.io/installation):

```shell
git clone https://github.com/<your-name-here>/opencontributionssite
cd opencontributionssite
pnpm install
```

> This repository includes a list of suggested VS Code extensions.
> It's a good idea to use [VS Code](https://code.visualstudio.com) and accept its suggestion to install them, as they'll help with development.

Then, you'll be ready to run the [Next.js](https://nextjs.org) dev server locally:

```shell
pnpm dev
```

You can start editing the page by modifying `pages/index.tsx`.
The page auto-updates as you edit the file. ✨

## GitHub Codespaces

This project is configured to run in [GitHub Codespaces](https://github.com/features/codespaces), a configurable cloud development environment accessible directly from your GitHub repository.

### Opening the Project in Codespaces

1. Navigate to the main page of the repository.
2. Click the green `Code` button.
3. In the dropdown, select `Open with Codespaces`.
4. Click on `+ New codespace`.

GitHub will create a new Codespace and automatically start the development server for you.
This process may take a few minutes.

### Using the Codespace

Once the Codespace is ready, it will open a VS Code interface in your browser.
The development server will start running, a port will be forwarded, and a browser preview will open within the Codespace.

You can start editing the page by modifying `src/pages/_app.tsx`.
The page auto-updates as you edit the file.

### Closing the Codespace

When you're done working, you can stop your Codespace by clicking on the `Codespaces` menu in GitHub, finding your Codespace, and selecting `Delete codespace`.

Remember, every user has 60+ hours of free usage per month.
After that, Codespaces are billed per usage, so it's a good idea to delete your Codespace when you're not using it.

## Technologies

### Next.js

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

### Other Dev Tools

This repo uses a suite of other development tools to keep code clean.
It sets up the following tooling for you:

- [**All Contributors**](https://allcontributors.org): Tracks various kinds of contributions and displays them in a nicely formatted table in the README.md.
- [**ESLint**](https://eslint.org): Static analysis for JavaScript code, configured with [typescript-eslint](https://typescript-eslint.io) for TypeScript code and other general-use plugins.
- [**Markdownlint**](https://github.com/DavidAnson/markdownlint): Static analysis for Markdown code.
- [**pnpm**](https://pnpm.io): Desk-efficient package manager alternative.
- [**PR Compliance Action**](https://github.com/mtfoley/pr-compliance-action): Checks PRs for compliance on chore such as addressing a linked issue and proper title formatting.
- [**Prettier**](https://prettier.io): Opinionated formatting for code, run on file save and as a Git commit hook via [husky](https://typicode.github.io/husky) and [lint-staged](https://github.com/okonet/lint-staged).
- [**Renovate**](https://docs.renovatebot.com): Keeps dependencies up-to-date with PRs, configured to wait a few days after each update for safety.
- [**ts-prune**](https://github.com/nadeesha/ts-prune): Unused exports detection for TypeScript code.
- [**TypeScript**](https://typescriptlang.org): A typed superset of JavaScript, configured with strict compiler options.
- [**Vitest**](https://vitest.dev): Fast unit tests, configured with coverage tracking.

### Formatting

[Prettier](https://prettier.io) is used to format code.
It should be applied automatically when you save files in VS Code or make a Git commit.

### Linting

This package includes several forms of linting to enforce consistent code quality and styling.
Each should be shown in VS Code, and can be run manually on the command-line:

- `pnpm lint` ([ESLint](https://eslint.org) with [typescript-eslint](https://typescript-eslint.io)): Lints JavaScript and TypeScript source files
- `pnpm lint:md` ([Markdownlint](https://github.com/DavidAnson/markdownlint)): Checks Markdown source files
- `pnpm lint:package` ([npm-package-json-lint](https://npmpackagejsonlint.org/)): Lints the `package.json` file
- `pnpm lint:packages` ([pnpm-deduplicate](https://github.com/ocavue/pnpm-deduplicate)): Deduplicates packages in the `pnpm-lock.yml` file
- `pnpm lint:prune` ([ts-prune](https://github.com/nadeesha/ts-prune)): Detects unused exports in TypeScript source files
- `pnpm lint:spelling` ([cspell](https://cspell.org)): Spell checks across all source files

### Testing

[Vitest](https://vitest.dev) is used for tests.
You can run it locally on the command-line:

```shell
pnpm run test
```

Add the `--coverage` flat to compute test coverage and place reports in the `coverage/` directory:

```shell
pnpm run test --coverage
```

### TypeScript

You should see feedback from [TypeScript](https://typescriptlang.org) in your editor.

If you'd like to get a real-time updated list of all TypeScript errors, you can run its `tsc` command-line locally:

```shell
pnpm tsc --watch
```
