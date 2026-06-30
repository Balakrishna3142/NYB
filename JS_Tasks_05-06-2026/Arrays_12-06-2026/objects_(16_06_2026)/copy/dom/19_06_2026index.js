//reading dom properties
//slecting dom elements
//getElementBy ID()
//getElementBy className()
//getElementByTagName()
//queary selector
//queary selector all

console.log(document)
let h1=document.getElementById("heading")
let h4=document.getElementById("text")

//single elements with that id
console.log(h4)
console.log(h1)
//class name

let c=document.getElementsByClassName("h1")
console.log(c)
//class tag
let E=document.getElementsByTagName("h1")
console.log(E)

//querySelector
let q=document.querySelector(".h1")
console.log(q)
