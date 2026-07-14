//Event bubbling
//capturing
//deligation


let child=document.getElementById("innertext")
function action(){
    console.log("inner h1 clicked")
}
child.addEventListener("click", action)
let parent =document.getElementById("outertext")
function action1(){
    console.log("outer text ")}
parent.addEventListener("click", action1)


let list=document.getElementById("list")
function list click(){
    console.log("clicked")

}

list.addEventListener("click", function(e){
    console.log(e.target.innerText)
    
})