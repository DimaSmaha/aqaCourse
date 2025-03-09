/** TASK - Using Switch to Determine the Current Month
 *
 * 1. Get the current month as a number using the new Date() (1 for January, 2 for February, etc.).
 *
 * 2. Use a switch statement to:
 *    - Output a message like: "Currently, it's March, the 3rd month of the year."
 *
 * 3. Handle all 12 months.
 *
 * 4. Ensure the output dynamically adjusts based on the actual current month.
 *
 * 💡 **Clue:** Create a dynamic variable monthName to later pass it into the sentence
 */

const currentMonthNumber = new Date().getMonth() + 1; // getMonth() returns 0-11, so we add 1
let monthName;

switch (currentMonthNumber) {
  case 1:
    monthName = "January";
    break;
  case 2:
    monthName = "February";
    break;
  case 3:
    monthName = "March";
    break;
  case 4:
    monthName = "April";
    break;
  case 5:
    monthName = "May";
    break;
  case 6:
    monthName = "June";
    break;
  case 7:
    monthName = "July";
    break;
  case 8:
    monthName = "August";
    break;
  case 9:
    monthName = "September";
    break;
  case 10:
    monthName = "October";
    break;
  case 11:
    monthName = "November";
    break;
  case 12:
    monthName = "December";
    break;
  default:
    monthName = "Not Covered Month";
}

console.log(
  `Currently, it's ${monthName}, the ${currentMonthNumber} month of the year.`
);
