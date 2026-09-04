const button = document.getElementById("addButton");
const container = document.getElementById("container");

button.addEventListener("click", function () {

    // Create a new paragraph element
    const paragraph = document.createElement("p");

    // Add text to the paragraph
    paragraph.textContent = "This paragraph was created dynamically!";

    // Add the paragraph to the container
    container.appendChild(paragraph);
});