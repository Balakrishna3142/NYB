// ---------------- THROTTLING ----------------

function throttle(func, delay) {

    let lastTime = 0;

    return function () {

        let currentTime = Date.now();

        if (currentTime - lastTime >= delay) {

            lastTime = currentTime;

            func();
        }
    };
}


function throttleMessage() {

    console.log("Throttling executed");

    document.getElementById("output").innerHTML =
        "Throttling executed";
}


let throttleButton = document.getElementById("throttleBtn");

throttleButton.addEventListener(
    "click",
    throttle(throttleMessage, 2000)
);


// ---------------- DEBOUNCING ----------------

function debounce(func, delay) {

    let timer;

    return function () {

        clearTimeout(timer);

        timer = setTimeout(function () {

            func();

        }, delay);
    };
}


function debounceMessage() {

    console.log("Debouncing executed");

    document.getElementById("output").innerHTML =
        "Debouncing executed";
}


let searchBox = document.getElementById("search");

searchBox.addEventListener(
    "input",
    debounce(debounceMessage, 1000)
);