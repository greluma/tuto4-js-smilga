/**
 * *## Numbers #3

1. create "score1", "score2", "score3" variables and
   assign values (0-100)
2. calculate total score and average score, and assign them to the variables.
3. log total score and average score
4. create "plates" variable and assign 20
5. create "people" variable and assign 7
6. calculate remaining plates and assign to the variable
7. add one to remaining plates
8. create message variable and display 'There are (your value goes here) plates available' - string concatenation
9. log message
 */

let score1 = 34;
let score2 = 22;
let score3 = 10;
let total = score1 + score2 + score3;
let average = total / 3;
//---------------------------//
let plates = 20;
let people = 7;
let remPlat = plates % people;
remPlat++;
let resp = `Total Score: ${total} Average Score: ${average}\nThere are ${remPlat} plates available`;
console.log(resp);
