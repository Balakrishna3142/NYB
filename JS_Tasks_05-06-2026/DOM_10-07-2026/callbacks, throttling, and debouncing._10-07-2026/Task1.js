function greet(callback) {
    console.log("Hello");
    callback();
}

function showMessage() {
    console.log("Welcome to NYB.");
}

document.getElementById("btn").addEventListener("click", function () {
    greet(showMessage);
});