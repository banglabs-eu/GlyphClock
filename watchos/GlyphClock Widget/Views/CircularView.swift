import SwiftUI
import WidgetKit

struct CircularGlyphView: View {
    let glyph: GlyphClockModel

    var body: some View {
        ZStack {
            AccessoryWidgetBackground()
            Text(glyph.emoji)
                .font(.system(size: 28))
        }
    }
}

struct CircularLinesView: View {
    let glyph: GlyphClockModel

    var body: some View {
        ZStack {
            AccessoryWidgetBackground()
            Text(glyph.sub)
                .font(.system(size: 28))
                .widgetAccentable()
        }
    }
}

struct CircularBothView: View {
    let glyph: GlyphClockModel

    var body: some View {
        ZStack {
            AccessoryWidgetBackground()
            VStack(spacing: -2) {
                Text(glyph.emoji)
                    .font(.system(size: 22))
                Text(glyph.sub)
                    .font(.system(size: 12))
                    .widgetAccentable()
            }
        }
    }
}
