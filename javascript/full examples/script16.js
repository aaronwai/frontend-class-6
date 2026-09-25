// input event
const itemInput = document.getElementById("item-input");
const priorityInput = document.getElementById("priority-input");
const checkbox = document.getElementById("checkbox");
const heading = document.querySelector("h1");

function onInput(e) {
    heading.textContent = e.target.value;
}
itemInput.addEventListener("input", onInput);
priorityInput.addEventListener("change", onInput);

function onChecked(e) {
    const isChecked = e.target.checked;
    heading.textContent = isChecked ? "checked" : "unchecked";
}
checkbox.addEventListener("input", onChecked);
function onFocus() {
    itemInput.style.outlineStyle = "solid";
    itemInput.style.outlineColor = "red";
    itemInput.style.outlineWidth = "2px";
}

function onBlur() {
    itemInput.style.outlineStyle = "none";
}
itemInput.addEventListener("focus", onFocus);
itemInput.addEventListener("blur", onBlur);