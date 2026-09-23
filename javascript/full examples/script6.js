// create html element
const div = document.createElement("div");
div.className = "my-element";
div.id = "my-element";
div.setAttribute("title", "my Element");
//  add txt inside the div html
// div.innerText = "hello World";
//  add trextnode inside the div node
const txt = document.createTextNode("hello World");
div.appendChild(txt);
document.querySelector("ul").appendChild(div);
