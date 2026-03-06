import SwiftUI
import WidgetKit

@main
struct GlyphClockWidgetBundle: WidgetBundle {
    var body: some Widget {
        GlyphClockGlyphWidget()
        GlyphClockLinesWidget()
        GlyphClockBothWidget()
    }
}

struct GlyphClockGlyphWidget: Widget {
    let kind = "GlyphClockGlyph"

    var body: some WidgetConfiguration {
        StaticConfiguration(kind: kind, provider: GlyphClockTimelineProvider()) { entry in
            CircularGlyphView(glyph: entry.glyph)
                .containerBackground(.clear, for: .widget)
        }
        .configurationDisplayName("Glyph")
        .description("Shows the current glyph.")
        .supportedFamilies([.accessoryCircular])
    }
}

struct GlyphClockLinesWidget: Widget {
    let kind = "GlyphClockLines"

    var body: some WidgetConfiguration {
        StaticConfiguration(kind: kind, provider: GlyphClockTimelineProvider()) { entry in
            CircularLinesView(glyph: entry.glyph)
                .containerBackground(.clear, for: .widget)
        }
        .configurationDisplayName("Lines")
        .description("Shows the current sub-period.")
        .supportedFamilies([.accessoryCircular])
    }
}

struct GlyphClockBothWidget: Widget {
    let kind = "GlyphClockBoth"

    var body: some WidgetConfiguration {
        StaticConfiguration(kind: kind, provider: GlyphClockTimelineProvider()) { entry in
            CircularBothView(glyph: entry.glyph)
                .containerBackground(.clear, for: .widget)
        }
        .configurationDisplayName("Glyph + Lines")
        .description("Shows the current glyph and sub-period.")
        .supportedFamilies([.accessoryCircular])
    }
}
