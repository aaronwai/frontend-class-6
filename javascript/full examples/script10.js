// remove element
function removeClearButton() {
    const clearBtn = document.querySelector("#clear");
    clearBtn.remove();
}
removeClearButton();

function removeFirstItem() {
    const ul = document.querySelector("ul");
    const firstItem = document.querySelector("li:first-child");
    ul.removeChild(firstItem);
}
removeFirstItem();
// remove child application
function removeItem(itemNumber) {
    const ul = document.querySelector("ul");
    // case 1
    // const li = document.querySelector(`li:nth-child(${itemNumber})`);
    // case 2 
    // const li = document.querySelectorAll("li")[itemNumber-1];
    // ul.removeChild(li);
    // case 3 
    // const li = document.querySelectorAll("li")[itemNumber-1].remove();
    // case 4
    document.querySelectorAll("li")[itemNumber-1].remove();
}
removeItem(2);