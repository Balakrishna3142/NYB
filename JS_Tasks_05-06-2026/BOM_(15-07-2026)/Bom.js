function showBOM() {

    alert("Window Width: " + window.innerWidth);

    console.log("Window Height: " + window.innerHeight);

}



let myWindow;

function openWindow() {
    myWindow = window.open("https://www.google.com");
}

function closeWindow() {
    myWindow.close();
}

//navigator

function browserInfo() {

    document.getElementById("result").innerHTML =
        "Browser Name: " + navigator.appName +
        "<br>Platform: " + navigator.platform +
        "<br>Language: " + navigator.language;
}
//location
function locationInfo() {

    document.getElementById("demo").innerHTML =
        "URL: " + location.href +
        "<br>Hostname: " + location.hostname +
        "<br>Path: " + location.pathname;
}
//History
function goBack() {
    history.back();
}

function goForward() {
    history.forward();
}