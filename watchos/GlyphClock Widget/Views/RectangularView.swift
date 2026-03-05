import SwiftUI
import WidgetKit

struct RectangularView: View {
    let glyph: GlyphClockModel

    var body: some View {
        VStack(alignment: .leading, spacing: 2) {
            Text(glyph.combined)
                .font(.headline)
                .widgetAccentable()
            Text("GlyphClock")
                .font(.caption2)
                .foregroundStyle(.secondary)
            Gauge(value: glyph.dayProgress) {
                EmptyView()
            }
            .gaugeStyle(.accessoryLinear)
        }
    }
}
