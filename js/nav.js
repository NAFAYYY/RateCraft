/**
 * RateCraft Unified Navigation & Mobile Drawer Controller
 * Zero-dependency, accessible, and Core Web Vitals optimized.
 */
(function() {
  'use strict';

  function initNav() {
    var toggleBtn = document.getElementById('mobile-menu-toggle');
    var drawer = document.getElementById('mobile-drawer');
    var backdrop = document.getElementById('mobile-nav-backdrop');
    var closeBtn = document.getElementById('drawer-close');
    var dropdowns = document.querySelectorAll('.nav-dropdown');

    // --- Mobile Drawer Toggle ---
    function openDrawer() {
      if (!drawer || !backdrop) return;
      drawer.classList.add('is-active');
      drawer.setAttribute('aria-hidden', 'false');
      backdrop.classList.add('is-active');
      backdrop.setAttribute('aria-hidden', 'false');
      if (toggleBtn) {
        toggleBtn.classList.add('is-active');
        toggleBtn.setAttribute('aria-expanded', 'true');
      }
      document.body.classList.add('drawer-open');
    }

    function closeDrawer() {
      if (!drawer || !backdrop) return;
      drawer.classList.remove('is-active');
      drawer.setAttribute('aria-hidden', 'true');
      backdrop.classList.remove('is-active');
      backdrop.setAttribute('aria-hidden', 'true');
      if (toggleBtn) {
        toggleBtn.classList.remove('is-active');
        toggleBtn.setAttribute('aria-expanded', 'false');
      }
      document.body.classList.remove('drawer-open');
    }

    if (toggleBtn) {
      toggleBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        var isOpen = drawer && drawer.classList.contains('is-active');
        if (isOpen) {
          closeDrawer();
        } else {
          openDrawer();
        }
      });
    }

    if (closeBtn) {
      closeBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        closeDrawer();
      });
    }

    if (backdrop) {
      backdrop.addEventListener('click', function() {
        closeDrawer();
      });
    }

    // Close drawer when any internal navigation link is clicked
    if (drawer) {
      var drawerLinks = drawer.querySelectorAll('a');
      drawerLinks.forEach(function(link) {
        link.addEventListener('click', function() {
          closeDrawer();
        });
      });
    }

    // Close drawer on ESC key
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape' || e.key === 'Esc') {
        closeDrawer();
        dropdowns.forEach(function(d) {
          d.classList.remove('is-open');
          var btn = d.querySelector('.nav-dropdown-btn');
          if (btn) btn.setAttribute('aria-expanded', 'false');
        });
      }
    });

    // --- Desktop Dropdown Keyboard / Click Accessibility ---
    dropdowns.forEach(function(dropdown) {
      var btn = dropdown.querySelector('.nav-dropdown-btn');
      if (!btn) return;

      btn.addEventListener('click', function(e) {
        e.stopPropagation();
        var wasOpen = dropdown.classList.contains('is-open');
        // Close other dropdowns
        dropdowns.forEach(function(other) {
          other.classList.remove('is-open');
          var otherBtn = other.querySelector('.nav-dropdown-btn');
          if (otherBtn) otherBtn.setAttribute('aria-expanded', 'false');
        });

        if (!wasOpen) {
          dropdown.classList.add('is-open');
          btn.setAttribute('aria-expanded', 'true');
        } else {
          dropdown.classList.remove('is-open');
          btn.setAttribute('aria-expanded', 'false');
        }
      });
    });

    // Close desktop dropdown on outside click
    document.addEventListener('click', function(e) {
      dropdowns.forEach(function(dropdown) {
        if (!dropdown.contains(e.target)) {
          dropdown.classList.remove('is-open');
          var btn = dropdown.querySelector('.nav-dropdown-btn');
          if (btn) btn.setAttribute('aria-expanded', 'false');
        }
      });
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initNav);
  } else {
    initNav();
  }
})();
