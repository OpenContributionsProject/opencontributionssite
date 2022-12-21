<h1 align="center">Open Contributions Site</h1>

<p align="center">An effort to describe and quantify corporate contributions to open source.
Our goal is to empower employees advocating for open source contributions to their employers. 💙</p>

<p align="center">
<em>
See <a href="https://github.com/OpenContributionsProject">github.com/OpenContributionsProject</a> for more details.
</em>
</p>

<p align="center">
	<a href="#contributors" target="_blank">
<!-- prettier-ignore-start -->
<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
<img alt="All Contributors: 4" src="https://img.shields.io/badge/all_contributors-4-21bb42.svg" />
<!-- ALL-CONTRIBUTORS-BADGE:END -->
<!-- prettier-ignore-end -->
	</a>
	<a href="https://codecov.io/gh/JoshuaKGoldberg/template-typescript-node-package" target="_blank">
		<img alt="Codecov Test Coverage" src="https://codecov.io/gh/JoshuaKGoldberg/template-typescript-node-package/branch/main/graph/badge.svg?token=eVIFY4MhfQ"/>
	</a>
	<a href="https://github.com/JoshuaKGoldberg/template-typescript-node-package/blob/main/.github/CODE_OF_CONDUCT.md" target="_blank">
		<img alt="Contributor Covenant" src="https://img.shields.io/badge/code_of_conduct-enforced-21bb42" />
	</a>
	<a href="https://github.com/JoshuaKGoldberg/template-typescript-node-package/blob/main/LICENSE.md" target="_blank">
	    <img alt="License: MIT" src="https://img.shields.io/github/license/JoshuaKGoldberg/template-typescript-node-package?color=21bb42">
    </a>
	<a href="https://github.com/sponsors/JoshuaKGoldberg" target="_blank">
    	<img alt="Sponsor: On GitHub" src="https://img.shields.io/badge/sponsor-on_github-21bb42.svg" />
    </a>
	<img alt="Style: Prettier" src="https://img.shields.io/badge/style-prettier-21bb42.svg" />
    <img alt="TypeScript: Strict" src="https://img.shields.io/badge/typescript-strict-21bb42.svg" />
</p>

## Development Guide

After [forking the repo from GitHub](https://help.github.com/articles/fork-a-repo) and [installing pnpm](https://pnpm.io/installation):

```shell
git clone https://github.com/<your-name-here>/template-typescript-node-package
cd template-typescript-node-package
pnpm install
```

> This repository includes a list of suggested VS Code extensions.
> It's a good idea to use [VS Code](https://code.visualstudio.com) and accept its suggestion to install them, as they'll help with development.

Then, you'll be ready to run the [Next.js](https://nextjs.org) dev server locally:

```shell
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`.
The page auto-updates as you edit the file. ✨

## Next.js

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

## Other Dev Tools

This repo uses a suite of other development tools to keep code clean.
It sets up the following tooling for you:

- [**All Contributors**](https://allcontributors.org): Tracks various kinds of contributions and displays them in a nicely formatted table in the README.md.
- [**ESLint**](https://eslint.org): Static analysis for JavaScript code, configured with [typescript-eslint](https://typescript-eslint.io) for TypeScript code and other general-use plugins.
- [**Markdownlint**](https://github.com/DavidAnson/markdownlint): Static analysis for Markdown code.
- [**pnpm**](https://pnpm.io): Desk-efficient package manager alternative.
- [**PR Compliance Action**](https://github.com/mtfoley/pr-compliance-action): Checks PRs for compliance on chore such as addressing a linked issue and proper title formatting.
- [**Prettier**](https://prettier.io): Opinionated formatting for code, run on file save and as a Git commit hook via [husky](https://typicode.github.io/husky) and [lint-staged](https://github.com/okonet/lint-staged).
- [**release-it**](https://github.com/release-it/release-it): Generates changelogs, bumps the package version, and publishes to GitHub and npm based on [conventional commits](https://www.conventionalcommits.org).
- [**Renovate**](https://docs.renovatebot.com): Keeps dependencies up-to-date with PRs, configured to wait a few days after each update for safety.
- [**ts-prune**](https://github.com/nadeesha/ts-prune): Unused exports detection for TypeScript code.
- [**TypeScript**](https://typescriptlang.org): A typed superset of JavaScript, configured with strict compiler options.
- [**Vitest**](https://vitest.dev): Fast unit tests, configured with coverage tracking.
