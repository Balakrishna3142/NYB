
"use strict";

//  CLICK EVENT
document.getElementById("btn").addEventListener("click", function () {
    alert("Button clicked!");
});

// . INPUT EVENT
document.getElementById("inputBox").addEventListener("input", function (e) {
    document.getElementById("preview").textContent = e.target.value;
});

//  CHANGE EVENT
document.getElementById("color").addEventListener("change", function (e) {
    document.body.style.backgroundColor = e.target.value || "#f0f4f8";
});

//  SUBMIT EVENT
document.getElementById("myForm").addEventListener("submit", function (e) {
    e.preventDefault();
    const name = document.getElementById("name").value;
    alert("Hello, " + name);
});

//  KEYBOARD EVENT
document.getElementById("keyBox").addEventListener("keydown", function (e) {
    console.log("Key pressed:", e.key);
});

//  MOUSE EVENTS
const box = document.getElementById("box");

box.addEventListener("mouseover", function () {
    box.textContent = "Mouse entered!";
});

box.addEventListener("mouseout", function () {
    box.textContent = "Mouse left!";
});

box.addEventListener("click", function () {
    alert("Mouse clicked!");
});

// 7. EVENT OBJECT
document.getElementById("eventBtn").addEventListener("click", function (e) {
    console.log("Event type:", e.type);
    console.log("Event target:", e.target);
    console.log("Current target:", e.currentTarget);
    alert("Event type: " + e.type);
});

// 8. EVENT BUBBLING
document.getElementById("parent").addEventListener("click", function () {
    console.log("Parent clicked (bubbling)");
});

document.getElementById("child").addEventListener("click", function () {
    console.log("Child clicked (bubbling)");
});

// 9. EVENT CAPTURING
document.getElementById("captureParent").addEventListener("click", function () {
    console.log("Parent capturing");
}, true);

document.getElementById("captureChild").addEventListener("click", function () {
    console.log("Child clicked during capturing example");
});

// 10. EVENT DELEGATION
document.getElementById("list").addEventListener("click", function (e) {
    if (e.target.matches("button")) {
        alert("You selected " + e.target.textContent);
    }
});

// 11. preventDefault()
document.getElementById("link").addEventListener("click", function (e) {
    e.preventDefault();
    alert("Default link action prevented!");
});

// 12. stopPropagation()
document.getElementById("stopParent").addEventListener("click", function () {
    console.log("Parent clicked");
});

document.getElementById("stopChild").addEventListener("click", function (e) {
    e.stopPropagation();
    alert("Child clicked; parent event stopped!");
});
