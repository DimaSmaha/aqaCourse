/** TASK - Working with Object Methods
 *
 * 1. Declare an object "person" with properties: name, age, and city.
 *
 * 2. Use object methods to:
 *    - Get an array of the object's keys and output it to the console.
 *    - Get an array of the object's values and output it to the console.
 *
 * 3. Output the city in console
 */

const person = {
  name: "Alice",
  age: 25,
  city: "New York",
};

console.log("Keys:", Object.keys(person));
console.log("Values:", Object.values(person));
console.log(person.city);
