---
description: How to add new folders and sections — folder structure, _order.md, rebuilding the sidebar
---

# Adding Sections

## Adding a New Section (Folder)

1. Create the folder under `docs/src/`.
2. Remember: the folder must contain either only files or only sub-folders —
   never both.
3. Add an `_order.md` file if the default alphabetical sort is not what you want.
4. Run `bin/build.sh` to regenerate `_sidebar.md`.

Example — adding a "Tutorials" section:

```
docs/src/
  tutorials/
    _order.md
    quickstart.md
    deployment.md
```

The sidebar will show **Tutorials** as a bold label with the two pages nested
under it.

## Rebuilding the Sidebar

After adding, removing, or renaming any content files or folders, run:

```bash
bin/build.sh
```

This regenerates `docs/_sidebar.md` from the filesystem. Never edit
`_sidebar.md` by hand — the next build will overwrite your changes.

## Top-Level Navigation Bar

If `navbar` is enabled in `bruha.yaml`, only top-level folders under `src/`
appear in the horizontal nav bar. Nested folders appear only in the sidebar.
