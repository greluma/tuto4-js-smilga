/**
 * *## Functions #5

1. create "calculateTotal" function
2. add two parameters subTotal, tax
3. return sum of parameters
4. create 3 vars "order1","order2","order3"
5. call calculateResult, pass in some values and assign result to each order
6. log all three orders
7. refactor "calculateTotal" to function expression
 */

const CALC_TOT = (a, b) => a + b;
let list_ord = [CALC_TOT(12, 13), CALC_TOT(4, 5), CALC_TOT(10, 10)];
cont = 1;
for (const iterator of list_ord) {
  console.log(`Orden: ${cont} Valor: ${iterator}`);
  cont++;
}
