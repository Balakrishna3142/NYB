// Create a new heading
const heading = document.createElement("h1");
heading.textContent = "Dynamic HTML Example";

// Modify the heading's style
heading.style.color = "blue";
heading.style.textAlign = "center";

// Add the heading to the webpage
document.body.appendChild(heading);


// Create a paragraph
const paragraph = document.createElement("p");
paragraph.textContent = "This paragraph was created dynamically using JavaScript.";

// Add the paragraph
document.body.appendChild(paragraph);


// Create a button
const button = document.createElement("button");
button.textContent = "Modify Content";

// Add the button
document.body.appendChild(button);


// Create another button
const deleteButton = document.createElement("button");
deleteButton.textContent = "Delete Paragraph";

document.body.appendChild(deleteButton);


// Modify an HTML element when the button is clicked
button.addEventListener("click", function () {
    paragraph.textContent = "The paragraph has been modified!";
    paragraph.style.color = "green";
    paragraph.style.fontSize = "20px";
});


// Delete an HTML element when the button is clicked
deleteButton.addEventListener("click", function () {
    paragraph.remove();
});