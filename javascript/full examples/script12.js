const clearBtn = document.querySelector("#clear");
function onClear() {
    const itemList = document.querySelector("ul");
    const items = itemList.querySelectorAll("li");
    items.forEach(item => item.remove());}
    // event listener
    //  case 1 : old method
    // clearBtn.onclick = function() {
    //     alert("clear button clicked");
    // }
    // case 2 : event listener
    // clearBtn.addEventListener("click", ()=>alert("clear Items"));
    // case 3 : event listener + callback function
    clearBtn.addEventListener("click", onClear);
    // remove event listener, delayed execution
    // setTimeout(()=>clearBtn.removeEventListener("click", onClear),5000); 
    // auto trigger click after 5 sec 
     setTimeout(()=>clearBtn.click(),10000); 
