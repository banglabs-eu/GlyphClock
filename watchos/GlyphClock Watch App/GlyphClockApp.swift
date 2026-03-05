import SwiftUI

@main
struct GlyphClockApp: App {
    var body: some Scene {
        WindowGroup {
            ContentView()
        }
    }
}

struct ContentView: View {
    @State private var glyph = GlyphClockModel.glyph(for: .now)

    var body: some View {
        VStack(spacing: 8) {
            Text(glyph.emoji)
                .font(.system(size: 64))
            Text(glyph.sub)
                .font(.title2)
        }
        .onAppear { updateGlyph() }
        .onReceive(
            Timer.publish(every: 30, on: .main, in: .common).autoconnect()
        ) { _ in updateGlyph() }
    }

    private func updateGlyph() {
        glyph = GlyphClockModel.glyph(for: .now)
    }
}
