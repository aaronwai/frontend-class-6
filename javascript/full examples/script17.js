const form = document.querySelector("form");
const button = document.querySelector("form button");
const div = document.querySelector("form div:nth-child(1)");
button.addEventListener("click", (e) => {
    alert("button clicked");
    e.stopPropagation();
});
div.addEventListener("click", (e) => {
    alert("div clicked");
});
form.addEventListener("click", (e) => {
    alert("form clicked");
});
document.body.addEventListener("click", ()=> {
    alert("body clicked");
})