const people = [
  {
    name: "Mari",
    age: 19,
    position: "student",
    toString() {
      return `|${this.name} ${this.age} ${this.position}|`;
    },
  },
  {
    name: "Chris",
    age: 26,
    position: "chef",
    toString() {
      return `|${this.name} ${this.age} ${this.position}|`;
    },
  },
  {
    name: "Mano",
    age: 24,
    position: "developer",
    toString() {
      return `|${this.name} ${this.age} ${this.position}|`;
    },
  },
];
//*no retorna un nuevo array
const showItem = (item) => console.log(item.position.toUpperCase());
people.forEach(showItem);

//*vsc shortcut
people.forEach((element) => {
  console.log(element.toString());
});
