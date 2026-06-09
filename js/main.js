/* BluePipe Plumbing — interactions. Plain DOM, every lookup guarded. */
(function () {
  'use strict';

  /* --- Sticky nav background on scroll --- */
  var nav = document.getElementById('nav');
  function onScroll() {
    if (nav) nav.classList.toggle('scrolled', window.scrollY > 40);
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* --- Mobile menu --- */
  var toggle = document.getElementById('navToggle');
  var links = document.getElementById('navLinks');
  if (toggle && links) {
    toggle.addEventListener('click', function () {
      var open = links.classList.toggle('open');
      toggle.classList.toggle('open', open);
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    });
    links.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        links.classList.remove('open');
        toggle.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  /* --- Scroll reveal --- */
  var faders = document.querySelectorAll('.fade-in');
  if ('IntersectionObserver' in window && faders.length) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target); }
      });
    }, { threshold: 0.14 });
    faders.forEach(function (el) { io.observe(el); });
  } else {
    faders.forEach(function (el) { el.classList.add('visible'); });
  }

  /* --- Count-up stats (fires once when the block scrolls in) --- */
  var statsBlock = document.getElementById('stats');
  var reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  function runCount() {
    var nums = statsBlock.querySelectorAll('.stat-num');
    nums.forEach(function (el) {
      var target = parseFloat(el.getAttribute('data-count')) || 0;
      var decimals = parseInt(el.getAttribute('data-decimals'), 10) || 0;
      var suffix = el.getAttribute('data-suffix') || '';
      if (reduceMotion) { el.textContent = target.toFixed(decimals) + suffix; return; }
      var start = null, dur = 1500;
      function step(ts) {
        if (!start) start = ts;
        var p = Math.min((ts - start) / dur, 1);
        var eased = 1 - Math.pow(1 - p, 3);
        el.textContent = (target * eased).toFixed(decimals) + suffix;
        if (p < 1) requestAnimationFrame(step);
        else el.textContent = target.toFixed(decimals) + suffix;
      }
      requestAnimationFrame(step);
    });
  }
  if (statsBlock) {
    if ('IntersectionObserver' in window) {
      var sObs = new IntersectionObserver(function (entries) {
        entries.forEach(function (e) {
          if (e.isIntersecting) { runCount(); sObs.disconnect(); }
        });
      }, { threshold: 0.4 });
      sObs.observe(statsBlock);
    } else {
      runCount();
    }
  }

  /* --- Before / after slider --- */
  var slider = document.getElementById('ba-slider');
  if (slider) {
    var range = document.getElementById('baRange');
    var beforeWrap = slider.querySelector('.ba-before-wrap');
    var handle = document.getElementById('baHandle');
    function setPos(v) {
      if (beforeWrap) beforeWrap.style.width = v + '%';
      if (handle) handle.style.left = v + '%';
    }
    if (range) {
      range.addEventListener('input', function (e) { setPos(e.target.value); });
      setPos(range.value);
    }
  }

  /* --- Footer year --- */
  var yr = document.getElementById('year');
  if (yr) yr.textContent = new Date().getFullYear();
})();
