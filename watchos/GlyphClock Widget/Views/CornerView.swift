import SwiftUI
import WidgetKit

struct CornerView: View {
    let glyph: GlyphClockModel

    var body: some View {
        Text(glyph.emoji)
            .font(.title.bold())
            .widgetLabel {
                Text(glyph.sub)
            }
    }
}
