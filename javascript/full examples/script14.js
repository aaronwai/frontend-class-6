// event object
/* target
    currentTarget
    type
    timeStamp
    clientX clientY
    offsetX offsetY
    pageX pageY
    screenX screenY
  */
 const logo = document.querySelector("img");
 logo.addEventListener("click", e=> {
    console.log(e); console.log(e.currentTarget);
    console.log(e.target);
    e.target.style.backgroundColor = "red";
    console.log(e.type);
    console.log(e.timeStamp);
    console.log(e.clientX);  // relative to the window
    console.log(e.clientY);
    console.log(e.offsetX); // relative to the element
    console.log(e.offsetY);
    console.log(e.pageX);
    console.log(e.pageY);
    console.log(e.screenX);
    console.log(e.screenY);
 })

 document.querySelector("a").addEventListener("click", e=> {
    e.preventDefault();
    console.log(e);
 })
 logo.addEventListener("drag", e=> {
    document.querySelector("h1").textContent = `X ${e.clientX} Y ${e.clientY}`
 })