
const emojiRegex = /\p{Emoji}/u;
var currentPhrase = "";

export function stretched(string) {
	var stretchedString = "";
	var stringWithoutSpace = string.replace(/ /g, ''); //code adopted from https://stackoverflow.com/questions/6623231/remove-all-white-spaces-from-text
	var stringArray = string.split(" ");
	for (var i = 1; i <= stringWithoutSpace.length; i++) {
		stretchedString += stretch(stringWithoutSpace.charAt(i - 1), i);
	}
	return stretchedString;
}

export function change() {

}

/**
 * 
 * @param {*} phrase: the phrase to add to the chain of words to say 
 * @returns: "" if the function is called without an argument or an anonymous function
 *           that keeps adding phrases passed in as arguments to the current phrase
 * Note: help on how to solve this problem was obtained from the following stackoverflow chain: https://stackoverflow.com/questions/55598409/write-a-function-that-can-be-invoked-as-sayhi 
 */
export function say(phrase) {
	return phrase === undefined ? "" : function sayHelper(newPhrase) {
		return newPhrase === undefined ? phrase : say(phrase + " " + newPhrase);
	}
}
export function powers() {

}

export function powersGenerator() {

}

export function makeCryptoFunctions() {

}

export function topTenScorers() {

}

export function pokemonInfo() {

}

export class Quaternion {

}

// console.log(stretched("dog house"))
// console.log(stretched("😄🤗 💀"));

// console.log(say("hi")("there")())
// console.log(say())








/****** HELPER FUNCTIONS***/

/*
Stretches a given letter by numberOfTimes
@letter: the letter to stretch
@numberOfTimes: the number of times to stretch the letter by
*/
function stretch(letter, numberOfTimes) {

	var result = letter;
	let originalLetter = letter;
	for (var i = 1; i < numberOfTimes; i++) {
		//console.log("code point " + emojiRegex.test(originalLetter));
		result += originalLetter;
	}

	return result;
}

