const button = document.querySelector("#button");
const h1= document.querySelector("h1");
button.addEventListener('click', ()=> {
    document.body.classList.toggle('dark');
    h1.classList.toggle("yellow");
});