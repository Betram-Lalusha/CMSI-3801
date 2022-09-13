import fetch from "node-fetch";
import { createCipheriv, createDecipheriv } from "crypto";

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

export function change(amount) {
	if (amount < 0) {
		throw new RangeError("must be a positive value");
	}
	var coinvalue = [25, 10, 5, 1];
	var changeamount = [0, 0, 0, 0];
	var amountleft = amount;
	if (amount == 0) {
		return changeamount;
	}

	while (amountleft > 0) {
		changeamount[0] = Math.floor(amount / coinvalue[0]);
        amountleft = amountleft - (coinvalue[0] * changeamount[0]);
        changeamount[1] = Math.floor(amountleft / coinvalue[1]);
        amountleft = amountleft - (coinvalue[1] * changeamount[1]);
        changeamount[2] = Math.floor(amountleft / coinvalue[2]);
		amountleft = amountleft - (coinvalue[2] * changeamount[2]);
		changeamount[3] = amountleft;
        amountleft = amountleft - changeamount[3];
	}

	return changeamount;

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
export function powers(base, limit, p) {
	var exponent = Math.log(Math.abs(limit))/ Math.log(Math.abs(base));
    exponent = Math.floor(exponent);
    for (let i = 0; i <= (exponent); i++) {
        p(Math.pow(base, i));
	}
	if (base < 0){
		if (Math.pow(base, exponent) > 0){
		exponent++;
		p(Math.pow(base, exponent));
		}
	}
}

export function powersGenerator() {

}

export function makeCryptoFunctions({using: algorithm, forKey: key, withIV: IV}) {
	const cipher = createCipheriv(algorithm,key,IV);
	const decipher = createDecipheriv(algorithm,key,IV);
	const enscryption = (message) => {
		return cipher.update(message, 'utf8','hex') + cipher.final('hex');
		}
	const description = (secret) => {
		return (decipher.update(secret, 'hex', 'utf8') + decipher.final());
	}
	return [enscryption, description];
} 

export function topTenScorers() {

}

export async function pokemonInfo(pokemonName) {
	const params = {
		method: 'GET',
		headers: {
			'accept': 'application/json'
		}
	};
	const Url = "https://pokeapi.co/api/v2/pokemon/" + pokemonName;
		return await fetch(Url, params)
			.then((response) => {
				if (response.ok) {
					return response.json();
				}
			})
			.then((data) => {
				return {
					id: data.id,
					name: data.name,
					weight: data.weight,
				}
			});
}

export class Quaternion {

}


stretched("😄🤗💀")
