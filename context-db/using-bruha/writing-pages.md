---
description: Writing pages — headings, links, images, callout boxes
---

# Writing Pages

Each `.md` file under `docs/src/` is a page rendered by docsify on the fly.

**Start every page with a `# heading`** — this becomes the sidebar label and
browser tab title.

## Links

Relative to `docs/`, not the file. Always include the `src/` prefix:

```markdown
[config reference](src/configuration/config-reference.md)
```

## Images

Place in the same folder or `src/_assets/`. Reference from docs root:

```markdown
![diagram](src/section/_assets/architecture.png)
```

## Callout Boxes

```markdown
> [!note] Blue info box.
> [!tip] Green tip box.
> [!important] Amber box.
> [!warning] Red box.
> [!success] Green success box.
> [!danger] Red critical box.
> [!example] Purple example box.
> [!quote] Gray attributed quote.
```

## Table Styles

Add an HTML comment before a table to apply a style variant:

```markdown
<!-- table-striped -->
<!-- table-bordered -->
<!-- table-compact -->
<!-- table-borderless -->
<!-- table-striped table-bordered -->
```

## More Content Features

For full syntax and rendered examples of all content features (badges,
keyboard keys, collapsible sections, math equations, etc.), see the Examples
section in the bruha docs: https://cart0113.github.io/bruha/#/examples/callouts
