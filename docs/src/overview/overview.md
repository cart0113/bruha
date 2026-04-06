# Overview

bruha is a [docsify](https://docsify.js.org/) extension theme designed for LLM
documentation generation:

- **Auto-generated sidebar from filesystem** -- just add folders and markdown
  files to a `docs/src` directory. Then a provided `build.sh` script ( designed
  to be used as a commit hook), will generate all necessary files, such as the
  `index.html` `_sidebar.md`. This was designed so that an LLM does not need to
  remember to update ancillary files when updating core documentation.
- **Optional Ordering Control** -- a optional `_order.md` can be maintained to
  control content tab, sidebar ordering.
- **Top navigation tabs from folder structure** -- a default option allows
  top-level folders to automatically become a horizontal tab bar (like PyData
  Sphinx or Read the Docs).
- **Single YAML config with defaults** -- one `bruha.yaml` controls everything
  (themes, sidebar behavior, nav layout, code blocks). Every key has a sensible
  default. Vanilla docsify requires wiring up each feature individually in
  JavaScript.
- **Coordinated theme system** -- 4 color themes with light/dark variants, vivid
  code highlighting, and a theme picker UI, all toggled from one config. Vanilla
  docsify gives you one static theme with no switching mechanism.
- **Copy-based install** -- to use `bruha` copy `docs/themes/` and `docs/bin/`
  into your project. Currently, the process is manual and you need to check back
  for updates and recopy assests when necessary.
- **Context md files provided** -- this project uses [context-db]
  (https://https://cart0113.github.io/context-db) and provides a
  `context-db/using-bruha` context markdown files. You can use these to teach an
  agent how to write documentation using this system.

## How It Works

1. Organize docs under `docs/src/` using optional `_order.md` files for ordering
2. Edit `bruha.yaml` to override any defaults you want to change
3. Run the `build.sh` to generate `_sidebar.md` and the JS config
4. Use `docs/bin/serve.sh` or use any static server (`docsify serve docs`,
   `python -m http.server`). `docs/bin/serve.sh` also runs the necessary build
   steps. Either `docs/bin/serve.sh` for default port 3000 or
   `docs/bin/serve.sh --port 4000` for custom ports.
