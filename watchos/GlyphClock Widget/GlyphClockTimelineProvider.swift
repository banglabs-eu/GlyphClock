import WidgetKit

struct GlyphClockTimelineProvider: TimelineProvider {
    func placeholder(in context: Context) -> GlyphClockEntry {
        GlyphClockEntry(date: .now, glyph: .glyph(for: .now))
    }

    func getSnapshot(in context: Context, completion: @escaping (GlyphClockEntry) -> Void) {
        completion(GlyphClockEntry(date: .now, glyph: .glyph(for: .now)))
    }

    func getTimeline(in context: Context, completion: @escaping (Timeline<GlyphClockEntry>) -> Void) {
        var entries: [GlyphClockEntry] = []
        var calendar = Calendar(identifier: .gregorian)
        calendar.timeZone = TimeZone(identifier: "UTC")!

        // Align to the current 30-minute boundary
        let now = Date()
        let comps = calendar.dateComponents([.year, .month, .day, .hour, .minute], from: now)
        let alignedMinute = (comps.minute! / 30) * 30
        var startComps = comps
        startComps.minute = alignedMinute
        startComps.second = 0
        startComps.nanosecond = 0

        guard let startDate = calendar.date(from: startComps) else {
            completion(Timeline(entries: [], policy: .after(now)))
            return
        }

        // Generate 48 entries (24 hours of 30-min blocks)
        for i in 0..<48 {
            let entryDate = startDate.addingTimeInterval(Double(i) * 30 * 60)
            let glyph = GlyphClockModel.glyph(for: entryDate)
            entries.append(GlyphClockEntry(date: entryDate, glyph: glyph))
        }

        completion(Timeline(entries: entries, policy: .atEnd))
    }
}
