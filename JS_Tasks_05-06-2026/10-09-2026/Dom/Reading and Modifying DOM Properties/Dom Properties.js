function modifyDOM() {

    // Selecting the elements
    let heading = document.getElementById("heading");
    let message = document.getElementById("message");
    let name = document.getElementById("name");

    // Reading DOM properties
    console.log("Heading:", heading.innerHTML);
    console.log("Message:", message.innerHTML);
    console.log("Name:", name.value);

    // Modifying DOM properties
    heading.innerHTML = "DOM Properties";
    message.innerHTML = "The DOM has been modified!";
    name.value = "JavaScript";

    
    heading.style.color = "yellow";
}