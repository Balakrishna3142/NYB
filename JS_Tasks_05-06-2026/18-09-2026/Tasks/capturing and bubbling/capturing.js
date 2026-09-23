// Event Capturing
document.getElementById("parent").addEventListener("click", function () {
    console.log("Parent - Capturing");
}, true);

// Target
document.getElementById("child").addEventListener("click", function () {
    console.log("Button - Target");
});

// Event Bubbling
document.getElementById("parent").addEventListener("click", function () {
    console.log("Parent - Bubbling");
});