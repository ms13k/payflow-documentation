---
id: installation
title: Installation
sidebar_position: 1
description: Install Node.js, Git, and VS Code, then run the docs site locally.
tags: [setup]
---

# Installation

## Prerequisites

| Tool | Version | Check with |
|---|---|---|
| Node.js | 20 LTS or later | `node --version` |
| Git | Any recent version | `git --version` |
| VS Code | Latest | Open it and check **Help > About** |
| GitHub account | With access to this repository | Sign in at github.com |

## Run the site locally

```bash
git clone https://github.com/YOUR-ORG/YOUR-REPO.git
cd YOUR-REPO
npm install
npm start
```

The site opens at `http://localhost:3000/YOUR-REPO/`. Edits to Markdown files reload the page automatically.

:::note
The `baseUrl` is `/YOUR-REPO/` by default because GitHub Pages serves project sites from a subpath.
Set `DOCS_BASE_URL=/` to serve from the root while you work.
:::

## Check your work before a pull request

```bash
npm run check
```

This runs the Markdown linter and a production build. The build fails on broken internal links.
