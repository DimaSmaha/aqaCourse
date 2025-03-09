/** TASK - Working with Promises
 *
 * 1. Create a function "fetchData" that returns a Promise.
 *    - The Promise should resolve after 2 seconds with a person object containing name, job, and age.
 *    - Use setTimeout to set 2 seconds delay
 *    - Create a successCondition variable using Math.random that in 80% return true, and output it each time
 *    - Set a successCondition variable to resolve and reject functions.
 *      If the condition true then call the resolve, if false then call reject
 *
 * 2. Use .then() and .catch() to handle the Promise result.
 *    - If resolved, log the person data.
 *    - If rejected, log an error message.
 *
 *  * 💡 **Clue:** Math.random returns a number from 0.00001 to 0.999999
 */

function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const successCondition = Math.random() > 0.2; // 80% chance of success
      console.log(`Success condition: ${successCondition}`);

      if (successCondition) {
        resolve({ name: "John", job: "Wrestler", year: 47 });
      }
      if (!successCondition) {
        reject("Failed to fetch person data.");
      }
    }, 2000);
  });
}

fetchData()
  .then((data) => {
    console.log(`The person data ${JSON.stringify(data)}`);
  })
  .catch((error) => {
    console.error("Error:", error);
  });
