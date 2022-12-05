const gas = [20, 40, 100];
const food = [10, 40, 50];

const total = (array) => {
  let result = 0;
  for (let i = 0; i < array.length; i++) {
    result += array[i];
  }
  if (result > 100) {
    console.log("gastas mucho papi");
  } else {
    console.log("estas bien papi");
  }
  return result;
};

let totalGas = total(gas);
let totalFood = total(food);
let totalMonth = total([totalFood, totalGas]);
const gastos = {
  Gas: totalGas,
  Food: totalFood,
  Total: totalMonth,
};

console.log(gastos);
