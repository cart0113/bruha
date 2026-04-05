---
description: How to write a markdown page — headings, links, what docsify renders
---

# Writing Pages

## Page Basics

Each `.md` file under `docs/src/` is a page. Docsify renders it as HTML on the
fly — there is no build step for content.

Start every page with a `# heading`. This heading becomes the display name in
the sidebar and the browser tab title.

```markdown
# Getting Started

Content here.
```

## Links Between Pages

Links are relative to the docs root (`docs/`), not the file's location. Always
include the `src/` prefix (or whatever `content_folder` is set to).

```markdown
[see the config reference](src/configuration/config-reference.md)
```

Docsify handles these as SPA route changes — no page reload.

## Images

Place images in the same folder as the page or in a shared `src/_assets/`
directory. Reference them with a relative path from the docs root:

```markdown
![diagram](src/guides/_assets/architecture.png)
```

## Docsify-Specific Markdown

Docsify extends standard markdown with a few extras:

- `!> **Warning** text` renders a warning callout.
- `?> **Tip** text` renders a tip/info callout.
- `:id=custom-id` after a heading sets the anchor slug.

Standard GitHub-flavored markdown (tables, fenced code blocks, task lists) all
work as expected.
