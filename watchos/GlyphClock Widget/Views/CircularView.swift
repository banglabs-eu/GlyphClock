import SwiftUI
import WidgetKit

struct CircularView: View {
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
