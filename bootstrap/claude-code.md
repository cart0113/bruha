---
description: Rules and workflow for writing bruha documentation content
alwaysApply: true
---

This project's documentation is built with
[bruha](https://github.com/cart0113/bruha), a YAML-driven set of docsify
extensions.

## Content Rules

All docs content lives under `docs/src/`. Key constraints:

- A directory must contain **either** markdown files **or** sub-directories —
  never both. The sidebar builder will error if you mix them.
- Start every `.md` page with a `# heading` — this becomes the sidebar label and
  browser tab title.
- Use `_order.md` files to control sidebar order (one entry per line, file stems
  without `.md`). Default is alphabetical.

## Links and Images

Links are relative to `docs/`, not to the file's location. Always include the
`src/` prefix:

```markdown
[see the config](src/configuration/config-reference.md)
![diagram](src/section/_assets/architecture.png)
```

## Callout Boxes

```markdown
> [!note] Blue info box.
> [!tip] Green tip box.
> [!important] Amber box.
> [!warning] Red box.
```

## Generated Files — Do Not Edit

- `docs/_sidebar.md` — generated from filesystem + `_order.md`
- `docs/themes/bruha-config.js` — generated from `docs/bruha.yaml`
- `docs/index.html` — generated from `docs/bruha.yaml`

## Build Step

After adding, removing, or renaming any content files or folders:

```bash
docs/bin/build.sh
```
