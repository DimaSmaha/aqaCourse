/** TASK 17 - Class Inheritance and Method Overriding
 *
 * 1. Create a class Car with properties: brand, model, and year.
 *    - Add a method displayInfo, that logs car details.
 *    - Add a method startEngine, that outputs to the console that engine is started
 *
 * 2. Create a class ElectricCar that inherits from Car.
 *    - Add a new property batteryLevel.
 *    - Override the displayInfo, method to also include batteryLevel, use super to call the method from parent cclass.
 *    - Call the parent class's displayInfo inside the overridden method.
 *
 * 3. Create instances of both classes and call displayInfo on them.
 *
 * 4. Call the startEngine method using both instances. Why we have access to the parent method from child class?
 */

class Car {
  constructor(brand, model, year) {
    this.brand = brand;
    this.model = model;
    this.year = year;
  }

  displayInfo() {
    console.log(
      `This is ${this.brand} ${this.model}, the year of release ${this.year}`
    );
  }

  startEngine = () => console.log("The engine has started");
}

class ElectricCar extends Car {
  constructor(brand, model, year, batteryLevel) {
    super(brand, model, year);
    this.batteryLevel = batteryLevel;
  }

  displayInfo() {
    super.displayInfo();
    console.log(`The Battery Level is ${this.batteryLevel}%`);
  }
}

const myCar = new Car("Porsche", "Boxter", 2005);
myCar.displayInfo();
myCar.startEngine();

const myElectricCar = new ElectricCar("Tesla", "Model S", 2020, 59);
myElectricCar.displayInfo();
myElectricCar.startEngine();
