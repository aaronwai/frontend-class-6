// with css
const text = document.querySelector("h1");
const itemList = document.querySelector("#item-list");
const items = itemList.querySelectorAll("li");

function run() {
    console.log(itemList.className);
    text.className = "text-red";
    // print the element css classes
    // classList keeps all the css classes
    console.log(itemList.classList);
    itemList.classList.forEach(c=>console.log(c));
    text.classList.add("big");
   console.log(text.classList); 
   text.classList.remove("text-red");
//    replace(init, final)
    text.classList.replace("big", "medium");
     text.classList.toggle("hidden");

}
document.querySelector("#clear").onclick = run;