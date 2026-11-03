
const output = document.getElementById("output");

function log(message) {
    output.textContent += message + "\n";
}

function clearOutput() {
    output.textContent = "";
}

//  Synchronous JavaScript
function syncExample() {
    clearOutput();

    log("First");
    log("Second");
    log("Third");

    log("Finished");
}

//  Asynchronous JavaScript
function asyncExample() {
    clearOutput();

    log("Start");

    setTimeout(() => {
        log("Hello after 2 seconds");
    }, 2000);

    log("End");
}

//  Call Stack
function stackExample() {
    clearOutput();

    function first() {
        log("First function started");
        second();
        log("First function ended");
    }

    function second() {
        log("Second function started");
        third();
        log("Second function ended");
    }

    function third() {
        log("Third function executed");
    }

    first();
}

// Web APIs
function webApiExample() {
    clearOutput();

    log("Timer started");

    setTimeout(() => {
        log("Timer completed!");
    }, 2000);

    log("JavaScript continues...");
}

//  Callback Functions
function callbackExample() {
    clearOutput();

    function greet(name, callback) {
        log("Hello " + name);

        callback();
    }

    function message() {
        log("Welcome to JavaScript!");
    }

    greet("John", message);
}

// 6. Event Loop
function eventLoopExample() {
    clearOutput();

    log("A - Synchronous");

    setTimeout(() => {
        log("B - Callback Queue");
    }, 0);

    log("C - Synchronous");

    Promise.resolve().then(() => {
        log("D - Promise Microtask");
    });
}

// 7. Callback Hell
function callbackHellExample() {
    clearOutput();

    setTimeout(() => {
        log("Step 1 completed");

        setTimeout(() => {
            log("Step 2 completed");

            setTimeout(() => {
                log("Step 3 completed");
            }, 1000);

        }, 1000);

    }, 1000);
}
