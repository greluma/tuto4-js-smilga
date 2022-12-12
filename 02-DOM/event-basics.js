//* 2 Main Steps:
//* 1: Select element
//* 2: addEventListener(whatEvent, whatToDo)

const btn = document.querySelector(".btn");
const mainH1 = document.querySelector("h1");
console.log(btn);
console.log(mainH1);
btn.addEventListener("click", () => {
  console.log(`don't click me`);
  mainH1.classList.toggle("blue");
});
