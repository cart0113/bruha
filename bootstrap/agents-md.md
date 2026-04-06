# AGENTS.md section — bruha documentation

Copy this section into your project's AGENTS.md to teach agents how to work with
bruha docs content.

---

## Documentation (bruha)

This project's documentation is built with
[bruha](https://github.com/cart0113/bruha), a YAML-driven set of docsify
extensions. Content is authored as Markdown under `docs/src/`.

### Key Rules

- A directory must contain **either** files **or** sub-directories — never both.
- Start every `.md` page with a `# heading` (becomes the sidebar label).
- Use `_order.md` to control sidebar order (one entry per line). Default is
  alphabetical.
- Links are relative to `docs/`, not to the file. Always include the `src/`
  prefix.

### Generated Files — Do Not Edit

- `docs/_sidebar.md`
- `docs/themes/bruha-config.js`
- `docs/index.html`

### Build

After any content change:

```bash
docs/bin/build.sh
```
