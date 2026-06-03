//functions 
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