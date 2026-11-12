---
id: workflow
title: Contribution workflow
sidebar_position: 1
description: Branch, commit, open a pull request, get a review, and merge.
tags: [contributing, git]
---

# Contribution workflow

```text
branch  ->  edit  ->  commit  ->  push  ->  pull request  ->  checks + review  ->  merge  ->  deploy
```

1. **Branch.** In VS Code, select the branch name in the status bar and choose **Create new branch**, for example `docs/update-install-guide`.
2. **Edit** Markdown files and preview them with `npm start`.
3. **Commit** with a clear message, such as `docs: clarify install prerequisites`.
4. **Push** the branch, then open a **pull request** into `main`.
5. **Checks run automatically.** Fix any lint or build failures.
6. **Review.** Code owners are requested automatically and must approve.
7. **Merge.** The deploy workflow publishes the site within a few minutes.

:::info Branch protection
The `main` branch requires a pull request, a passing `validate` check, and a code owner review.
Direct pushes to `main` are blocked.
:::

## Commit message style

Use a short prefix: `docs:` for content, `fix:` for corrections, `chore:` for tooling.
