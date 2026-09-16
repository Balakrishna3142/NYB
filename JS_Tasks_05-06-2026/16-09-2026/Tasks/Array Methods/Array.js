

let numbers = [10, 20, 30, 40, 50];

console.log("Original Array:", numbers);


// push
numbers.push(60);

console.log("After push():", numbers);


//  pop
numbers.pop();

console.log("After pop():", numbers);


//  unshift
numbers.unshift(5);

console.log("After unshift():", numbers);


//  shift
numbers.shift();

console.log("After shift():", numbers);


//  splice
numbers.splice(2, 1, 35);

console.log("After splice():", numbers);


//  slice
let part = numbers.slice(1, 4);

console.log("After slice():", part);


// 7. concat() - Combine arrays
let extraNumbers = [60, 70];

let combined = numbers.concat(extraNumbers);

console.log("After concat():", combined);


// 8. indexOf() - Find index of an element
let index = numbers.indexOf(30);

console.log("Index of 30:", index);


// 9. includes() - Check whether element exists
let exists = numbers.includes(40);

console.log("Includes 40:", exists);


// 10. forEach() - Execute function for every element
console.log("Using forEach():");

numbers.forEach(function(num) {
    console.log(num);
});


// 11. map() - Create a new array
let doubled = numbers.map(function(num) {
    return num * 2;
});

console.log("Using map():", doubled);


// 12. filter() - Select elements based on condition
let greaterThan25 = numbers.filter(function(num) {
    return num > 25;
});

console.log("Using filter():", greaterThan25);


// 13. find() - Find first matching element
let found = numbers.find(function(num) {
    return num > 25;
});

console.log("Using find():", found);


// 14. findIndex() - Find index of first matching element
let foundIndex = numbers.findIndex(function(num) {
    return num > 25;
});

console.log("Using findIndex():", foundIndex);


// 15. reduce() - Calculate total
let total = numbers.reduce(function(sum, num) {
    return sum + num;
}, 0);

console.log("Using reduce():", total);


// 16. sort() - Sort an array
let unsorted = [50, 10, 40, 20, 30];

unsorted.sort(function(a, b) {
    return a - b;
});

console.log("Using sort():", unsorted);


// 17. reverse() - Reverse an array
unsorted.reverse();

console.log("Using reverse():", unsorted);


// 18. join() - Convert array to string
let names = ["Rahul", "Ravi", "Anil"];

let nameString = names.join(", ");

console.log("Using join():", nameString);