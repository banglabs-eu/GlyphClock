# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

GlyphClock is a static web app that displays a custom timezone-free time system. The 24-hour day (1440 minutes from UTC midnight) is divided into 16 blocks of 90 minutes, each with a unique emoji. Each block has 3 sub-periods of 30 minutes labeled with Chinese numerals (一, 二, 三).

Emoji sequence: 🥐→🦋→🌷→☂️→🌵→🎈→👓→⚓→🦚→🤖→⭐→☁️→🌲→🪁→🪑→♻

## Tech Stack

Pure static site — vanilla JavaScript, HTML5, CSS3. No npm, no build step, no dependencies. Both JS files use IIFEs with `'use strict'`.

## Deployment

Deployed via GitHub Actions on push to `main`. Workflow files in `.github/workflows/`. No build step — files are served directly from root.

To deploy: `git push origin main`

## Architecture

- **index.html** — Landing page, links to about and glyphclock pages
- **glyphclock.html** — Main display page showing current time symbol (large emoji)
- **about.html** — Explanation of the GlyphClock concept, credits Bang Labs as creator
- **scripts.js** — Application logic (IIFE):
  - Time calculation: array-based lookup using `SYMBOLS` and `SUBS` arrays with `Math.floor(minutes / 90)` for block and `Math.floor((minutes % 90) / 30)` for sub-period
  - `getMinutesSinceUtcMidnight()` — Uses `getUTCHours()`/`getUTCMinutes()` directly
  - `updateValues()` — Updates `#currentTime` and `#currentTimeTitle` (with null guards for pages without these elements)
  - `startTime()` — Aligns refresh to 30-minute boundaries via setTimeout then setInterval
  - Dark mode: detects system preference via `prefers-color-scheme`, persists to localStorage, toggle button in toolbar
  - Toolbar: creates a fixed top-right flex container; adds home link (non-index pages), dark mode toggle. Language switcher is appended by i18n.js
  - Page transitions: intercepts internal link clicks, fades out body before navigating
- **i18n.js** — Internationalization (IIFE):
  - 24 EU languages supported (bg, hr, cs, da, nl, en, et, fi, fr, de, el, hu, ga, it, lv, lt, mt, pl, pt, ro, sk, sl, es, sv)
  - Browser language autodetection with localStorage persistence
  - Translates elements with `data-i18n` attributes using `innerHTML`
  - Handles page titles via `data-page` attribute and `title.*` keys
  - Handles `<meta name="description">` via `meta.description.*` keys
  - Language switcher dropdown appended to `.toolbar`
- **css/styles.css** — Layout, dark mode (`.dark` class on body), toolbar (`.toolbar` flex container, `.toolbar-btn` shared button style), language switcher dropdown, page fade transitions
- **robots.txt** — Allows all crawlers
