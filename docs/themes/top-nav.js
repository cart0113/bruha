/*
 * Top navigation bar — PyData-style horizontal folder selector.
 *
 * When top_level_folders_as_top_control is true, top-level sidebar
 * folders become buttons in a fixed horizontal bar at the top of the
 * page. The sidebar shows only the active folder's children.
 *
 * Build happens on the first doneEach (not mounted) because docsify
 * loads _sidebar.md asynchronously.
 *
 * Folder headers may be <p> or <strong> depending on the docsify
 * version and markdown rendering. We support both.
 */

(function () {
  var topNavEl = null;
  var folderData = [];

  function getCurrentPath() {
    return (window.location.hash || '#/').split('?')[0];
  }

  function getFolderHeader(li) {
    return (
      li.querySelector(':scope > p') || li.querySelector(':scope > strong')
    );
  }

  function findActiveIndex() {
    var path = getCurrentPath();
    for (var i = 0; i < folderData.length; i++) {
      for (var j = 0; j < folderData[i].links.length; j++) {
        var href = (folderData[i].links[j].getAttribute('href') || '').split(
          '?'
        )[0];
        if (href === path) return i;
      }
    }
    return 0;
  }

  function activateFolder(index) {
    for (var i = 0; i < folderData.length; i++) {
      var isActive = i === index;
      folderData[i].button.classList.toggle('ext-top-active', isActive);
      folderData[i].li.style.display = isActive ? '' : 'none';

      if (isActive) {
        var header = getFolderHeader(folderData[i].li);
        if (header) header.style.display = 'none';
      }
    }
  }

  function buildTopNav(nav) {
    if (topNavEl) return;

    var rootUl = nav.querySelector(':scope > ul');
    if (!rootUl) return;

    var topLis = rootUl.querySelectorAll(':scope > li');
    folderData = [];

    for (var i = 0; i < topLis.length; i++) {
      var li = topLis[i];
      var header = getFolderHeader(li);
      if (!header) continue;

      var label = header.textContent.trim();
      var links = li.querySelectorAll('ul a');

      folderData.push({
        label: label,
        li: li,
        button: null,
        links: Array.prototype.slice.call(links),
      });
    }

    if (folderData.length === 0) return;

    topNavEl = document.createElement('div');
    topNavEl.className = 'ext-top-nav';

    for (var j = 0; j < folderData.length; j++) {
      var btn = document.createElement('button');
      btn.textContent = folderData[j].label;
      folderData[j].button = btn;

      (function (idx) {
        btn.addEventListener('click', function () {
          activateFolder(idx);
          var firstLink = folderData[idx].links[0];
          if (firstLink) {
            var href = firstLink.getAttribute('href');
            if (href) window.location.hash = href;
          }
        });
      })(j);

      topNavEl.appendChild(btn);
    }

    document.body.appendChild(topNavEl);
    activateFolder(findActiveIndex());
  }

  function topNavPlugin(hook) {
    hook.doneEach(function () {
      var nav = document.querySelector('.sidebar-nav');
      if (nav) buildTopNav(nav);
      if (topNavEl && folderData.length > 0) {
        activateFolder(findActiveIndex());
      }
    });
  }

  window.topNavPlugin = topNavPlugin;
})();
