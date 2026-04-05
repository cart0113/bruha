/*
 * Sidebar bar indicator — heading hierarchy + section highlight.
 *
 * Marks the active page's <li> with .sb-active-page. If the page has
 * sub-sections, also adds .sb-has-sections. Within the sub-sidebar:
 *   - depth 1 (H2) → .sb-bar-level (border-left indicator)
 *   - depth 2+ (H3+) → .sb-text-level (text highlight only)
 *
 * Current section's <li> gets .sb-current.
 */

(function () {
  var observer;

  function getCurrentPath() {
    return (window.location.hash || '#/').split('?')[0];
  }

  function findActivePage(nav) {
    var subSidebar = nav.querySelector('.app-sub-sidebar');
    if (subSidebar) {
      var parentLi = subSidebar.closest('li');
      if (parentLi) return parentLi;
    }

    var currentPath = getCurrentPath();
    var links = nav.querySelectorAll('li > a');
    for (var i = 0; i < links.length; i++) {
      var href = (links[i].getAttribute('href') || '').split('?')[0];
      if (href === currentPath) return links[i].parentElement;
    }

    var activeLis = nav.querySelectorAll('li.active');
    for (var i = activeLis.length - 1; i >= 0; i--) {
      if (activeLis[i].querySelector(':scope > a')) return activeLis[i];
    }

    return null;
  }

  function findCurrentSection(pageLi) {
    var hash = window.location.hash;
    var subUl = pageLi.querySelector(':scope > ul');
    if (!subUl) return null;
    if (!hash || hash.indexOf('?id=') === -1) return null;

    var idPart = hash.split('?id=')[1];
    if (!idPart) return null;

    var links = subUl.querySelectorAll('a');

    for (var i = 0; i < links.length; i++) {
      if (links[i].getAttribute('href') === hash) return links[i];
    }

    for (var i = 0; i < links.length; i++) {
      var linkHref = links[i].getAttribute('href') || '';
      var linkId = linkHref.split('?id=')[1];
      if (linkId && linkId === idPart) return links[i];
    }

    var decoded = decodeURIComponent(idPart);
    for (var i = 0; i < links.length; i++) {
      var linkHref = links[i].getAttribute('href') || '';
      var linkId = linkHref.split('?id=')[1];
      if (linkId && decodeURIComponent(linkId) === decoded) return links[i];
    }

    var activeSub = subUl.querySelector('li.active > a');
    return activeSub || null;
  }

  function assignDepthClasses(pageLi) {
    var topUl = pageLi.querySelector(':scope > ul.app-sub-sidebar');
    if (!topUl) return;

    pageLi.classList.add('sb-has-sections');

    function walk(ul, depth) {
      var items = ul.querySelectorAll(':scope > li');
      for (var i = 0; i < items.length; i++) {
        var li = items[i];

        if (depth === 1) {
          li.classList.add('sb-bar-level');
        } else {
          li.classList.add('sb-text-level');
        }

        var childUl = li.querySelector(':scope > ul');
        if (childUl) walk(childUl, depth + 1);
      }
    }

    walk(topUl, 1);
  }

  function applyActiveStates() {
    if (observer) observer.disconnect();

    var nav = document.querySelector('.sidebar-nav');
    if (!nav) {
      reconnect();
      return;
    }

    nav.querySelectorAll('.sb-active-page').forEach(function (el) {
      el.classList.remove('sb-active-page');
    });
    nav.querySelectorAll('.sb-has-sections').forEach(function (el) {
      el.classList.remove('sb-has-sections');
    });
    nav.querySelectorAll('.sb-current').forEach(function (el) {
      el.classList.remove('sb-current');
    });
    nav
      .querySelectorAll('.sb-bar-level, .sb-text-level')
      .forEach(function (el) {
        el.classList.remove('sb-bar-level', 'sb-text-level');
      });

    var pageLi = findActivePage(nav);
    if (pageLi) {
      pageLi.classList.add('sb-active-page');
      assignDepthClasses(pageLi);

      var link = findCurrentSection(pageLi);
      if (link) {
        var li = link.closest('li');
        if (li) li.classList.add('sb-current');
      }
    }

    reconnect();
  }

  function reconnect() {
    var sidebar = document.querySelector('.sidebar-nav');
    if (sidebar && observer) {
      observer.observe(sidebar, {
        attributes: true,
        subtree: true,
        attributeFilter: ['class'],
      });
    }
  }

  function sidebarNavPlugin(hook) {
    hook.doneEach(applyActiveStates);

    hook.ready(function () {
      observer = new MutationObserver(applyActiveStates);
      reconnect();
      window.addEventListener('hashchange', applyActiveStates);
    });
  }

  window.sidebarNavPlugin = sidebarNavPlugin;
})();
