(function () {
    'use strict';

    var SYMBOLS = ['🥐','🦋','🌷','☂️','🌵','🎈','👓','⚓','🦚','🤖','⭐','☁️','🌲','🪁','🪑','♻'];
    var SUBS = ['一','二','三'];

    function getMinutesSinceUtcMidnight() {
        var now = new Date();
        return now.getUTCHours() * 60 + now.getUTCMinutes();
    }

    function getCurrentSymbol() {
        var minutes = getMinutesSinceUtcMidnight();
        var block = Math.min(Math.floor(minutes / 90), 15);
        var sub = Math.min(Math.floor((minutes % 90) / 30), 2);
        return SUBS[sub] + SYMBOLS[block];
    }

    function updateValues() {
        var symbol = getCurrentSymbol();
        var el = document.getElementById('currentTime');
        var titleEl = document.getElementById('currentTimeTitle');
        if (el) el.textContent = symbol;
        if (titleEl) titleEl.textContent = symbol;
    }

    function startTime() {
        updateValues();
        var now = new Date();
        var secsIntoBlock = (now.getUTCMinutes() % 30) * 60 + now.getUTCSeconds();
        var msUntilNext = (30 * 60 - secsIntoBlock) * 1000;
        setTimeout(function () {
            updateValues();
            setInterval(updateValues, 30 * 60000);
        }, msUntilNext);
    }

    // Dark mode

    function darkModeBool() {
        var stored = null;
        try { stored = localStorage.getItem('darkMode'); } catch (e) {}
        if (stored === 'true') return true;
        if (stored === 'false') return false;
        return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    }

    function applyDarkMode(isDark) {
        document.documentElement.classList.toggle('dark', isDark);
        var btn = document.querySelector('.dark-toggle');
        if (btn) btn.textContent = isDark ? '\u2600\uFE0F' : '\uD83C\uDF19';
    }

    // Toolbar

    var toolbarLeft = document.createElement('div');
    toolbarLeft.className = 'toolbar-left';
    document.body.appendChild(toolbarLeft);

    var bangLink = document.createElement('a');
    bangLink.href = 'https://bang-labs.eu';
    bangLink.className = 'toolbar-btn bang-labs';
    bangLink.target = '_blank';
    bangLink.rel = 'noopener';
    bangLink.textContent = 'Bang Labs';
    toolbarLeft.appendChild(bangLink);

    var page = document.body.getAttribute('data-page');

    var toolbar = document.createElement('div');
    toolbar.className = 'toolbar';
    document.body.appendChild(toolbar);

    if (page && page !== 'index') {
        var homeLink = document.createElement('a');
        homeLink.href = 'index.html';
        homeLink.className = 'toolbar-btn';
        homeLink.setAttribute('aria-label', 'Home');
        homeLink.textContent = '\uD83C\uDFE0';
        toolbar.appendChild(homeLink);
    }

    var darkBtn = document.createElement('button');
    darkBtn.className = 'toolbar-btn dark-toggle';
    darkBtn.setAttribute('aria-label', 'Toggle dark mode');
    var isDark = darkModeBool();
    applyDarkMode(isDark);
    darkBtn.textContent = isDark ? '\u2600\uFE0F' : '\uD83C\uDF19';
    darkBtn.addEventListener('click', function () {
        var nowDark = !document.documentElement.classList.contains('dark');
        applyDarkMode(nowDark);
        try { localStorage.setItem('darkMode', nowDark); } catch (e) {}
    });
    toolbar.appendChild(darkBtn);

    // Page transitions
    document.addEventListener('click', function (e) {
        var link = e.target.closest('a[href]');
        if (!link) return;
        var href = link.getAttribute('href');
        if (!href || href.startsWith('http') || href.startsWith('#') || href.startsWith('mailto:')) return;
        e.preventDefault();
        document.body.classList.add('navigating');
        setTimeout(function () {
            window.location.href = href;
        }, 300);
    });

    document.addEventListener('DOMContentLoaded', startTime);
})();
