const container = document.getElementById("buttons");
const output = document.getElementById("output");

// Event delegation
container.addEventListener("click", function(event) {

    // Check whether the clicked element is a button
    if (event.target.tagName === "BUTTON") {

        output.textContent = event.target.textContent + " clicked";

        console.log(event.target.textContent + " clicked");
    }
});