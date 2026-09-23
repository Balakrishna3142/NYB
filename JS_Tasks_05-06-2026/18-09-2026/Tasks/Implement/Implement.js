// 1. CLICK EVENT
document.getElementById("btn").addEventListener("click", function() {
    document.getElementById("clickOutput").innerHTML =
        "Button clicked!";
});


// 2. INPUT EVENT
document.getElementById("name").addEventListener("input", function() {
    document.getElementById("inputOutput").innerHTML =
        "You entered: " + this.value;
});


// 3. CHANGE EVENT
document.getElementById("course").addEventListener("change", function() {
    document.getElementById("changeOutput").innerHTML =
        "Selected course: " + this.value;
});


// 4. MOUSE EVENT
document.getElementById("box").addEventListener("mouseover", function() {
    document.getElementById("mouseOutput").innerHTML =
        "Mouse is over the box!";
});

document.getElementById("box").addEventListener("mouseout", function() {
    document.getElementById("mouseOutput").innerHTML =
        "Mouse left the box!";
});


// 5. KEYBOARD EVENT
document.getElementById("keyBox").addEventListener("keydown", function(event) {
    document.getElementById("keyOutput").innerHTML =
        "You pressed: " + event.key;
});


// 6. SUBMIT EVENT
document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault();

    document.getElementById("submitOutput").innerHTML =
        "Form submitted successfully!";
});