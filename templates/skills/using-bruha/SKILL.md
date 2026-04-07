---
description:
  Write or edit bruha documentation pages following all bruha conventions.
---

Follow these rules when writing documentation content:

1. All content lives under `docs/src/`.
2. A directory must contain EITHER files OR sub-directories — never both.
3. Start every `.md` page with a `# heading`.
4. Use `_order.md` for custom sidebar ordering (file stems, one per line).
5. Links are relative to `docs/` — always include `src/` prefix.
6. Callout boxes: `> [!note]`, `> [!tip]`, `> [!important]`, `> [!warning]`,
   `> [!success]`, `> [!danger]`, `> [!example]`, `> [!quote]`.
7. Table styles via HTML comment before a table: `<!-- table-striped -->`,
   `<!-- table-bordered -->`, `<!-- table-compact -->`, `<!-- table-borderless -->`.
8. Never edit `docs/_sidebar.md`, `docs/themes/bruha-config.js`, or
   `docs/index.html` — they are generated.
9. After any content change, run `docs/bin/build.sh`.

For full syntax and rendered examples of all content features, see:
https://cart0113.github.io/bruha/#/examples/callouts

Now help the user with their documentation task.
