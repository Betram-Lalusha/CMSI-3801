import fetch from "node-fetch";
import { createCipheriv, createDecipheriv } from "crypto";

/**
 * Accepts a number of U.S. cents and returns an array containing, respectively,
 * the smallest number of U.S. quarters, dimes, nickels, and pennies that equal the given amount.
 * @param amount Number of cents to convert into change
 * @returns Array containing the converted change in quarters, dimes, nickels, and pennies, respectively
 */
export function change(amount) {
  if (amount < 0) {
    throw new RangeError("Amount cannot be negative");
  }
  const coinValues = [25, 10, 5, 1];
  const changeAmount = [0, 0, 0, 0];

  let amountLeft = amount;
  changeAmount[0] = Math.floor(amountLeft / coinValues[0]);
  amountLeft -= coinValues[0] * changeAmount[0];
  changeAmount[1] = Math.floor(amountLeft / coinValues[1]);
  amountLeft -= coinValues[1] * changeAmount[1];
  changeAmount[2] = Math.floor(amountLeft / coinValues[2]);
  amountLeft -= coinValues[2] * changeAmount[2];
  changeAmount[3] = amountLeft;

  return changeAmount;
}

/**
 * Function takes a string and repeats each character n number of times where
 * n is the position of the character in the string.
 * @param inputString The string to stretch
 * @returns The original string with the i-th character repeated i times
 */
export function stretched(inputString) {
  let outputString = "";
  let charIndex = 1;
  for (const inputChar of inputString) {
    if (inputChar != " ") {
      outputString += inputChar.repeat(charIndex);
      charIndex++;
    }
  }
  return outputString;
}

/**
 * “Chainable” function that accepts one string per call, but when called without arguments,
 * returns the words previously passed, in order, separated by a single space.
 * Note: help on how to solve this problem was obtained from the following stackoverflow chain:
 * https://stackoverflow.com/questions/55598409/write-a-function-that-can-be-invoked-as-sayhi
 * @param phrase Phrase to add to the chain of words to say
 * @returns Empty string if the function is called without an argument or a helper function
 * 			that keeps adding phrases passed in as arguments to the current phrase.
 */
export function say(phrase) {
  return phrase === undefined
    ? ""
    : function sayHelper(newPhrase) {
        return newPhrase === undefined ? phrase : say(phrase + " " + newPhrase);
      };
}

/**
 * A function that yields successive powers of a base starting at the 0th power and going up to some limit.
 * @param base Base number to obtain powers of
 * @param limit Limit to stop at
 * @param callback Callback function to pass values to
 */
export function powers(base, limit, callback) {
  let result = 1;
  let exponent = 0;
  while (result <= limit) {
    callback(result);
    exponent++;
    result = base ** exponent;
  }
}

/**
 * Generator function that yields successive powers of a base starting at the 0th power and going up to some limit.
 * @param base Base number to obtain powers of
 * @param limit Limit to stop at
 */
export function* powersGenerator(base, limit) {
  let result = 1;
  let exponent = 0;
  while (result <= limit) {
    yield result;
    exponent++;
    result = base ** exponent;
  }
}

export function makeCryptoFunctions({
  using: algorithm,
  forKey: key,
  withIV: IV,
}) {
  const cipher = createCipheriv(algorithm, key, IV);
  const decipher = createDecipheriv(algorithm, key, IV);
  const enscryption = (message) => {
    return cipher.update(message, "utf8", "hex") + cipher.final("hex");
  };
  const description = (secret) => {
    return decipher.update(secret, "hex", "utf8") + decipher.final();
  };
  return [enscryption, description];
}

export function topTenScorers() {}

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
  };
  const url = "https://pokeapi.co/api/v2/pokemon/" + pokemonName;
  return await fetch(url, params)
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
      };
    });
}

export class Quaternion {}
