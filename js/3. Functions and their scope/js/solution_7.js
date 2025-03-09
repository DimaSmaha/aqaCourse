/** TASK - Function Scope
 *
 * 1. Declare a function "calculateSum" that takes two parameters.
 *
 * 2. Inside the function:
 *    - Declare a variable "result" and assign it the sum of the two parameters.
 *    - Output "result" to the console inside the function.
 *
 * 3. Call "calculateSum" with any two numbers.
 *
 * 4. Try to output "result" outside the function and observe what happens.
 */

function calculateSum(a, b) {
  const result = a + b;
  console.log("Sum inside function:", result);
}

calculateSum(5, 10);

console.log("Sum outside function:", result); // Error here
