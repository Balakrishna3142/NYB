//remove dupilicate element
const arr = [1, 2, 2, 3, 4, 4, 5];

const unique = [...new Set(arr)];

console.log(unique);

//elements using indexOf() and lastIndexOf().

let num =[0,1,2,3,4,]
console.log(num)
console.log(num[2])
console.log(num.indexOf(3))




//map

const numbers = [1, 2, 3, 4];

const doubled = numbers.map(num => num * 2);

console.log(doubled);
//It does NOT change the original array


//filter
const marks = [35, 50, 20, 80, 60];

const passed = marks.filter(mark => mark >= 40);

console.log(passed);
//It returns a new array

//reduce
//num
var num1=[10,90,10,40,30]

let sum = num1.reduce((hi,hello)=>{
    return hi+hello;
},0)
console.log(sum)
//boolean
var boolean =[true,true,false,true,true,]
var res=boolean.reduce((a,b)=>{
    return a || b;
},true)
console.log(res)

var boolean =[true,true,true,true,true,]
var res=boolean.reduce((a,b)=>{
    return a && b;
},true)
console.log(res)


//compar map
const prices = [100, 200, 300];

const withTax = prices.map(price => price + price * 0.18);

console.log(withTax);

//the use cases of map(), filter(), and reduce() with practical scenarios.

//filter
const employees = [
  { name: "Bala", salary: 40000 },
  { name: "krishna", salary: 60000 },
  { name: "pavani", salary: 80000 }
];

const highEarners = employees.filter(emp => emp.salary > 50000);

console.log(highEarners);

const cart = [500, 1000, 1500];

const total = cart.reduce((acc, price) => acc + price, 0);

console.log(total);

//for each
m.forEach((i,j)=>{
    console.log(i,j)
})
