// Create a heading
const heading = document.createElement("h2");
heading.textContent = "Dynamic List";
document.body.appendChild(heading);

// Create input box
const input = document.createElement("input");
input.type = "text";
input.placeholder = "Enter an item";
document.body.appendChild(input);

// Create Add button
const addButton = document.createElement("button");
addButton.textContent = "Add Item";
document.body.appendChild(addButton);

// Create unordered list
const list = document.createElement("ul");
document.body.appendChild(list);

// Add item when button is clicked
addButton.addEventListener("click", function () {
    const itemText = input.value.trim();

    if (itemText === "") {
        alert("Please enter an item.");
        return;
    }

    // Create list item
    const listItem = document.createElement("li");
    listItem.textContent = itemText;

    // Create Delete button
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";

    // Add space before button
    deleteButton.style.marginLeft = "10px";

    // Delete the list item
    deleteButton.addEventListener("click", function () {
        listItem.remove();
    });

    // Add delete button to list item
    listItem.appendChild(deleteButton);

    // Add list item to the list
    list.appendChild(listItem);

    // Clear input
    input.value = "";
});