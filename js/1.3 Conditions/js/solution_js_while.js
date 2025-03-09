/** TASK - Using a While Loop to Count Down
 *
 * 1. Declare a variable "count" and set it to 5.
 *
 * 2. Use a while loop to:
 *    - Log the current value of "count".
 *    - Decrease "count" using "--" until it reaches 0.
 *
 * 3. When the loop ends, log "Countdown complete!".
 */

let count = 5;

while (count > 0) {
  console.log("Countdown:", count);
  count--; // Decrease count
}

console.log("Countdown complete!");
