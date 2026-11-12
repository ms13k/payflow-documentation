---
id: first-page
title: Write your first page
sidebar_position: 2
description: Create a Markdown page with front matter and add it to the sidebar.
tags: [authoring]
---

# Write your first page

1. Create a file in `docs/`, for example `docs/guides/my-topic.md`.
2. Add front matter at the top:

   ```yaml
   ---
   id: my-topic
   title: My topic
   sidebar_position: 3
   description: One sentence that says what the reader learns.
   ---
   ```

3. Write the content in Markdown.
4. Save. The browser reloads and the page appears in the sidebar.

## Folders and ordering

- A folder becomes a sidebar category.
- Add a `_category_.json` to set the label and position.
- Use `sidebar_position` in front matter to order pages inside a category.

## Next step

Learn the available [Markdown features](../guides/writing-in-markdown.md).
