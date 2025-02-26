/** TASK 5 - Variable Scope
 *
 * 1. Declare a global variable "globalVar" and assign it any value.
 *
 * 2. Create a function "testScope":
 *    - Inside the function, declare a local variable "localVar" and assign it any value.
 *    - Output both "globalVar" and "localVar" to the console inside the function.
 *
 * 3. Call "testScope" to see the output.
 *
 * 4. Try to output "localVar" outside the function and observe what happens.
 */

const globalVar = "I'm global!";

function testScope() {
  const localVar = "I'm local!";
  console.log(globalVar);
  console.log(localVar);
}

testScope();

console.log(globalVar); // This works
console.log(localVar); // This will cause an error
