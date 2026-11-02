
 //  Select elements using different DOM methods

const heading = document.getElementById("heading");
const message = document.querySelector(".message");
const buttons = document.querySelectorAll("button");

//  Change text content
document.getElementById("changeBtn").addEventListener("click", function () {
    const name = document.getElementById("username").value;

    heading.textContent = name
        ? "Hello, " + name + "!"
        : "Hello, World!";

    message.textContent = "Text changed successfully!";
});

//. Change CSS styles
document.getElementById("styleBtn").addEventListener("click", function () {
    heading.style.color = "blue";
    heading.style.backgroundColor = "lightyellow";
    heading.style.fontSize = "35px";
});

//  Create and append a new element
document.getElementById("addBtn").addEventListener("click", function () {
    const newParagraph = document.createElement("p");

    newParagraph.textContent = "New paragraph added!";
    newParagraph.className = "new-item";

    document.getElementById("container").appendChild(newParagraph);
});

//  Remove an element
document.getElementById("removeBtn").addEventListener("click", function () {
    const item = document.querySelector("#container p");

    if (item) {
        item.remove();
    } else {
        alert("No element to remove!");
    }
});

// 6. Display the number of buttons in the console
console.log("Number of buttons:", buttons.length);
