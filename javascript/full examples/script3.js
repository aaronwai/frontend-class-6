// select multiple elements, NodeList
// select all the class 'item'
const  listItems = document.querySelectorAll(".item");
// from nodeList, pick up an element
//  from element, modify attribute
console.log(listItems[1].innerText);
listItems[1].style.color ="red";
// can use array forEach
listItems.forEach(node=> console.log(node));
//  modify all the nodes by forEach
listItems.forEach((item,index)=> {
    item.style.color = "red";
    if (index ==1) {
        item.remove()
    }
    if (index == 0) {
        // innText, insert string only
        item.innerText = "Bannana";
        // innerHTML, insert html
        item.innerHTML = `Bannana <button class="remove-item btn-link text-red">
                    <i class="fa-solid fa-xmark"></i>
                </button>`;
    }
})

// gwtElement(s)ByClassName - return HTMLCollections
const listItems2 = document.getElementsByClassName("item");
console.log(listItems2);
const listItemsArray = Array.from(listItems2);
listItemsArray.forEach(item=> console.log(item.innerText));

//  getElement(s)ByTagname - return HTMLCollections
const listItems3 = document.getElementsByTagName("li");
console.log(listItems3);
const listItemsArray2 = Array.from(listItems3);
listItemsArray2.forEach(item=> console.log(item.innerText));