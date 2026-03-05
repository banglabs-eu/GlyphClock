import SwiftUI
import WidgetKit

@main
struct GlyphClockWidget: Widget {
    let kind = "GlyphClockWidget"

    var body: some WidgetConfiguration {
        StaticConfiguration(kind: kind, provider: GlyphClockTimelineProvider()) { entry in
            GlyphClockEntryView(entry: entry)
        }
        .configurationDisplayName("GlyphClock")
        .description("Shows the current GlyphClock symbol.")
        .supportedFamilies([
            .accessoryCircular,
            .accessoryRectangular,
            .accessoryInline,
            .accessoryCorner
        ])
    }
}

struct GlyphClockEntryView: View {
    @Environment(\.widgetFamily) var family
    let entry: GlyphClockEntry

    var body: some View {
        switch family {
        case .accessoryCircular:
            CircularView(glyph: entry.glyph)
        case .accessoryRectangular:
            RectangularView(glyph: entry.glyph)
        case .accessoryInline:
            InlineView(glyph: entry.glyph)
        case .accessoryCorner:
            CornerView(glyph: entry.glyph)
        default:
            Text(entry.glyph.combined)
        }
    }
}

#Preview(as: .accessoryCircular) {
    GlyphClockWidget()
} timeline: {
    GlyphClockEntry(date: .now, glyph: .glyph(for: .now))
}
