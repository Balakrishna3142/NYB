// Change HTML content
function changeContent() {
    document.getElementById("heading").innerHTML = "DOM Manipulation";
    document.getElementById("message").innerHTML =
        "The content has been changed using JavaScript!";
}

// Change CSS style
function changeStyle() {
    document.getElementById("heading").style.color = "blue";
    document.getElementById("heading").style.fontSize = "40px";
}

// Create and add a new element
function addElement() {
    let newElement = document.createElement("p");

    newElement.innerHTML = "New paragraph added using DOM!";
    
    document.body.appendChild(newElement);
}