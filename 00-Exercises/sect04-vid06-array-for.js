const names = ["chris", "lisi", "mano", "mary"];
const lastNames = "japon";
let result = [];

for (let index = 0; index < names.length; index++) {
  result.push(`Name ${index + 1}: ${names[index]} ${lastNames}\n`);
}

console.log(result);
