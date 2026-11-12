---
id: commands
title: Command reference
sidebar_position: 1
description: npm and Git commands used in the docs workflow.
tags: [reference]
---

# Command reference

## npm scripts

| Command | What it does |
|---|---|
| `npm install` | Installs dependencies (once, and after `package.json` changes) |
| `npm start` | Starts the local site with live reload |
| `npm run build` | Builds the static site into `build/` |
| `npm run serve` | Serves the built site locally |
| `npm run lint:md` | Lints Markdown files |
| `npm run check` | Lints and builds, the same checks CI runs |
| `npm run clear` | Clears the Docusaurus cache |
| `npm run init -- org repo "Name"` | Replaces the starter placeholders |

## Git commands

| Command | What it does |
|---|---|
| `git switch -c docs/my-change` | Creates and switches to a new branch |
| `git add .` | Stages all changes |
| `git commit -m "docs: explain X"` | Commits with a message |
| `git push -u origin docs/my-change` | Pushes the branch to GitHub |
| `git switch main && git pull` | Updates local `main` after a merge |
