/**
 * *## Objects #6
1. create car object
2. add make, model, year, colors (array),
   hybrid (boolean) keys
3. add two methods (drive and stop)
4. in the function body setup log with random text
5. log make
6. log first color
7. invoke both methods
 */

const Car = {
  make: "Hyundai",
  model: 2013,
  colors: ["blue", "red"],
  hybrid: true,
  drive: () => "Drive dummy text",
  stop: () => "Stop dummy text",
};

console.log(Car.make);
console.log(Car.model);
console.log(Car.colors[0]);
console.log(Car.hybrid);
console.log(Car.drive());
console.log(Car.stop());
