extension String {
    var stretched: String {
        var stretchedString = ""
        let trimmed = self.filter{!$0.isWhitespace}
        for (index, char) in trimmed.enumerated() {
            stretchedString += String(repeating:"\(char)", count: index + 1)
        }
        return stretchedString
    }

}