---
description:
  Folder structure rules — no mixing, _order.md, skipped items, build step
---

# Content Rules

Content lives under `docs/src/`.

## No Mixing Files and Folders

A directory must contain EITHER markdown files OR sub-directories, never both.
The sidebar builder errors if you mix them.

## Ordering with \_order.md

Optional file listing entry names one per line (folder names or file stems
without `.md`). Listed items appear first; unlisted items append alphabetically.

```
# comments start with #
getting-started
advanced
reference
```

Default ordering (no `_order.md`): file matching folder name sorts first, then
alphabetical.

## Skipped Items

Files or directories starting with `_` or `.`, non-`.md` files, and empty
directories.

## Generated Files — Do Not Edit

- `docs/src/_sidebar.md`
- `docs/themes/bruha-config.js`
- `docs/index.html`

## Build Step

After adding, removing, or renaming content:

```bash
docs/bin/build.sh
```
