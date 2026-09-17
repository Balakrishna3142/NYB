// 1. Event Listener
const button = document.getElementById("child");

button.addEventListener("click", function () {
    console.log("1. Event Listener: Button clicked");
});


// 2. Event Object
button.addEventListener("click", function (event) {
    console.log("2. Event Object: " + event.type);
});


// 3. Event Bubbling
const parent = document.getElementById("parent");

parent.addEventListener("click", function () {
    console.log("3. Event Bubbling: Parent clicked");
});


// 4. Event Capturing
parent.addEventListener("click", function () {
    console.log("4. Event Capturing: Parent captured event");
}, true);


// 5. Event Delegation
parent.addEventListener("click", function (event) {
    if (event.target.tagName === "BUTTON") {
        console.log("5. Event Delegation: Button handled by parent");
    }
});


// 6. Event Binding
button.onclick = function () {
    console.log("6. Event Binding: onclick executed");
};


// 7. Throttling
let lastTime = 0;

window.addEventListener("scroll", function () {

    let currentTime = Date.now();

    if (currentTime - lastTime >= 1000) {
        console.log("7. Throttling: Scroll event");
        lastTime = currentTime;
    }

});


// 8. Debouncing
let timer;

const search = document.getElementById("search");

search.addEventListener("input", function () {

    clearTimeout(timer);

    timer = setTimeout(function () {
        console.log("8. Debouncing: " + search.value);
    }, 500);

});