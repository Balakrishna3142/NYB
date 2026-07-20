//dom
//document object model
// it will attach the document in theformfor a tree structure
//html
//head (meta tags and title ) body header(navigation) section (header) main (content) footer (copyright)
// reading dom properties

//selecting dom elements

//getElementById    //single element with id

//getElementsByClassName  //in the form of an array []

//getElementsByTagName

//querySelector

//querySelectorAll

console.log(document)
let h1 = document.getElementById("heading")
let h4 = document.getElementById("text")
console.log(h4)
console.log(h1)

let c = document.getElementsByClassName("text")
console.log(c)

let E = document .getElementsByTagName("h1")
console.log(E)


let q=document.querySelector("#heading")
console.log(q)


let all= document.querySelectorAll(".box");
console.log(all.length); 


    const secondStudent = document.querySelectorAll("#students li")[1];

    // Parent Node
    console.log("Parent:", secondStudent.parentElement);

    // Child Nodes
    const list = document.getElementById("students");
    console.log("First Child:", list.firstElementChild.textContent);
    console.log("Last Child:", list.lastElementChild.textContent);

    // Sibling Nodes
    console.log("Previous Sibling:", secondStudent.previousElementSibling.textContent);
    console.log("Next Sibling:", secondStudent.nextElementSibling.textContent);



    let button = document.createElement("button");
button.textContent = "Click Me";

button.onclick = function () {
    alert("Button clicked!");
};

document.body.appendChild(button);

// add and remove elements from the dom
let container = document.getElementById("container")
let newPara = document.createElement("p");
newPara.id = "myPara";
newPara.textContent = "This is a new paragraph."
container.appendChild(newPara)

let para = document.getElementById("myPara")

if (para) {
    container.removeChild(para);
}





















