(function () {
    'use strict';

    var SYMBOLS = ['🥐','🦋','🌷','☂️','🌵','🎈','👓','⚓','🦚','🤖','⭐','☁️','🌲','🪁','🪑','♻'];
    var TOTAL_PHASES = 48;
    var testMode = false;
    var testPhase = 0;

    function getMinutesSinceUtcMidnight() {
        var now = new Date();
        return now.getUTCHours() * 60 + now.getUTCMinutes();
    }

    function getPhaseFromTime() {
        var minutes = getMinutesSinceUtcMidnight();
        var block = Math.min(Math.floor(minutes / 90), 15);
        var sub = Math.min(Math.floor((minutes % 90) / 30), 2);
        return block * 3 + sub;
    }

    function getDisplayForPhase(phase) {
        var block = Math.floor(phase / 3);
        var sub = phase % 3;
        return { glyph: SYMBOLS[block], count: sub + 1 };
    }

    function ensureGlyphSpans(el) {
        if (el.querySelectorAll('.glyph-item').length === 0) {
            for (var i = 0; i < 3; i++) {
                var span = document.createElement('span');
                span.className = 'glyph-item';
                el.appendChild(span);
            }
        }
    }

    function renderPhase(phase) {
        var info = getDisplayForPhase(phase);
        var el = document.getElementById('currentTime');
        if (el) {
            ensureGlyphSpans(el);
            var spans = el.querySelectorAll('.glyph-item');
            for (var i = 0; i < 3; i++) {
                spans[i].textContent = info.glyph;
            }
            el.className = 'glyph-' + info.count;
        }
    }

    function updateValues() {
        if (testMode) return;
        renderPhase(getPhaseFromTime());
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

    // Test mode

    function updateTestInfo() {
        var infoEl = document.getElementById('testInfo');
        if (!infoEl) return;
        var info = getDisplayForPhase(testPhase);
        infoEl.textContent = info.glyph + ' ' + (testPhase + 1) + '/' + TOTAL_PHASES;
    }

    function enterTestMode() {
        testMode = true;
        testPhase = getPhaseFromTime();
        renderPhase(testPhase);
        updateTestInfo();
        var controls = document.getElementById('testControls');
        if (controls) controls.style.display = '';
    }

    function exitTestMode() {
        testMode = false;
        var controls = document.getElementById('testControls');
        if (controls) controls.style.display = 'none';
        updateValues();
    }

    function testNavigate(delta) {
        if (!testMode) return;
        testPhase = ((testPhase + delta) % TOTAL_PHASES + TOTAL_PHASES) % TOTAL_PHASES;
        renderPhase(testPhase);
        updateTestInfo();
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
    }

    // Navigation

    var nav = document.createElement('nav');
    nav.className = 'nav';
    nav.id = 'nav';

    var navInner = document.createElement('div');
    navInner.className = 'nav-inner';

    var logoLink = document.createElement('a');
    logoLink.href = 'index.html';
    logoLink.className = 'nav-logo';
    logoLink.textContent = 'GlyphClock';

    var navActions = document.createElement('div');
    navActions.className = 'nav-actions';

    var darkBtn = document.createElement('button');
    darkBtn.className = 'theme-toggle';
    darkBtn.setAttribute('aria-label', 'Toggle dark mode');
    darkBtn.innerHTML = '<svg class="icon-sun" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"/><path d="M12 1v2"/><path d="M12 21v2"/><path d="M4.22 4.22l1.42 1.42"/><path d="M18.36 18.36l1.42 1.42"/><path d="M1 12h2"/><path d="M21 12h2"/><path d="M4.22 19.78l1.42-1.42"/><path d="M18.36 5.64l1.42-1.42"/></svg>' +
        '<svg class="icon-moon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>';

    var isDark = darkModeBool();
    applyDarkMode(isDark);
    darkBtn.addEventListener('click', function () {
        var nowDark = !document.documentElement.classList.contains('dark');
        applyDarkMode(nowDark);
        try { localStorage.setItem('darkMode', nowDark); } catch (e) {}
    });
    navActions.appendChild(darkBtn);

    navInner.appendChild(logoLink);
    navInner.appendChild(navActions);
    nav.appendChild(navInner);
    document.body.appendChild(nav);

    // Cross-project theme carry-over
    var SIBLING_DOMAINS = ['snippets.eu','cli.snippets.eu','web.snippets.eu','glyphclock.bang-labs.eu'];
    document.addEventListener('click', function (e) {
        var a = e.target.closest('a[href]');
        if (!a) return;
        try {
            var url = new URL(a.href);
            if (url.hostname === location.hostname) return;
            if (SIBLING_DOMAINS.indexOf(url.hostname) === -1) return;
            var theme = document.documentElement.classList.contains('dark') ? 'dark' : 'light';
            url.searchParams.set('theme', theme);
            a.href = url.toString();
        } catch (err) {}
    });

    // Auto-hide nav after 7s of inactivity
    var hideTimer;
    function hideNav() {
        nav.classList.add('nav-hidden');
    }
    function showNav() {
        nav.classList.remove('nav-hidden');
        clearTimeout(hideTimer);
        hideTimer = setTimeout(hideNav, 7000);
    }
    hideTimer = setTimeout(hideNav, 7000);

    // Fade to clock-only after 11s, restore on interaction
    var fadeTimer;
    var hasContentLayer = !!document.querySelector('.content-layer');
    function fadeToClockOnly() {
        document.body.classList.add('clock-only');
        hideNav();
    }
    function handleActivity() {
        if (document.body.classList.contains('clock-only')) {
            document.body.classList.remove('clock-only');
        }
        showNav();
        if (hasContentLayer) {
            clearTimeout(fadeTimer);
            fadeTimer = setTimeout(fadeToClockOnly, 11000);
        }
    }
    if (hasContentLayer) {
        fadeTimer = setTimeout(fadeToClockOnly, 11000);
    }
    document.addEventListener('click', handleActivity);
    document.addEventListener('touchstart', handleActivity);

    document.addEventListener('DOMContentLoaded', function () {
        startTime();

        var toggle = document.getElementById('testModeToggle');
        if (toggle) {
            toggle.addEventListener('click', function () {
                if (testMode) exitTestMode();
                else enterTestMode();
            });
        }

        var prevBtn = document.getElementById('testPrev');
        var nextBtn = document.getElementById('testNext');
        if (prevBtn) prevBtn.addEventListener('click', function () { testNavigate(-1); });
        if (nextBtn) nextBtn.addEventListener('click', function () { testNavigate(1); });

        document.addEventListener('keydown', function (e) {
            if (!testMode) return;
            if (e.key === 'ArrowLeft') { testNavigate(-1); e.preventDefault(); }
            if (e.key === 'ArrowRight') { testNavigate(1); e.preventDefault(); }
            if (e.key === 'Escape') { exitTestMode(); e.preventDefault(); }
        });

        // Focus task
        var focusAdd = document.getElementById('focusAdd');
        var focusInput = document.getElementById('focusInput');
        var focusDisplay = document.getElementById('focusDisplay');
        var focusText = document.getElementById('focusText');
        var focusClear = document.getElementById('focusClear');

        function loadFocus() {
            var saved = '';
            try { saved = localStorage.getItem('glyphclock-focus') || ''; } catch (e) {}
            if (saved) {
                focusText.textContent = saved;
                focusAdd.style.display = 'none';
                focusDisplay.style.display = '';
            }
        }

        loadFocus();

        focusAdd.addEventListener('click', function (e) {
            e.stopPropagation();
            focusAdd.style.display = 'none';
            focusInput.style.display = '';
            focusInput.focus();
        });

        focusInput.addEventListener('click', function (e) {
            e.stopPropagation();
        });

        focusInput.addEventListener('keydown', function (e) {
            if (e.key === 'Enter') {
                var val = focusInput.value.trim();
                if (val) {
                    focusText.textContent = val;
                    try { localStorage.setItem('glyphclock-focus', val); } catch (err) {}
                    focusInput.style.display = 'none';
                    focusInput.value = '';
                    focusDisplay.style.display = '';
                } else {
                    focusInput.style.display = 'none';
                    focusAdd.style.display = '';
                }
                e.stopPropagation();
            }
            if (e.key === 'Escape') {
                focusInput.style.display = 'none';
                focusInput.value = '';
                if (focusText.textContent) {
                    focusDisplay.style.display = '';
                } else {
                    focusAdd.style.display = '';
                }
                e.stopPropagation();
            }
        });

        focusInput.addEventListener('blur', function () {
            if (focusInput.style.display !== 'none') {
                focusInput.style.display = 'none';
                if (focusText.textContent) {
                    focusDisplay.style.display = '';
                } else {
                    focusAdd.style.display = '';
                }
            }
        });

        focusClear.addEventListener('click', function (e) {
            e.stopPropagation();
            focusText.textContent = '';
            focusDisplay.style.display = 'none';
            focusAdd.style.display = '';
            try { localStorage.removeItem('glyphclock-focus'); } catch (err) {}
        });
    });
})();
