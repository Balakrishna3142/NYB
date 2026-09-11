// 1. Selecting element using getElementById()
let heading = document.getElementById("heading");

console.log("Using getElementById:");
console.log(heading.innerHTML);


// 2. Selecting elements using getElementsByClassName()
let messages = document.getElementsByClassName("message");

console.log("Using getElementsByClassName:");
console.log(messages[0].innerHTML);
console.log(messages[1].innerHTML);


// 3. Selecting element using querySelector()
let button = document.querySelector("#myButton");

console.log("Using querySelector:");
console.log(button.innerHTML);


// 4. Selecting elements using querySelectorAll()
let paragraphs = document.querySelectorAll(".message");

console.log("Using querySelectorAll:");

paragraphs.forEach(function(paragraph) {
    console.log(paragraph.innerHTML);
});