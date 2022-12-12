/*
innerWidth - The read-only Window property the interior width of the window in pixels

innerHeight - The read-only property of the Window interface returns the interior height of the window in pixels

The Element.getBoundingClientRect() method returns a DOMRect object providing information about the size of an element and its position relative to the viewport.

 */

/*setInterval(() => {
  console.log(`Height: ${window.innerHeight}px`);
  console.log(`Width: ${window.innerWidth}px`);
}, 5000);*/

//* obtener información de tamaño y posición de un elemento a traves del método element.getBoundingClientRect()
const btn = document.querySelector(".btn");
// console.log(btn);
const container = document.querySelector(".container");
btn.addEventListener("click", () => {
  console.log(container.getBoundingClientRect());
});
