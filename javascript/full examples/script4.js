// traversing dom elements
let output;
//  a get child elements from parent - htmlcollection
const parent = document.querySelector(".container");
output = parent.children;
output = parent.children[1].innerText;
output = parent.children[1].className;
output = parent.children[1].nodeName;
output = parent.firstElementChild;
output = parent.lastElementChild;
// from child to parent
const child = document.querySelector(".item");
output = child.parentElement;
second = child.nextElementSibling;
output = second.nextElementSibling;
output = second.previousElementSibling;
output = child.previousElementSibling; // null
console.log(output);