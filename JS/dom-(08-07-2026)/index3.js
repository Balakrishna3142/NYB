//button click event
let btn=document.getElementById("btn")
console.log(btn)
btn.onclick=function(){
    console.log("button clicked")

}


//add event listener


function click(){
    alert("Button CLicked")

}
btn.addEventListener("click", click)
function clickHandler(){
    alert("button clcicked")
    btn.innerText="button clicked"
}


btn.addEventListener("click", click)
