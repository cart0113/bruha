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

## Callout Boxes

Use blockquote syntax with a `[!type]` marker to create styled callout boxes.
Four types are available:

```markdown
> [!note] Blue info box — background context or references.

> [!tip] Green tip box — helpful suggestions (renders in italic).

> [!important] Amber box — key information the reader should not miss.

> [!warning] Red box — dangerous pitfalls or breaking changes.
```

Each renders as a colored box with a bold uppercase label and left border.
Colors adapt to dark mode automatically.

**Requires:** `callouts.css` and `callouts.js` in `docs/themes/`. If present,
`build.sh` includes them in `index.html` automatically — no manual setup.

## Docsify-Specific Markdown

Docsify extends standard markdown with a few extras:

- `:id=custom-id` after a heading sets the anchor slug.

Standard GitHub-flavored markdown (tables, fenced code blocks, task lists) all
work as expected.
