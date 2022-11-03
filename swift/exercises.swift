import Foundation

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

struct Quaternion: CustomStringConvertible {
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
    
    var I : Quaternion {
        get {return Quaternion(a:0, b:1, c:0, d:0)}
    }
    
    static var I : Quaternion {
        get {return Quaternion(a:0, b:1, c:0, d:0)}
    }
    
    var J : Quaternion {
        get {return Quaternion(a:0, b:0, c:1, d:0)}
    }
    
    static var J : Quaternion {
        get {return Quaternion(a:0, b:0, c:1, d:0)}
    }
    
    var K : Quaternion {
        get {return Quaternion(a:0, b:0, c:0, d:1)}
    }
    
    static var K : Quaternion {
        get {return Quaternion(a:0, b:0, c:0, d:1)}
    }
    
    var ZERO : Quaternion {
        get {return Quaternion(a:0, b:0, c:0, d:0)}
    }
    
    static var ZERO : Quaternion {
        get {return Quaternion(a:0, b:0, c:0, d:0)}
    }

    var coefficients: [Double] { return [a, b, c, d]}

    var description: String {
        let part0 = "\(self.a)"
        let part1 = self.b.isLess(than: 0.0) ? "" : "+"
        let part2 = "\(self.b)i"
        let part3 = self.c.isLess(than: 0.0) ? "" : "+"
        let part4 = "\(self.c)j"
        let part5 = self.d.isLess(than: 0.0) ? "" : "+"
        let part6 = "\(self.d)k"
        let description =  part0 + part1 + part2 + part3 + part4 + part5 + part6
        return description  
    }
}


func + (q1: Quaternion, q2: Quaternion) -> Quaternion {
    return Quaternion(
        a: q1.a + q2.a,
        b: q1.b + q2.b,
        c: q1.c + q2.c,
        d: q1.d + q2.d
    )
}

func - (q1: Quaternion, q2: Quaternion) -> Quaternion  {
    return Quaternion(
        a: q1.a - q2.a,
        b: q1.b - q2.b,
        c: q1.c - q2.c,
        d: q1.d - q2.d
    )
}

func * (q1: Quaternion, q2: Quaternion) -> Quaternion {
    let a0 = q1.a * q2.a - q1.b * q2.b - q1.c * q2.c - q1.d * q2.d
    let b0 = q1.a * q2.b + q1.b * q2.a + q1.c * q2.d - q1.d * q2.c
    let c0 =  q1.a * q2.c - q1.b * q2.d + q1.c * q2.a + q1.d * q2.b
    let d0 = q1.a * q2.d + q1.b * q2.c - q1.c * q2.b + q1.d * q2.a
    return Quaternion(a: a0, b: b0, c: c0, d: d0)
}

func == (q1: Quaternion, q2: Quaternion) -> Bool {
    return q1.a == q2.a && q1.b == q2.b && q1.c == q2.c && q1.d == q2.d  
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



