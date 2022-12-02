/**
 * *## Arrays #4

1. create "fruits" array and store some fruit values
2. setup the last item as number (random)
3. assign first fruit to the variable
4. re-assign last array item to the actual fruit
5. log both first fruit variable and entire fruits array
 */

let fruits = ["apple", "orange", "banana"];
fruits[fruits.length - 1] = 56;
let firFruit = fruits[0];
fruits[fruits.length - 1] = firFruit;

console.log(fruits);
console.log(firFruit);
