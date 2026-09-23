//  create element block 
function createListItem(item) {
// const li = <li>${item}</li>
    const li = document.createElement("li");
    li.innerHTML = `${item}   <button class="remove-item btn-link text-red">
                    <i class="fa-solid fa-xmark"></i>
                </button>`;
                document.querySelector(".items").appendChild(li);
    
}
createListItem("cheese");
function createNewItem(item) {
    // step 1 : create element
    const li = document.createElement("li");
    // step 2: create text node
    // step 3: append text node to element
    li.appendChild(document.createTextNode(item));
    //  step 4 : create buttom element
    const button = document.createElement("button");
    button.className = "remove-item btn-link text-red";
    const icon = document.createElement("i"); 
    icon.className = "fa-solid fa-xmark";
    // step 5 : append itemd one by one
    button.appendChild(icon);
    li.appendChild(button);
    document.querySelector(".items").appendChild(li);
}
createNewItem("milk");
// refactor createNewItem by separate button 
function new_createNewItem(item) {
    const li = document.createElement("li");
    li.appendChild(document.createTextNode(item));
    const button = createButton("remove-item btn-link text-red");
    li.appendChild(button);
    document.querySelector(".items").appendChild(li);
}
function createButton(classes) {
   const button = document.createElement("button");
    button.className = classes; 
    const icon = createIcon("fa-solid fa-xmark");
    button.appendChild(icon);
    return button;
}
function createIcon(classes) {
    const icon = document.createElement("i"); 
    icon.className = classes;
    return icon;
}
new_createNewItem("pineapple");