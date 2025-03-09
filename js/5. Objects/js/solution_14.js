/** TASK - Creating and Modifying an Object
 *
 * 1. Create an object "car" with properties: brand, doorsNum, and price.
 *
 * 2. Output the object to the console.
 *
 * 3. Add a new property "color" with any value and output the updated object.
 *
 * 4. Modify the "price" property to a new value and output the updated object.
 *
 * 5. Delete the "model" property and output the final object.
 */

const car = {
  brand: "Toyota",
  doorsNum: 4,
  price: 10000,
};

console.log("Initial object:", car);

car.color = "Red";
console.log("After adding color:", car);

car.price = 15000;
console.log("After modifying price:", car);

delete car.doorsNum;
console.log("After deleting model:", car);
