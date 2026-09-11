function addItem() {


    let newItem = document.createElement("li");

    
    newItem.innerHTML = "Mango";

    document.getElementById("myList").appendChild(newItem);
}


function removeItem() {

    
    let list = document.getElementById("myList");

    
    if (list.lastElementChild) {
        list.removeChild(list.lastElementChild);
    }
}