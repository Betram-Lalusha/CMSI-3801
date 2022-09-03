
export function stretched(string) {
	var stretchedString = "";
	var stringWithoutSpace = string.replace(/ /g, ''); //code adopted from https://stackoverflow.com/questions/6623231/remove-all-white-spaces-from-text
	var stringArray = string.split(" ");
	for(var i = 1; i <= stringWithoutSpace.length; i++) {
		stretchedString += stretch(stringWithoutSpace.charAt(i - 1), i);
	}
	return stretchedString;
}

export function change () {

}

export function say() {

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

export class Quaternion{

}

console.log(stretched("dog house"))
console.log(stretched("😄🤗 💀"));









/****** HELPER FUNCTIONS***/

/*
Stretches a given letter by numberOfTimes
@letter: the letter to stretch
@numberOfTimes: the number of times to stretch the letter by
*/
function stretch(letter, numberOfTimes) {

	var result = letter;
	let originalLetter = letter;
	for(var i = 1; i < numberOfTimes; i++) {
		console.log("code point " + originalLetter.codePointAt(0));
		result += originalLetter.codePointAt(0);
	}

	return result;
}
