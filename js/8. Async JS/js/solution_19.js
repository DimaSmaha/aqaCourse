/** TASK 19 - Fetching Data with Async/Await
 *
 * 1. Use the API: "https://official-joke-api.appspot.com/jokes/programming/random"
 *    - This API returns a random programming joke.
 *
 * 2. Create an async function "getJoke" that:
 *    - Fetches data from the API.
 *    - Waits for the response and converts it to JSON.
 *    - Extracts and returns an object with "setup" and "punchline".
 *    - Use async/await syntax
 *    - Return the next object {jokeBody, jokePunchline}
 *
 * 3. Create async function renderJoke, to handle getJoke with try/catch
 *
 * 4. Call "getJoke" and log the jokeBody and jokePunchline to the console.
 *
 * 5. Call renderJoke
 *
 *  * 💡 **Clue:** Use fetch to get the data from the server
 */

const API_URL =
  "https://official-joke-api.appspot.com/jokes/programming/random";

async function getJoke() {
  const resp = await fetch(API_URL);
  const body = await resp.json();
  console.log(body);
  return { jokeBody: body[0]?.setup, jokePunchline: body[0]?.punchline };
}

getJoke().then((resp) => {
  console.log("The joke: " + resp.jokeBody);
  console.log("Punchline: " + resp.jokePunchline);
});

async function renderJoke() {
  try {
    await getJoke().then((resp) => {
      console.log("The joke: " + resp.jokeBody);
      console.log("Punchline: " + resp.jokePunchline);
    });
  } catch (error) {
    console.error(error);
  }
}

renderJoke();
