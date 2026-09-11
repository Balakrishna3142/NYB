function showInfo() {

    let result = "";

    // Window object
    result += "Window Width: " + window.innerWidth + "<br>";
    result += "Window Height: " + window.innerHeight + "<br>";

    // Location object
    result += "Current URL: " + window.location.href + "<br>";

    // Navigator object
    result += "Browser: " + navigator.userAgent + "<br>";

    // Screen object
    result += "Screen Width: " + screen.width + "<br>";
    result += "Screen Height: " + screen.height + "<br>";

    document.getElementById("output").innerHTML = result;
}