
let intervalId = null;
let count = 0;

// Common function to display output
function showOutput(message) {
    document.getElementById("output").textContent = message;
}

//  WINDOW OBJECT
function showWindow() {
    let message =
        "Window Information\n" +
        "Browser width: " + window.innerWidth + "px\n" +
        "Browser height: " + window.innerHeight + "px\n" +
        "Window object represents the browser window.";

    showOutput(message);
}

//. DOCUMENT OBJECT
function changeDocument() {
    document.getElementById("message").textContent =
        "Text changed using the document object!";

    showOutput("document.getElementById() selected an HTML element.");
}

//  LOCATION OBJECT
function showLocation() {
    showOutput(
        "Current URL: " + window.location.href + "\n" +
        "Hostname: " + window.location.hostname + "\n" +
        "Path: " + window.location.pathname
    );
}

function reloadPage() {
    window.location.reload();
}

// 4. HISTORY OBJECT
function goBack() {
    window.history.back();
}

function goForward() {
    window.history.forward();
}

// 5. setTimeout()
function startTimeout() {
    showOutput("Wait for 3 seconds...");

    setTimeout(function () {
        showOutput("Hello! 3 seconds have passed.");
    }, 3000);
}

// 6. setInterval()
function startInterval() {
    if (intervalId !== null) {
        showOutput("Counter is already running!");
        return;
    }

    intervalId = setInterval(function () {
        count++;

        document.getElementById("counter").textContent = count;

        showOutput("Counter running: " + count);
    }, 1000);
}

// Stop the interval
function stopInterval() {
    if (intervalId !== null) {
        clearInterval(intervalId);
        intervalId = null;
        showOutput("Counter stopped at " + count);
    } else {
        showOutput("Counter is not running.");
    }
}
