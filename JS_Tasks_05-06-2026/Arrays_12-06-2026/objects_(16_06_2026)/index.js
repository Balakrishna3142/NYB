//sorting with built in methods
const arr = [5, 2, 9, 1, 5, 6];

for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr.length - i - 1; j++) {
    if (arr[j] > arr[j + 1]) {
      let temp = arr[j];
      arr[j] = arr[j + 1];
      arr[j + 1] = temp;
    }
  }
}

console.log(arr);
//for each
const numbers = [10, 20, 30, 40];

let sum = 0;

numbers.forEach(num => {
  sum += num;
});

console.log(sum);



//objects:4 ways

//Objectliteral

let b ={}
console.log (b)
let a =new Object()
console.log(a)

//new key word

var obj ={one:"a",b:"hello",c:20}
console.log(obj.c)
console.log(obj["one"])
obj.hello="good mrng"
console.log(obj)
delete obj.c
obj.b="hii"
console.log(obj)

//constructor

function employe(a,b,c,){
  this.name =a;
  this.role =b;
  this.dept =c;
}
console.log(employe)

//classical way:E.S.6
class Emp{
constructor(a,b,c){
  this.name=a;
  this.role=b;
  this.dep=c;

}

}
var m=new Emp ("Bala","L3","IT")
console.log(m)

//Understand concept of objects 
let person = {
    name: "krishna",
    age: 25,
    city: "hyd"
};
console.log(person.name);
console.log(person.age);
//object using different approach 
//new Object
console.log(person);

function Person(name, age) {
    this.name = name;
    this.age = age;
}
//constructor function

let p1 = new Person("krishna", 25);
let p2 = new Person("pavan", 30);

console.log(p1.name);
console.log(p2.name);
//Access update add and delete obj...
let student = {
    name: "krishna",
    age: 25
};

// Access
console.log(student.name);

// Add
student.city = "Vijayawada";

// Update
student.age = 21;

// Delete
delete student.name;

console.log(student);

//Create objects containing methods and practice object manipulation.
 student = {
    name: "Ravi",
    age: 20,

    greet: function() {
        console.log("Hello, my name is " + this.name);
    }
};

// Access properties
console.log(student.name);

// Call method
student.greet();

// Add property
student.city = "Vijayawada";

// Update property
student.age = 21;

// Delete property
delete student.city;

console.log(student);
