//Destructring
let a=["balakrishna",2,3,4,5]
let [A,B,C]=a
console.log(a[0])
console.log(a[1])
console.log(a[2])
console.log(A,B,C) 


// object Destructring

let obj={name:"pavankrishna",location:"hyd"}
console.log(obj.name)
var M=(obj.name)
console.log(M)

//iterators

for(i in a){
 console.log(i) 

}
let num=[1,2,3]
let k=num[Symbol.iterator]()
console.log(k.next())
console.log(k.next())
console.log(k.next())
console.log(k.next())


//Generators
function* hai() {
  yield("Start");
  yield("Middle")
  yield("End")

}
let n=hai()
console.log(n.next())

  console.log(n.next())
  console.log(n.next())
console.log(n.next())
