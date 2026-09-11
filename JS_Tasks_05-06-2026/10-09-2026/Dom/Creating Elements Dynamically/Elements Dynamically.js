// Create a new paragraph element
let paragraph = document.createElement("p");

// Add text to the paragraph
paragraph.innerHTML = "This paragraph is created dynamically using JavaScript.";

// Add the paragraph to the container
let container = document.getElementById("container");
container.appendChild(paragraph);


// Create a new heading element
let heading = document.createElement("h2");

// Add text to the heading
heading.innerHTML = "Welcome to JavaScript DOM";

// Add the heading to the container
container.appendChild(heading);


// Create a new button
let button = document.createElement("button");

// Add text to the button
button.innerHTML = "Click Me";

// Add the button to the container
container.appendChild(button);