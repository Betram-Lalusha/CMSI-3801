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

extension Array {
    func mapThenUnique<T>(_ mapper: (Element) -> T) -> Set<T> {
        let mapped = self.map(mapper)
        var set : Set<T> = []
        for element in mapped {
            set.insert(element)
        }
        
        return set
    }
}