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

const form = document.getElementById("item-form");
function onSubmit(e) {
    const item = document.getElementById("item-input").value;
    const priority = document.getElementById("priority-input").value;
    if (item === "" || priority === "0") {
        alert("please fill in fields");
    }
    e.preventDefault();
}
form.addEventListener("submit", onSubmit2);
function onSubmit2(e) {
    e.preventDefault();
    const formData = new FormData(form);
    const item = formData.get("item");
    const priority = formData.get("priority");
    const entries = formData.entries();
    console.log(entries);
    for (let entry of entries) {
        console.log(entry[1]);
    }

}