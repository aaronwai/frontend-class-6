console.log(window);
console.log(window.document);
console.log(document.body);
console.log(document.links[0]);
// document.body.innerHTML = "<h1>hello</h1>";
console.log(document.body.innerText);
document.write("hello"); // write a string into html without tag
document.getElementById("main").innerHTML = "<h1>hello</h1>";
document.querySelector("#main h1").innerText = "world";