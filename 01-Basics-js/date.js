const dias = ["Dom", "Lun", "Mar", "Mier", "Jue", "Vier", "Sab"];
const mes = [
  "Ene",
  "Feb",
  "Mar",
  "Abr",
  "May",
  "Jun",
  "Jul",
  "Ago",
  "Sept",
  "Oct",
  "Nov",
  "Dic",
];

//* fecha actual con formato bonito
const date = new Date();
console.log(dias[date.getDay()]);
console.log(mes[date.getMonth()]);
console.log(date.getDate());
console.log(date.getFullYear());

//* fecha antigua
const ayer = new Date("12/05/2022");
console.log(ayer);
