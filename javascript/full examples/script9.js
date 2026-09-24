// replace element
function replaceFirstItem() {
    const firstItem = document.querySelector("li:first-child");
    const li = document.createElement("li");
    li.textContent = "Replace demo";
    firstItem.replaceWith(li);
}
replaceFirstItem();
//  outerHTML : string format way to replace
function replaceSecondItem(item) {
    const secondItem = document.querySelector(`li:nth-child(${item})`);
    secondItem.outerHTML = "<li>replaced demo</li>"
}
replaceSecondItem(2);

function replaceAllItems() {
    const lis = document.querySelectorAll("li");
    lis.forEach((item,index)=>{
        // case 1
        // if (index===1) {
        //     item.innerHTML = "second item"
        // } else {
        //     item.innerHTML = "replace all demo"
        // }
        // case 2
        // item.outerHTML = "<li>Replace demo</li>"
        // case 3
        item.outerHTML = index === 1 ? "<li>second item</li>" : "<li>Replace demo</li>" 
    });
}
replaceAllItems();

// replace child
function replaceChildHeading() {
    const header = document.querySelector("header");
    const h1 = document.querySelector("header h1");
    const h2 = document.createElement("h2");
    h2.textContent = "replace child demo";
    // h1 replaced by h2
    header.replaceChild(h2,h1);
}
replaceChildHeading();