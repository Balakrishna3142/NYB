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

//Diference between VAR,LET,&CONST

//                     var,    let,  const
//var is a function scope 
//y var is a function scope:- it designed to belong to the entire function, not individual blocks(if,for,while)
//let is a block scope
//y let is a blocked scope:-A block is a group of statements enclosed within curly braces {},
// that creates its own scope for variables declared with let and const.
var af=3
console.log(af)
var af=5
console.log(af)
af=9
console.log(af) //we can re assing in the value

let bc=3 // we shoud not give some varible name
console.log(bc)
bc=5
console.log(bc)//we can re assigin the value 

const cd=5
console.log(cd)// we can not the change the value of a varible in const
// cd=7
 //console.log(cd)

 //Hostig
 //js code excuite in a 2 phases
 // memory creation
 //code excuite
 console.log(b)
 var b=10
 console.log(b)


 //hoisting initialization var
 var text=20
 console.log(text)
 console.log(d)//initialized with undefined
 var d=10
 //let initialization
 let f=30
 console.log(f)
// before initialization 
//  console.log(w)
//  let w=5;
//const initialization 
const v=40
console.log(v)
console.log(h)
const h=80