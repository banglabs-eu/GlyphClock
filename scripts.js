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
        var titleEl = document.getElementById('currentTimeTitle');
        if (el) {
            ensureGlyphSpans(el);
            var spans = el.querySelectorAll('.glyph-item');
            for (var i = 0; i < 3; i++) {
                spans[i].textContent = info.glyph;
            }
            el.className = 'glyph-' + info.count;
        }
        if (titleEl) {
            var text = '';
            for (var i = 0; i < info.count; i++) text += info.glyph;
            titleEl.textContent = text;
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
    });
})();
