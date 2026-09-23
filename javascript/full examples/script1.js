// basic structure of DOM
let output;
// HTML Collection
output = document.all[11];
output = document.all.length;
// complete html content, include childNodes, css classList
output = document.documentElement;
//  fetch based on tag
output = document.head;
output = document.body;
// fetch from tag to show children
output = document.head.children;
output = document.body.children;
// document's other properties
output = document.doctype;
output = document.domain;
output = document.URL;
 output = document.characterSet;
 output = document.contentType;
//  forms type
 output = document.forms
 output = document.forms[0];
 output = document.forms[0].id;
 output = document.forms[0].method;
 output = document.forms[0].action;
//  update html content
output = document.forms[0].id = "new-id";
output = document.forms[0];
// html links
output = document.links;
output = document.links[0];
output = document.links[0].href;
output = document.links[0].href = "https://facebook.com";
output = document.links[0].id = "facbook-link";
output = document.links[0];
output = document.links[0].className = "text-red";
output = document.links[0].classList;
// images
output = document.images;
output = document.images[0];
output = document.images[0].src;
// HTMLCollection convert to array
let forms = Array.from(document.forms);
console.log(forms);
forms.forEach((x)=>console.log(x));
console.log(output);