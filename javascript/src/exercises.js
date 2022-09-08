

/**
 * Function takes a strength an repeats each character n number of times where
 * n is the posistion of the character in the string 1-indexed.
 * @param {*} string: the string to stretch
 * @returns : the orginal string with the i-th character repeated i times
 */
export function stretched(string) {
	var stretchedString = "";
	var stringWithoutSpace = string.replace(/ /g, ''); //code adopted from https://stackoverflow.com/questions/6623231/remove-all-white-spaces-from-text
	var stringArray = string.split(" ");
	var arr = Array.from(stringWithoutSpace);
	for (let i = 1; i <= arr.length; i++) {
		stretchedString += arr[i - 1].repeat(i);
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


stretched("😄🤗💀")
