//iterators
//for in keys returns

//for of values returns

//arrays  in use for off

//objects in use  for in

let a=[2,3,4,5]
for (i in a){
    console.log(i)
}

//current value and done state

let num=[1,2,3]
let k=num[Symbol.iterator]()
console.log(k.next())
console.log(k.next())


//Generators

function* hai(){
  yield "hello";
yield "bye";
yield "done";  
}

let n=hai()
console.log(n.next())
console.log(n.next())
console.log(n.next())
console.log(n.next())
