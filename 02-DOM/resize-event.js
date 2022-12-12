/**
 * * The resize event fires when the document view (window) has been resized
 */

window.addEventListener("resize", () => {
  console.log(`Width: ${window.innerWidth}`);
  console.log(`Height: ${window.innerHeight}`);
});
