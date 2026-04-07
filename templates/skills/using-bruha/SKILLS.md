---
description:
  Write or edit bruha documentation pages. Reads the using-bruha instructions,
  then helps create content that follows all bruha conventions.
---

Read the bruha documentation rules before writing any content.

If this project has a `context-db/using-bruha/` folder, read those files:

- `context-db/using-bruha/workflow.md`
- `context-db/using-bruha/content-rules.md`
- `context-db/using-bruha/writing-pages.md`
- `context-db/using-bruha/adding-sections.md`

If not, follow these rules:

1. All content lives under `docs/src/`.
2. A directory must contain EITHER files OR sub-directories — never both.
3. Start every `.md` page with a `# heading`.
4. Use `_order.md` for custom sidebar ordering (file stems, one per line).
5. Links are relative to `docs/` — always include `src/` prefix.
6. Callout boxes: `> [!note]`, `> [!tip]`, `> [!important]`, `> [!warning]`.
7. Never edit `docs/_sidebar.md`, `docs/themes/bruha-config.js`, or
   `docs/index.html` — they are generated.
8. After any content change, run `docs/bin/build.sh`.

Now help the user with their documentation task. Follow the rules above exactly.
