// insert element
function insertElement() {
    const filter = document.querySelector(".filter");
    const h1 = document.createElement("h1");
    h1.textContent = "insertAdjustElement";
    h1.className ="text-red";
    h1.style.backgroundColor = "blue";
    // insertAdjacent Element
    filter.insertAdjacentElement("beforebegin", h1);
    filter.insertAdjacentElement("afterend", h1);
}

insertElement();
function insertText() {
    const item= document.querySelector("li:first-child");
    // insertAdjacent Text
    item.insertAdjacentText("afterbegin", "insertAdjentText");
    item.insertAdjacentText("beforeend", "insertAdjentText");
}
insertText();
// example application
function insertHTML () {
    const clearBtn = document.querySelector("#clear");
    clearBtn.insertAdjacentHTML("beforebegin", "<h2>insertAdjustHTML</h2>")
     clearBtn.insertAdjacentHTML("afterend", "<h2>insertAdjustHTML</h2>")
}
insertHTML();

function insertBeforeItem() {
    const ul = document.querySelector("ul");
    const li = document.createElement("li");
    li.textContent = "insertBefore demo";
    const thirdItem = document.querySelector("li:nth-child(3)");
    // from parent, insert li before third child
    ul.insertBefore(li, thirdItem);
}
insertBeforeItem();

function insertAfter(newEl, existingEl) {
    existingEl.parentElement.insertBefore(newEl, existingEl.nextSibling);
}
    const li = document.createElement("li");
    li.textContent = "insert after demo";
    const thirdItem = document.querySelector("li:nth-child(4)");

insertAfter(li, thirdItem);