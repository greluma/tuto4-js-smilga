const liToRepl = document.querySelector(".class1");
console.log(liToRepl.innerHTML);

const newLi = document.createElement("ul");
document.querySelector("div").appendChild(newLi);
newLi.innerHTML = `
${liToRepl.innerHTML} 
<li>Li 4</li>
<li>Li 5</li>
<li>Li 6</li>
`;
