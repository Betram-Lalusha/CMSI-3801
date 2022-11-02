enum NegativeAmountError : Error {
    case negativeAmount
}

func change(_ amount: Int) -> Result<(Int, Int, Int, Int), NegativeAmountError>{
    guard amount >= 0 else {
        return .failure(.negativeAmount)
    }
    let coinValues = [25, 10, 5, 1]
    var remaining = amount
    let coins = coinValues.map { (coinValue) -> Int in
        let (quotient, remainder) = remaining.quotientAndRemainder(dividingBy: coinValue)
        remaining = remainder
        return quotient
    }
    return .success((coins[0], coins[1], coins[2], coins[3]))
}

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

func powers(of: Int, through: Int, callback: (Int) -> Void) {
    var power = of
    callback(1)
    while power <= through {
        callback(power)
        power *= of
    }
}

func twice<T>(_ f: (T)->T, appliedTo x: T) -> T {
    return f(f(x))
}