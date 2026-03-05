import Foundation

struct GlyphClockModel {
    static let symbols = ["🥐","🦋","🌷","☂️","🌵","🎈","👓","⚓","🦚","🤖","⭐","☁️","🌲","🪁","🪑","♻"]
    static let subs = ["一","二","三"]

    let emoji: String
    let sub: String
    let combined: String
    let dayProgress: Double

    /// Compute the glyph for a given date using UTC time, matching scripts.js logic.
    static func glyph(for date: Date) -> GlyphClockModel {
        var calendar = Calendar(identifier: .gregorian)
        calendar.timeZone = TimeZone(identifier: "UTC")!

        let hour = calendar.component(.hour, from: date)
        let minute = calendar.component(.minute, from: date)
        let minutes = hour * 60 + minute

        let block = min(minutes / 90, 15)
        let sub = min((minutes % 90) / 30, 2)

        let emoji = symbols[block]
        let subChar = subs[sub]
        let progress = Double(minutes) / 1440.0

        return GlyphClockModel(
            emoji: emoji,
            sub: subChar,
            combined: "\(subChar)\(emoji)",
            dayProgress: progress
        )
    }
}
