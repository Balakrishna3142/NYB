//web storage
//in this the data will be stors in the from of an object
//key value pairs
//set item to store the data
//remove item to remove the data 
//local and session
//1.local storage
//2.session storge



//1.local storage
localStorage.setItem("name","NYB")
console.log(localStorage.getItem("name","NYB"))
console.log(localStorage.getItem("role"))
localStorage.removeItem("role")
console.log(localStorage.getItem("role"))


//session storage
sessionStorage.setItem("name","nyb info")
console.log(sessionStorage.getItem("name"))