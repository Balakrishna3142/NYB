//functions //function declaration 
function add (a,b){

    console.log (a+b)
}
add(1,2)

function add (a,b){
 return("hello")
    console.log (a+b)
    
}
let result = add(1,2)
console.log(result)

//parameters

function hello (a=10,b=10){
    console.log(a,b)
}
 hello (1, undefined)

 //varying parameters
  function varying(a=10,b,c,d,...f){

  
    console.log(a,b,c,d)
    console.log(arguments)
    console.log(f)
  
    }

 varying( undefined,2,3,4,5,6,7,8,9,10)

//function expression 3 typs 
// named function
//anonymous function
//arrow function

//1.named function
let a=function hello(){
    console.log("hii")
}

 a()

 //2.anonymous function 
 let mul =function(a,b){
    return a*b
 }
console.log(mul(5,4))

//arrow function
const sub=(a,b)=>{
    return a-b
}
console.log(sub(20,5))

//Recursive Functions
function num(n){
    if (n>5){
        return

    }
    console.log(n)
    num(n+1)
}
num(1)