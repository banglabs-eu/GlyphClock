# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

watchOS companion for GlyphClock — a standalone Apple Watch app and WidgetKit complication that displays the GlyphClock time system. The 24-hour day (1440 UTC minutes) is divided into 16 blocks of 90 minutes, each with a unique emoji, and 3 sub-periods of 30 minutes labeled with Chinese numerals.

Emoji sequence: `["🥐","🦋","🌷","☂️","🌵","🎈","👓","⚓","🦚","🤖","⭐","☁️","🌲","🪁","🪑","♻"]`

## Build & Run

Requires Xcode 15+ and watchOS 10+ (Series 6 or later).

```bash
# Open in Xcode
open GlyphClock.xcodeproj

# Regenerate Xcode project from project.yml (if targets/settings change)
xcodegen generate
```

Build and deploy via Xcode (Cmd+R) with an Apple Watch selected as run destination. Both targets require signing with an Apple Developer team.

## Architecture

Two targets defined in `project.yml`:

**GlyphClock Watch App** — Standalone watchOS app showing the current glyph with a 30-second refresh timer.
- `GlyphClockApp.swift` — App entry point and `ContentView`

**GlyphClock WidgetExtension** — WidgetKit complication supporting four families: circular, rectangular, inline, corner.
- `GlyphClockWidget.swift` — Widget definition and `GlyphClockEntryView` (routes to family-specific views)
- `GlyphClockTimelineProvider.swift` — Generates 48 entries (24h of 30-min blocks) aligned to UTC boundaries
- `GlyphClockEntry.swift` — `TimelineEntry` wrapper
- `Views/` — One SwiftUI view per complication family

**Shared model** — `GlyphClockModel.swift` lives in `GlyphClock Widget/` but is included in both targets via `project.yml` source paths. It contains the UTC-based time calculation that must stay in sync with the web app's `scripts.js` logic.

## Key Patterns

- All time calculations use **UTC** — the `Calendar` and `TimeZone` are explicitly set to UTC, never local time.
- The timeline provider aligns entries to 30-minute boundaries so complications update exactly when the sub-period changes.
- The widget uses `@main` on `GlyphClockWidget` and the app uses `@main` on `GlyphClockApp` — these are separate entry points in separate targets.
- Bundle IDs follow `eu.bang-labs.glyphclock.watchapp` (app) and `.watchapp.widget` (extension).
