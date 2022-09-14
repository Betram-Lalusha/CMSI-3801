import fetch from "node-fetch"
import { createCipheriv, createDecipheriv } from "crypto"

/**
 * Accepts a number of U.S. cents and returns an array containing, respectively,
 * the smallest number of U.S. quarters, dimes, nickels, and pennies that equal the given amount.
 * @param amount Number of cents to convert into change
 * @returns Array containing the converted change in quarters, dimes, nickels, and pennies, respectively
 */
export function change(amount) {
	if (amount < 0) {
		throw new RangeError("Amount cannot be negative")
	}
	const coinValues = [25, 10, 5, 1]
	const changeAmount = [0, 0, 0, 0]

	let amountLeft = amount
	changeAmount[0] = Math.floor(amountLeft / coinValues[0])
	amountLeft -= coinValues[0] * changeAmount[0]
	changeAmount[1] = Math.floor(amountLeft / coinValues[1])
	amountLeft -= coinValues[1] * changeAmount[1]
	changeAmount[2] = Math.floor(amountLeft / coinValues[2])
	amountLeft -= coinValues[2] * changeAmount[2]
	changeAmount[3] = amountLeft

	return changeAmount
}

/**
 * Function takes a string and repeats each character n number of times where n is the position of the character in the string.
 * @param inputString String to stretch
 * @returns Original string with the i-th position character repeated i times
 */
export function stretched(inputString) {
	let outputString = ""
	let charIndex = 1
	for (const inputChar of inputString) {
		if (inputChar != " ") {
			outputString += inputChar.repeat(charIndex)
			charIndex++
		}
	}
	return outputString
}

/**
 * “Chainable” function that accepts one string per call, but when called without arguments,
 * returns the words previously passed, in order, separated by a single space.
 * Note: help on how to solve this problem was obtained from the following stackoverflow chain:
 * https://stackoverflow.com/questions/55598409/write-a-function-that-can-be-invoked-as-sayhi
 * @param phrase Phrase to add to the chain of words to say
 * @returns Empty string if the function is called without an argument or the complete phrase of all given string arguments separated by spaces
 */
export function say(phrase) {
	return phrase === undefined
		? ""
		: function sayHelper(newPhrase) {
			return newPhrase === undefined ? phrase : say(phrase + " " + newPhrase)
		}
}

/**
 * A function that yields successive powers of a base starting at the 0th power and going up to some limit.
 * @param base Base number to obtain powers of
 * @param limit Number that, when reached, stops calculation of further powers
 * @param callback Callback function to pass values to
 */
export function powers(base, limit, callback) {
	let result = 1
	let exponent = 0
	while (result <= limit) {
		callback(result)
		exponent++
		result = base ** exponent
	}
}

/**
 * Generator function that yields successive powers of a base starting at the 0th power and going up to some limit.
 * @param base Base number to obtain powers of
 * @param limit Number that, when reached, stops calculation of further powers
 */
export function* powersGenerator(base, limit) {
	let result = 1
	let exponent = 0
	while (result <= limit) {
		yield result
		exponent++
		result = base ** exponent
	}
}

/**
 * A function that accepts one object argument that must contain a crypto key, a crypto algorithm, and an initialization vector,
 * and returns an array of two functions, encryption function that encrypts a string into a hex string.
 * @param algorithm Crypto algorithm
 * @param key Crypto key
 * @param IV Initialization vector
 * @returns Array of two functions; an encryption function that encrypts a string into a hex string, and a decryption function that decrypts the hex string into a string.
 */
export function makeCryptoFunctions({
	using: algorithm,
	forKey: key,
	withIV: IV,
}) {
	const cipher = createCipheriv(algorithm, key, IV)
	const decipher = createDecipheriv(algorithm, key, IV)
	const encryption = (message) => {
		return cipher.update(message, "utf8", "hex") + cipher.final("hex")
	}
	const decryption = (secret) => {
		return decipher.update(secret, "hex", "utf8") + decipher.final()
	}
	return [encryption, decryption]
}

export function topTenScorers(list) {
	return Object.entries(list)
		.flatMap(([team, players]) => players.map(player => [...player, team]))
		.filter(([, totalGames, ,]) => totalGames >= 15)
		.map(([name, totalGames, points, team]) => ({ name, ppg: points / totalGames, team }))
		.sort((p1, p2) => p2.ppg - p1.ppg)
		.slice(0, 10)
}

/**
 * Async function to fetch a Pokémon’s id, name, and weight from the Poké API.
 * @param pokemonName Name of Pokémon to obtain data of
 * @returns Object containing the id, name, and weight of the Pokémon who's name was given
 */
export async function pokemonInfo(pokemonName) {
	const params = {
		method: "GET",
		headers: {
			accept: "application/json",
		},
	}
	const url = "https://pokeapi.co/api/v2/pokemon/" + pokemonName
	return await fetch(url, params)
		.then((response) => {
			if (response.ok) {
				return response.json()
			}
		})
		.then((data) => {
			return {
				id: data.id,
				name: data.name,
				weight: data.weight,
			}
		})
}
/**
 * Class of Quaternion. It has two methods, plus and times.
 */
export class Quaternion {
	#num0;
	#num1;
	#num2;
	#num3;

	constructor(num0, num1, num2, num3) {
		this.#num0 = num0;
		this.#num1 = num1;
		this.#num2 = num2;
		this.#num3 = num3;
	}

	get num0() {
		return this.#num0;
	}

	get num1() {
		return this.#num1;
	}

	get num2() {
		return this.#num2;
	}

	get num3() {
		return this.#num3;
	}

	/**
	 * 
	 * @param {} other : the other Quaternion to add
	 * @returns : a new Quaternion whose coefficients are the sum of the respective indexes in the two Quaternions being added
	 */
	plus(other) {
		return new Quaternion(this.#num0 + other.num0, this.#num1 + other.num1, this.#num2 + other.num2, this.#num3 + other.num3);
	}

	/**
	 * 
	 * @param {*} other: the other Quaternion to mutiply with this one 
	 * @returns: multiplies the two Quaternions using the rules from:  https://www.mathworks.com/help/aeroblks/quaternionmultiplication.html#mw_48cb7d03-514d-4b24-8423-66c731cd4415
	 */
	times(other) {
		let product = [];

		let t0 = (this.#num0 * other.num0) - (this.#num1 * other.num1) - (this.#num2 * other.num2) - (this.#num3 * other.num3);
		let t1 = (this.#num0 * other.num1) + (this.#num1 * other.num0) + (this.#num2 * other.num3) - (this.#num3 * other.num2);
		let t2 = (this.#num0 * other.num2) - (this.#num1 * other.num3) + (this.#num2 * other.num0) + (this.#num3 * other.num1);
		let t3 = (this.#num0 * other.num3) + (this.#num1 * other.num2) - (this.#num2 * other.num1) + (this.#num3 * other.#num0);
		return new Quaternion(t0, t1, t2, t3);
	}

	coefficients() {
		let coefficients = [];
		coefficients.push(this.#num0);
		coefficients.push(this.#num1);
		coefficients.push(this.#num2);
		coefficients.push(this.#num3);
		return coefficients;
	}
}
