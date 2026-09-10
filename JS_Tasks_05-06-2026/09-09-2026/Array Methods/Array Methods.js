
// 1. Creating and Accessing Arrays
let fruits = ["Apple", "Banana", "Mango", "Orange"];

console.log("First fruit:", fruits[0]);
console.log("Second fruit:", fruits[1]);


// 2. Adding and Removing Elements
fruits.push("Grapes");    
fruits.unshift("Pineapple"); 

fruits.pop();               
fruits.shift();           

console.log("After add/remove:", fruits);


//  Searching Elements
console.log("Index of Mango:", fruits.indexOf("Mango"));
console.log("Is Apple present?", fruits.includes("Apple"));


//  Looping Through Arrays
console.log("Using for loop:");
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}


// . map()

let numbers = [1, 2, 3, 4, 5];

let squares = numbers.map(function(num) {
    return num * num;
});

console.log("Squares:", squares);


//  filter()

let evenNumbers = numbers.filter(function(num) {
    return num % 2 === 0;
});

console.log("Even numbers:", evenNumbers);


//  reduce()
let sum = numbers.reduce(function(total, num) {
    return total + num;
}, 0);

console.log("Sum:", sum);


//  find()

let firstEven = numbers.find(function(num) {
    return num % 2 === 0;
});

console.log("First even number:", firstEven);


// 9. findIndex()

let firstEvenIndex = numbers.findIndex(function(num) {
    return num % 2 === 0;
});

console.log("Index of first even number:", firstEvenIndex);


// some()

let hasLargeNumber = numbers.some(function(num) {
    return num > 4;
});

console.log("Has number greater than 4:", hasLargeNumber);


// 11. every()

let allPositive = numbers.every(function(num) {
    return num > 0;
});

console.log("Are all numbers positive?", allPositive);


//  forEach()

console.log("Using forEach:");

numbers.forEach(function(num) {
    console.log(num);
});


// sort()

let names = ["Ravi", "Anil", "Suresh", "Bharat"];

names.sort();

console.log("Sorted names:", names);


// Numeric sorting
let marks = [45, 10, 90, 25, 60];

marks.sort(function(a, b) {
    return a - b;
});

console.log("Sorted marks:", marks);


//  join()

let colors = ["Red", "Green", "Blue"];

let colorString = colors.join(", ");

console.log("Joined colors:", colorString);


//  Flattening Arrays
// flat() converts nested arrays into a single-level array
let nestedArray = [1, [2, 3], [4, 5], 6];

let flatArray = nestedArray.flat();

console.log("Flattened array:", flatArray);


//  Removing Duplicate Values
let duplicateNumbers = [1, 2, 2, 3, 4, 4, 5, 5];

let uniqueNumbers = [...new Set(duplicateNumbers)];

console.log("Original array:", duplicateNumbers);
console.log("Without duplicates:", uniqueNumbers);