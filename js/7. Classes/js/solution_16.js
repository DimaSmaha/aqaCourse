/** TASK - Creating a Class with a Constructor and Methods
 *
 * 1. Create a class "Car" with:
 *    - A constructor that takes "brand", "year" and "price" as parameters and assigns them to properties.
 *    - A method getCarInfo, that returns a string with the car's brand, year and price.
 *    - A method age, that calculates and returns the car's age based on the current year.
 *    - A method increasePrice, that takes a number as a parameter and increases the price by the number it was passed.
 *      Make sure to change the price in entire object
 *
 * 2. Create an instance of "Car" with any brand and year.
 *
 * 3. Call all three methods and output the results to the console. Check that cars price was changed
 */

class Car {
  constructor(brand, year, price) {
    this.brand = brand;
    this.year = year;
    this.price = price;
  }

  getCarInfo() {
    return `This car is ${this.brand}, it was released at ${this.year} and its current price is $${this.price}`;
  }

  age() {
    const currentYear = new Date().getFullYear();
    return `This car is ${currentYear - this.year} years old.`;
  }

  increasePrice = (increaseBy) => (this.price += increaseBy);
}

const newCar = new Car("Porsche", 2005, 15000);

console.log(newCar.getCarInfo());
console.log(newCar.age());
newCar.increasePrice(1000);
console.log(newCar.getCarInfo());
