# Local Development

## Installing bruha in a Project

bruha is installed by **copying** files -- no CDN or package manager. Do not
symlink theme files; symlinks break on GitHub Pages.

Copy from GIT_BRUHA into your project:

```
docs/themes/    →  your-project/docs/themes/
docs/bin/       →  your-project/docs/bin/
```

Then create your own `docs/bruha.json` and `docs/src/` content. `build.sh`
generates `index.html`, `_sidebar.md`, and `bruha-config.js`.

To pick up bruha updates, re-copy `docs/themes/` and `docs/bin/`.

## Scripts

```bash
docs/bin/serve.sh              # build + dev server at localhost:3000
docs/bin/serve.sh --port 4000  # custom port
docs/bin/build.sh              # generate sidebar + config + index.html
```

## Pre-commit Hook

To keep generated files in sync automatically, add `build.sh` to a git
pre-commit hook:

```bash
# In your project's .git/hooks/pre-commit (or an existing hook script):
docs/bin/build.sh
git add docs/index.html docs/src/_sidebar.md docs/themes/bruha-config.js
```

This regenerates the sidebar, config JS, and index.html on every commit so you
never forget to run the build after editing content.

## Example Projects

The bruha repo includes two example projects in `examples/`:

- **`examples/blog/`** — blog-style site with serif typography, published dates,
  and the sage theme.
- **`examples/flat-example/`** — flat site without top nav tabs, using
  `top_level_folders_as_top_control: false`.

## Requirements

- `python3` (stdlib only — no external packages)
- `docsify-cli` (`npm install -g docsify-cli`)
