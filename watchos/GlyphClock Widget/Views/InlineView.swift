import SwiftUI
import WidgetKit

struct InlineView: View {
    let glyph: GlyphClockModel

    var body: some View {
        Text(glyph.combined)
    }
}
