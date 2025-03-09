/** TASK - Looping Through Numbers
 *
 * 1. Declare a variable "limit" and assign it a number greater than 5.
 *
 * 2. Create the variable counter and set to 0
 *
 * 3. Use a for loop to iterate from 1 to "limit":
 *    - In each iteration, output the current number to the console.
 *
 * 4. If counter == limit the code should finish
 */

let counter = 0;
const limit = 7;

console.log("Counting up:");
for (let i = 0; i <= limit; i++) {
  counter++;

  console.log(counter);

  if (counter == limit) {
    console.log("Finished counter is on the limit");
  }
}
