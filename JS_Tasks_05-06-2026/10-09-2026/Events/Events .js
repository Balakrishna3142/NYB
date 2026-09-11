
//  EVENT LISTENER


let normalBtn = document.getElementById("normalBtn");

normalBtn.addEventListener("click", function () {
    alert("Event Listener executed!");
});


//  NORMAL EVENT


normalBtn.onclick = function () {
    console.log("Normal click event executed");
};



//  EVENT BUBBLING


let parent = document.getElementById("parent");
let child = document.getElementById("child");

parent.addEventListener("click", function () {
    console.log("Parent clicked - Bubbling");
});

child.addEventListener("click", function () {
    console.log("Child clicked");
});


// 4. EVENT CAPTURING


parent.addEventListener("click", function () {
    console.log("Parent clicked - Capturing");
}, true);



// 5. EVENT DELEGATION


let list = document.getElementById("list");

list.addEventListener("click", function (event) {

    if (event.target.tagName === "LI") {
        alert("You selected: " + event.target.textContent);
    }

});


//  DEBOUNCING


let search = document.getElementById("search");
let debounceOutput = document.getElementById("debounceOutput");

let timer;

search.addEventListener("input", function () {

    clearTimeout(timer);

    timer = setTimeout(function () {
        debounceOutput.textContent =
            "You stopped typing: " + search.value;
    }, 1000);

});


//. THROTTLING

let throttleBtn = document.getElementById("throttleBtn");
let throttleOutput = document.getElementById("throttleOutput");

let canClick = true;

throttleBtn.addEventListener("click", function () {

    if (!canClick) {
        return;
    }

    throttleOutput.textContent =
        "Button clicked at " + new Date().toLocaleTimeString();

    canClick = false;

    setTimeout(function () {
        canClick = true;
    }, 2000);

});