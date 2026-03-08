(function () {
  'use strict';

  var S = ['\u{1F950}','\u{1F98B}','\u{1F337}','\u2602\uFE0F','\u{1F335}','\u{1F388}','\u{1F453}','\u2693','\u{1F99A}','\u{1F916}','\u2B50','\u2601\uFE0F','\u{1F332}','\u{1FA81}','\u{1FA91}','\u267B'];
  var EN = ['croissant','butterfly','tulip','umbrella','cactus','balloon','glasses','anchor','peacock','robot','star','cloud','tree','kite','chair','recycle'];
  var lastGlyph = null;
  var firstRender = true;

  var css = document.createElement('style');
  css.textContent =
    '.gc-widget {' +
      'position: fixed; bottom: 1.5rem; right: 1.5rem; z-index: 9999;' +
      'text-decoration: none; opacity: 0;' +
      'animation: gc-reveal 0.6s ease-out 0.6s forwards;' +
    '}' +
    '@keyframes gc-reveal { to { opacity: 1; } }' +
    '.gc-widget .gc-box {' +
      'height: 80px; width: 80px; position: relative;' +
    '}' +
    '.gc-widget .gc-g {' +
      'position: absolute; font-size: 60px; line-height: 1;' +
      'left: 50%; top: 50%;' +
      'transform: translate(-50%, -50%) scale(0); opacity: 0;' +
      'transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.5s ease;' +
    '}' +
    '.gc-widget .gc-1 .gc-g:nth-child(1) {' +
      'transform: translate(-50%, -50%) scale(1); opacity: 1;' +
    '}' +
    '.gc-widget .gc-2 .gc-g:nth-child(1) {' +
      'transform: translate(calc(-50% - 20px), -50%) scale(0.6); opacity: 1;' +
    '}' +
    '.gc-widget .gc-2 .gc-g:nth-child(2) {' +
      'transform: translate(calc(-50% + 20px), -50%) scale(0.6); opacity: 1;' +
    '}' +
    '.gc-widget .gc-3 .gc-g:nth-child(1) {' +
      'transform: translate(-50%, calc(-50% - 15px)) scale(0.425); opacity: 1;' +
    '}' +
    '.gc-widget .gc-3 .gc-g:nth-child(2) {' +
      'transform: translate(calc(-50% - 15px), calc(-50% + 12px)) scale(0.425); opacity: 1;' +
    '}' +
    '.gc-widget .gc-3 .gc-g:nth-child(3) {' +
      'transform: translate(calc(-50% + 15px), calc(-50% + 12px)) scale(0.425); opacity: 1;' +
    '}' +

    /* Per-glyph entrance animations */
    '@keyframes gc-entrance-croissant {' +
      '0% { transform: translate(-50%, -50%) scale(0) rotate(-180deg); opacity: 0; }' +
      '100% { transform: translate(-50%, -50%) scale(1) rotate(0deg); opacity: 1; }' +
    '}' +
    '@keyframes gc-entrance-butterfly {' +
      '0% { transform: translate(-50%, -200%) scale(0.5) rotate(-15deg); opacity: 0; }' +
      '25% { transform: translate(-50%, -120%) scale(0.7) rotate(10deg); opacity: 0.5; }' +
      '50% { transform: translate(-50%, -80%) scale(0.85) rotate(-8deg); opacity: 0.8; }' +
      '75% { transform: translate(-50%, -60%) scale(0.95) rotate(4deg); opacity: 0.9; }' +
      '100% { transform: translate(-50%, -50%) scale(1) rotate(0deg); opacity: 1; }' +
    '}' +
    '@keyframes gc-entrance-tulip {' +
      '0% { transform: translate(-50%, 50%) scale(0.3); opacity: 0; }' +
      '60% { transform: translate(-50%, -55%) scale(1.05); opacity: 1; }' +
      '100% { transform: translate(-50%, -50%) scale(1); opacity: 1; }' +
    '}' +
    '@keyframes gc-entrance-umbrella {' +
      '0% { transform: translate(-50%, -200%) scale(0.8); opacity: 0; }' +
      '50% { transform: translate(-50%, -40%) scale(1.05); opacity: 1; }' +
      '70% { transform: translate(-50%, -55%) scale(0.98); opacity: 1; }' +
      '100% { transform: translate(-50%, -50%) scale(1); opacity: 1; }' +
    '}' +
    '@keyframes gc-entrance-cactus {' +
      '0% { transform: translate(-50%, 30%) scale(0.2, 0); opacity: 0; }' +
      '50% { transform: translate(-50%, -50%) scale(0.9, 1.1); opacity: 1; }' +
      '70% { transform: translate(-50%, -50%) scale(1.05, 0.95); opacity: 1; }' +
      '100% { transform: translate(-50%, -50%) scale(1); opacity: 1; }' +
    '}' +
    '@keyframes gc-entrance-balloon {' +
      '0% { transform: translate(-50%, 80%) scale(0.4); opacity: 0; }' +
      '60% { transform: translate(-50%, -60%) scale(1.05); opacity: 1; }' +
      '80% { transform: translate(-50%, -45%) scale(0.98); opacity: 1; }' +
      '100% { transform: translate(-50%, -50%) scale(1); opacity: 1; }' +
    '}' +
    '@keyframes gc-entrance-glasses {' +
      '0% { transform: translate(-50%, -50%) scale(1, 0) scaleX(0.3); opacity: 0; }' +
      '50% { transform: translate(-50%, -50%) scale(1, 1) scaleX(1.1); opacity: 1; }' +
      '100% { transform: translate(-50%, -50%) scale(1); opacity: 1; }' +
    '}' +
    '@keyframes gc-entrance-anchor {' +
      '0% { transform: translate(-50%, -200%) scale(1); opacity: 0; }' +
      '60% { transform: translate(-50%, -40%) scale(1); opacity: 1; }' +
      '75% { transform: translate(-50%, -52%) scale(1); opacity: 1; }' +
      '85% { transform: translate(-50%, -48%) scale(1); opacity: 1; }' +
      '100% { transform: translate(-50%, -50%) scale(1); opacity: 1; }' +
    '}' +
    '@keyframes gc-entrance-peacock {' +
      '0% { transform: translate(-50%, -50%) scale(0) rotate(0deg); opacity: 0; }' +
      '50% { transform: translate(-50%, -50%) scale(1.15) rotate(5deg); opacity: 1; }' +
      '70% { transform: translate(-50%, -50%) scale(0.95) rotate(-3deg); opacity: 1; }' +
      '100% { transform: translate(-50%, -50%) scale(1) rotate(0deg); opacity: 1; }' +
    '}' +
    '@keyframes gc-entrance-robot {' +
      '0% { transform: translate(-50%, -50%) scale(0.8); opacity: 0; }' +
      '10% { transform: translate(-48%, -50%) scale(1); opacity: 1; }' +
      '20% { transform: translate(-52%, -50%) scale(1); opacity: 0.7; }' +
      '30% { transform: translate(-49%, -50%) scale(1); opacity: 1; }' +
      '40% { transform: translate(-51%, -50%) scale(1); opacity: 0.8; }' +
      '50% { transform: translate(-50%, -50%) scale(1); opacity: 1; }' +
      '100% { transform: translate(-50%, -50%) scale(1); opacity: 1; }' +
    '}' +
    '@keyframes gc-entrance-star {' +
      '0% { transform: translate(-50%, -50%) scale(0); opacity: 0; }' +
      '40% { transform: translate(-50%, -50%) scale(1.3); opacity: 1; }' +
      '55% { transform: translate(-50%, -50%) scale(0.85); opacity: 0.8; }' +
      '70% { transform: translate(-50%, -50%) scale(1.1); opacity: 1; }' +
      '100% { transform: translate(-50%, -50%) scale(1); opacity: 1; }' +
    '}' +
    '@keyframes gc-entrance-cloud {' +
      '0% { transform: translate(-150%, -50%) scale(0.8); opacity: 0; }' +
      '100% { transform: translate(-50%, -50%) scale(1); opacity: 1; }' +
    '}' +
    '@keyframes gc-entrance-tree {' +
      '0% { transform: translate(-50%, 40%) scale(0.4, 0.2); opacity: 0; }' +
      '50% { transform: translate(-50%, -50%) scale(0.95, 1.08); opacity: 1; }' +
      '100% { transform: translate(-50%, -50%) scale(1); opacity: 1; }' +
    '}' +
    '@keyframes gc-entrance-kite {' +
      '0% { transform: translate(-180%, 80%) scale(0.5) rotate(-25deg); opacity: 0; }' +
      '60% { transform: translate(-45%, -55%) scale(1.05) rotate(5deg); opacity: 1; }' +
      '100% { transform: translate(-50%, -50%) scale(1) rotate(0deg); opacity: 1; }' +
    '}' +
    '@keyframes gc-entrance-chair {' +
      '0% { transform: translate(-50%, -200%) scale(1); opacity: 0; }' +
      '70% { transform: translate(-50%, -45%) scale(1); opacity: 1; }' +
      '85% { transform: translate(-50%, -52%) scale(1.02); opacity: 1; }' +
      '100% { transform: translate(-50%, -50%) scale(1); opacity: 1; }' +
    '}' +
    '@keyframes gc-entrance-recycle {' +
      '0% { transform: translate(-50%, -50%) scale(0) rotate(0deg); opacity: 0; }' +
      '100% { transform: translate(-50%, -50%) scale(1) rotate(360deg); opacity: 1; }' +
    '}' +

    /* Disable transitions during entrance animations, apply per-glyph animation */
    '.gc-widget [class*="gc-entrance-"] .gc-g { transition: none; }' +
    '.gc-widget .gc-entrance-croissant .gc-g { animation: gc-entrance-croissant 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) both; }' +
    '.gc-widget .gc-entrance-butterfly .gc-g { animation: gc-entrance-butterfly 1.2s ease-out both; }' +
    '.gc-widget .gc-entrance-tulip .gc-g { animation: gc-entrance-tulip 0.9s cubic-bezier(0.22, 1, 0.36, 1) both; }' +
    '.gc-widget .gc-entrance-umbrella .gc-g { animation: gc-entrance-umbrella 0.8s ease-out both; }' +
    '.gc-widget .gc-entrance-cactus .gc-g { animation: gc-entrance-cactus 0.9s cubic-bezier(0.22, 1, 0.36, 1) both; }' +
    '.gc-widget .gc-entrance-balloon .gc-g { animation: gc-entrance-balloon 1s cubic-bezier(0.22, 1, 0.36, 1) both; }' +
    '.gc-widget .gc-entrance-glasses .gc-g { animation: gc-entrance-glasses 0.7s cubic-bezier(0.22, 1, 0.36, 1) both; }' +
    '.gc-widget .gc-entrance-anchor .gc-g { animation: gc-entrance-anchor 0.8s ease-out both; }' +
    '.gc-widget .gc-entrance-peacock .gc-g { animation: gc-entrance-peacock 0.9s cubic-bezier(0.34, 1.56, 0.64, 1) both; }' +
    '.gc-widget .gc-entrance-robot .gc-g { animation: gc-entrance-robot 0.6s linear both; }' +
    '.gc-widget .gc-entrance-star .gc-g { animation: gc-entrance-star 0.9s ease-out both; }' +
    '.gc-widget .gc-entrance-cloud .gc-g { animation: gc-entrance-cloud 1.2s cubic-bezier(0.22, 1, 0.36, 1) both; }' +
    '.gc-widget .gc-entrance-tree .gc-g { animation: gc-entrance-tree 1s cubic-bezier(0.22, 1, 0.36, 1) both; }' +
    '.gc-widget .gc-entrance-kite .gc-g { animation: gc-entrance-kite 1s cubic-bezier(0.22, 1, 0.36, 1) both; }' +
    '.gc-widget .gc-entrance-chair .gc-g { animation: gc-entrance-chair 0.7s ease-out both; }' +
    '.gc-widget .gc-entrance-recycle .gc-g { animation: gc-entrance-recycle 0.8s cubic-bezier(0.22, 1, 0.36, 1) both; }';
  document.head.appendChild(css);

  var a = document.createElement('a');
  a.className = 'gc-widget';
  a.href = 'https://glyphclock.bang-labs.eu';
  a.target = '_blank';
  a.rel = 'noopener';
  a.title = 'GlyphClock';
  a.innerHTML = '<div class="gc-box"><span class="gc-g"></span><span class="gc-g"></span><span class="gc-g"></span></div>';
  document.body.appendChild(a);

  var box = a.querySelector('.gc-box');
  var spans = a.querySelectorAll('.gc-g');

  function update() {
    var now = new Date();
    var m = now.getUTCHours() * 60 + now.getUTCMinutes();
    var block = Math.min(Math.floor(m / 90), 15);
    var sub = Math.min(Math.floor((m % 90) / 30), 2);
    var glyph = S[block];
    var count = sub + 1;
    for (var i = 0; i < 3; i++) spans[i].textContent = glyph;

    // Remove any previous entrance class
    var match = box.className.match(/gc-entrance-\S+/);
    if (match) box.classList.remove(match[0]);

    // Play entrance animation on glyph change (skip initial load)
    if (!firstRender && glyph !== lastGlyph && count === 1) {
      var entranceClass = 'gc-entrance-' + EN[block];
      box.className = 'gc-box gc-' + count;
      void box.offsetWidth;
      box.classList.add(entranceClass);
      var onEnd = function () {
        box.classList.remove(entranceClass);
        box.removeEventListener('animationend', onEnd);
      };
      box.addEventListener('animationend', onEnd);
    } else {
      box.className = 'gc-box gc-' + count;
    }
    lastGlyph = glyph;
    firstRender = false;
  }

  update();
  var now = new Date();
  var secsIntoBlock = (now.getUTCMinutes() % 30) * 60 + now.getUTCSeconds();
  setTimeout(function () { update(); setInterval(update, 30 * 60000); }, (30 * 60 - secsIntoBlock) * 1000);
})();
