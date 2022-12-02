/**
 * *## Conditional Statements #7

1. create two objects "person1", "person2"
2. setup name,age (15-25),
   status ('resident', 'tourist') keys

3. setup if else, condition where
   age must be bigger than 18 and status must be
   equal to 'resident'
4. test with both objects
 */

class Person {
  constructor(name, age, status) {
    this._name = name;
    this._age = age;
    this._status = status;
  }

  get name() {
    return this._name;
  }
  get age() {
    return this._age;
  }
  get status() {
    return this._status;
  }
  conditions() {
    if (this._age < 18 || this._status != "resident") {
      return "wrong";
    } else {
      return "fine";
    }
  }
}

const person1 = new Person("mano", 18, "resident");
const person2 = new Person("lulu", 15, "resident");

console.log(person1.conditions());
console.log(person2.conditions());
