//for in loop
//Print Object Keys
const person = {
  name: "balakrishna",
  age: 25,
  city: "Hyderabad"
};

for (let key in person) {
  console.log(key);
}

  

//date
let d= new Date()
console.log(d)
//template string
var k=10
var i=20
    console.log("the value of a is :",k," the value of b is:",i,"and their sum is: ",k+i)
    console.log(`the value of a is ${k} the value of B is ${i} and their sum is ${k+i}`)

    //math oject
    var ab=10
    var bc=10.7
    console.log(Math.floor(bc))
    console.log(Math.ceil(bc))
    console.log(Math.round(bc))
    console.log(Math.floor(Math.random()*2000))

    // string
    let s="Bala"
console.log(s.length)
//string object methods
//length
const str = "JavaScript";
//length
console.log(str.length);
// slice
console.log(str.slice(0, 4));
//sub string
console.log(str.replace("Bala","js"));