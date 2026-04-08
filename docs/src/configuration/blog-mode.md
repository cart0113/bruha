# Blog Mode

Bruha includes an editorial style variant for blog-style sites. It uses serif
typography (Georgia), a narrower reading column (42rem), and a literary feel
that layers on top of the default `code-one` theme.

## Enabling

Set `style` to `blog` in `bruha.json`:

```json
{
  "style": "blog",
  "top_level_folders_as_top_control": false
}
```

Blog mode requires `blog.css` in your `themes/` folder. If you copied themes
from bruha, it's already there. Run `docs/bin/build.sh` to regenerate
`index.html` — the build auto-detects `blog.css` and includes it.

## Published Dates

An optional plugin renders a date line below each page title. Add a comment as
the first line of any markdown file:

```markdown
<!-- published: April 5, 2026 -->

# My Post Title

Post content here...
```

This renders as a small uppercase date below the `<h1>`. The plugin requires
`published-date.js` in your `themes/` folder — also auto-detected by the build.

## Example

See `examples/blog/` in the bruha repo for a working blog site with published
dates, the sage theme, and `top_level_folders_as_top_control` disabled for a
flat sidebar layout.
