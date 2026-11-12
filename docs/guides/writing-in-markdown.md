---
id: writing-in-markdown
title: Writing in Markdown
sidebar_position: 1
description: Markdown features available in Docusaurus, including admonitions, tabs, and code blocks.
tags: [authoring, markdown]
---

# Writing in Markdown

## Admonitions

:::note
Use a note for neutral side information.
:::

:::tip
Use a tip for advice that saves time.
:::

:::warning
Use a warning when a step can cause problems.
:::

:::danger
Use danger for steps that can cause data loss.
:::

## Code blocks

Add a language for syntax highlighting and a `title` to show a file name.

```js title="docusaurus.config.js"
const config = {
  title: 'Acme Docs',
};
```

Highlight lines with a comment:

```js
function greet() {
  // highlight-next-line
  return 'Hello, docs as code';
}
```

## Images

Store images in `static/img/` and reference them with an absolute path, or keep them next to the page.

```md
![Alt text that describes the image](/img/logo.svg)
```

## Links

Link to other pages with relative file paths. The build checks them.

```md
[Installation](../getting-started/installation.md)
```

## Tables

| Element | Syntax |
|---|---|
| Bold | `**text**` |
| Code | `` `text` `` |
| Link | `[label](url)` |
