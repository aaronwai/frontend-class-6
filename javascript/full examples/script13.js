const logo = document.querySelector("img");
const onClick = () => console.log("click event");
logo.addEventListener("click", onClick);
const onDoubleClick = () => {
    if (document.body.style.backgroundColor !== "purple") {
        document.body.style.backgroundColor = "purple";
        document.body.style.color = "white";
    } else
    {
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
    }
}
logo.addEventListener("dblclick", onDoubleClick);
const onRightClick = ()=> console.log("right click")
logo.addEventListener("contextmenu", onRightClick);
const onMouseDown = ()=> console.log("mouse down")
logo.addEventListener("mousedown", onMouseDown);
const onMouseUp = ()=> console.log("mouse up")
logo.addEventListener("mouseup", onMouseUp);
const onMouseMove = ()=> console.log("mouse move")
logo.addEventListener("mousemove", onMouseMove);
const onMouseWheel = ()=> console.log("mouse wheel")
logo.addEventListener("wheel", onMouseWheel);
l
const onMouseOver = ()=> console.log("mouse over")
logo.addEventListener("mouseover", onMouseOver);
const onMouseOut = ()=> console.log("mouse out")
logo.addEventListener("mouseout", onMouseOut);

const onDragStart = ()=> console.log("drag start")
logo.addEventListener("dragstart", onDragStart);
const onDrag = ()=> console.log("drag")
logo.addEventListener("drag", onDrag);
const onDragEnd = ()=> console.log("drag end")
logo.addEventListener("dragend", onDragEnd);