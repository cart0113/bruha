## bruha documentation

This project's documentation is built with bruha, a YAML-driven set of docsify
extensions.

### Content rules

All docs content lives under `docs/src/`.

- A directory must contain EITHER markdown files OR sub-directories — never
  both. The sidebar builder will error if you mix them.
- Start every `.md` page with a `# heading` — this becomes the sidebar label.
- Use `_order.md` files to control sidebar order (one entry per line, file stems
  without `.md`). Default is alphabetical.
- Links are relative to `docs/`, not to the file. Always include `src/` prefix.
- Callout boxes: `> [!note]`, `> [!tip]`, `> [!important]`, `> [!warning]`.

### Generated files — do not edit

- `docs/_sidebar.md`
- `docs/themes/bruha-config.js`
- `docs/index.html`

### Build step

After adding, removing, or renaming content:

```bash
docs/bin/build.sh
```
