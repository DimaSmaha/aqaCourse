/** TASK 12 - Basic String Methods
 *
 * 1. Declare a variable "firstName" and assign it any string.
 *
 * 2. Declare a variable "lastName" and assign it any string.
 *
 * 2. Use string methods to:
 *    - Combine this 2 words, do not use +.
 *    - Find the length of the combinedString and output it.
 *    - Extract the first letter and output it.
 *    - Extract the last letter and output it.
 */

const firstName = "Jonathan";
const lastName = "Smith";

const combinedString = firstName.concat(" ", lastName);

console.log("Combined:", combinedString);

console.log("Length of name:", combinedString.length);

console.log("First letter:", combinedString.charAt(0));

console.log("Last letter:", combinedString.charAt(combinedString.length - 1));
