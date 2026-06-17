//copying of objects
//:normal copy
//:shallow copy
//:deep copy


//1.normal copy
var obj={a:"one",b:"two",c:"three"}
var obj1=obj
console.log(obj)
console.log(obj1)

obj1.d="four"
console.log(obj1)
console.log(obj

)
 //shallow copy with the help of spredoperater
 var obj2={...obj}
 console.log("obj2".obj2)
 console.log("obj",obj)

 //deep copy
  var copy1 =JSON.parse(JSON.stringify(origin))
  console.log("copyy",copy1)
  copy1.one="bye"
  copy1.obj.a="bye" 
copy1.obj.a="hey"
console.log("copy",copy1)
console.log("orignal") 
//Implement deep copy using JSON methods and alternative approaches.

const obj = {
  date: new Date(),
  fn: () => console.log("Hello"),
  value: undefined
};

const copy = JSON.parse(JSON.stringify(obj));

console.log(copy);
// { date: "2025-06-17T..." }