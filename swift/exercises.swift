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

func uppercasedFirst(of:[String], longerThan: Int) -> String? {
    return of.first(where: {$0.count > longerThan})?.uppercased() ?? nil
}

struct Quaternion {
    var a: Double
    var b: Double
    var c: Double
    var d: Double

    init(a: Double, b: Double, c: Double, d: Double) {
        self.a = a
        self.b = b
        self.c = c
        self.d = d
    }

    // func + (q2: Quaternion) -> Quaternion {
    //     return Quaternion(
    //         a: self.a + q2.a,
    //         b: self.b + q2.b,
    //         c: self.c + q2.c,
    //         d: self.d + q2.d
    //     )
    // }

    // func - (q2: Quaternion) -> Quaternion  {
    //     return Quaternion(
    //         a: self.a - q2.a,
    //         b: self.b - q2.b,
    //         c: self.c - q2.c,
    //         d: self.d - q2.d
    //     )
    // }

    // func * (q2: Quaternion) -> Quaternion {
    //     let a0 = self.a * q2.a - self.b * q2.b - self.c * q2.c - self.d * q2.d   
    //     let b0 = self.a * q2.b + self.b * q2.a + self.c * q2.d - self.d * q2.c   
    //     let c0 =  self.a * q2.c - self.b * q2.d + self.c * q2.a + self.d * q2.b
    //     let d0 = self.a * q2.d + self.b * q2.c - self.c * q2.b + self.d * q2.a
    //     return Quaternion(a: a0, b: b0, c: c0, d: d0)
    // }

        var description: String {
            print("\(self.a)\(self.b)i\(self.c)j\(self.d)k")
            return "\(self.a)\(self.b)i\(self.c)j\(self.d)k"
    }
}

protocol Animal {
    var name: String { get }
    var sound: String { get }
    
}

extension Animal {
    func speak() -> String {
        return("\(name) says \(sound)")
    }
}

struct Horse: Animal {
    var name: String
    var sound = "neigh"

    init(name: String) {
        self.name = name
    }

    func speak() -> String {
        return "\(name) says \(sound)"
    }
}

struct Cow: Animal {
    var name: String
    var sound = "moooo"

    init(name: String) {
        self.name = name
    }

    func speak() -> String {
        return "\(name) says \(sound)"
    }
}

struct Sheep: Animal {
    var name: String
    var sound = "baaaa"

    init(name: String) {
        self.name = name
    }

    func speak() -> String {
        return "\(name) says \(sound)"
    }
}

struct say {
    var phrase: String
    init(_ words: String) {
        self.phrase = words
    }
    
    func and(_ words: String) -> say {
        var copy = self
        copy.phrase += " "
        copy.phrase += words
        return copy
    }
}



