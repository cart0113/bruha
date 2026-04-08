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

## Requirements

- `python3` (stdlib only — no external packages)
- `docsify-cli` (`npm install -g docsify-cli`)
