window.__docsifyExtConfig = {
  light_theme: 'sage',
  dark_theme: 'sage',
  theme_controls: 'theme_picker',
  dark_mode_default: false,
  code_highlighter: 'vivid',
  document_inline_sidebar_selector: true,
  document_header_depth: 2,
  top_level_folders_as_top_control: false,
  hamburger_menu: false,
  github_corner: false,
  content_folder: 'src',
  folder_chevron: false,
  page_section_collapsible: true,
  search_style: 'magnify-glass',
  sidebar_indent: '1em',
  site_icon: '',
  social_links: {
    github: 'https://github.com/cart0113',
  },
  style: 'blog',
};
(function (c) {
  document.documentElement.classList.add('theme-' + c.light_theme);
  if (!c.hamburger_menu)
    document.documentElement.classList.add('ext-no-hamburger');
  if (!c.github_corner)
    document.documentElement.classList.add('ext-no-github-corner');
  document.documentElement.classList.add('ext-has-top-nav');
  if (c.folder_chevron)
    document.documentElement.classList.add('ext-folder-chevron');
  if (c.document_inline_sidebar_selector)
    document.documentElement.classList.add('ext-inline-sidebar');
  if (c.sidebar_indent)
    document.documentElement.style.setProperty(
      '--t-sidebar-indent',
      c.sidebar_indent
    );
  if (c.style) document.documentElement.classList.add('style-' + c.style);
})(window.__docsifyExtConfig);
