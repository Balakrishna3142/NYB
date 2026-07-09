
//parent node
const para1 = document.getElementById("para1");

console.log(para1.parentElement);
//child
const container = document.getElementById("container");

console.log(container.children);
//sibling

const para1 = document.getElementById("para1");

console.log(para1.nextElementSibling);


const heading = document.createElement("h1");

heading.textContent = "Welcome to JavaScript";

document.getElementById("container").appendChild(heading);
