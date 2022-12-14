//* Referencias
const counter = document.querySelector(".counter");
const increase = document.querySelector("#increase");
const decrease = document.querySelector("#decrease");
const reset = document.querySelector("#reset");

//* Variables Generales
counter.classList.add("blue");

//* Funcionalidades

function colors() {
  counter.classList = ["counter"];
  if (counter.textContent < 0) {
    counter.classList.add("red");
    increase.classList.add("increase");
  }
  if (counter.textContent == 0) {
    counter.classList.add("blue");
    increase.classList.remove("increase");
  }
  if (counter.textContent > 0) {
    increase.classList.remove("increase");
    counter.classList.add("green");
  }
}

function increaseF() {
  counter.textContent = parseInt(counter.textContent) + 1;
  colors();
}
function decreaseF() {
  counter.textContent = parseInt(counter.textContent) - 1;
  colors();
}

function resetF() {
  counter.textContent = 0;
  colors();
}

//* Listeners
increase.addEventListener("click", increaseF);

decrease.addEventListener("click", decreaseF);

reset.addEventListener("click", resetF);
