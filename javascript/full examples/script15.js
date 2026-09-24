const itemInput = document.getElementById("item-input");
const onKeyPress = e=> console.log("keypress");
itemInput.addEventListener("keypress", onKeyPress);
const onKeyUp = e=> console.log("key up");
itemInput.addEventListener("keyup", onKeyUp);
const onKeyDown = e=> {
    // keyCode
    if (e.keyCode ==13 ) {alert("enter key")}
// code
    if (e.code == "Digit1") {alert("enter 1")}
    // repeat
    if (e.repeat) {
        console.log("repeat" + e.key);
    }
    console.log("shift" + e.shiftKey);
     console.log("control" + e.ctrlKey);
      console.log("Alt" + e.altKey);
if (e.shiftKey && e.key === "K")
{
    alert("pressed shift + K");
}
}
itemInput.addEventListener("keydown", onKeyDown);