const btns = document.querySelectorAll(".btn");
btns.forEach((element) => {
  element.addEventListener("click", (e) => {
    //* currentTarget : siempre se refiere al elemento que esta llamando el evento (en este caso el botón)
    // console.log(e.currentTarget);
    // e.currentTarget.classList.toggle("cambio");
    //* target : se refiere al elemento en especifico donde esta ocurriendo el evento (es como mas especifico)
    console.log(e.target);
    e.target.classList.toggle("cambio");
  });
});
