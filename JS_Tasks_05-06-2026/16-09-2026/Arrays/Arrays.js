

//  Array Creation
let numbers = [10, 20, 30, 40, 50];
console.log("Original Array:", numbers);

// Creating an array using Array constructor
let fruits = new Array("Apple", "Banana", "Mango");
console.log("Fruits:", fruits);


//  Adding Elements

// push() - adds element at the end
numbers.push(60);
console.log("After push:", numbers);

// unshift() - adds element at the beginning
numbers.unshift(5);
console.log("After unshift:", numbers);


//  Removing Elements

// pop() - removes last element
numbers.pop();
console.log("After pop:", numbers);

// shift() - removes first element
numbers.shift();
console.log("After shift:", numbers);

// splice() - removes elements from a specific position
numbers.splice(1, 1);
console.log("After splice:", numbers);


//  Searching Arrays

// includes() - checks whether an element exists
console.log("Has 30?", numbers.includes(30));

// indexOf() - returns the index of an element
console.log("Index of 40:", numbers.indexOf(40));


//  Array Iteration

console.log("Array Iteration:");

for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}


//  map()
// Creates a new array by changing every element
let doubled = numbers.map(function(num) {
    return num * 2;
});

console.log("map() - Doubled:", doubled);


//. filter()
// Creates a new array with elements that satisfy a condition
let evenNumbers = numbers.filter(function(num) {
    return num % 2 === 0;
});

console.log("filter() - Even Numbers:", evenNumbers);


//  reduce()
// Reduces the array to a single value
let sum = numbers.reduce(function(total, num) {
    return total + num;
}, 0);

console.log("reduce() - Sum:", sum);


//  forEach()
// Executes a function for each element
console.log("forEach():");

numbers.forEach(function(num) {
    console.log(num);
});


// . find()
// Returns the first element satisfying a condition
let firstBigNumber = numbers.find(function(num) {
    return num > 25;
});

console.log("find() - First number > 25:", firstBigNumber);


//  findIndex()
// Returns the index of the first element satisfying a condition
let firstBigIndex = numbers.findIndex(function(num) {
    return num > 25;
});

console.log("findIndex() - Index of first number > 25:", firstBigIndex);


//  some()
// Returns true if at least one element satisfies the condition
let hasEven = numbers.some(function(num) {
    return num % 2 === 0;
});

console.log("some() - Has even number?", hasEven);


//  every()
// Returns true if every element satisfies the condition
let allPositive = numbers.every(function(num) {
    return num > 0;
});

console.log("every() - Are all numbers positive?", allPositive);


//  sort()
// Sorts an array
let values = [50, 10, 40, 20, 30];

values.sort(function(a, b) {
    return a - b;
});

console.log("sort() - Ascending:", values);

// Descending order
values.sort(function(a, b) {
    return b - a;
});

console.log("sort() - Descending:", values);


//. join()
// Converts array elements into a string
let colors = ["Red", "Green", "Blue"];

let colorString = colors.join(", ");

console.log("join():", colorString);


// 16. flat()
// Converts nested arrays into a single-level array
let nestedArray = [1, 2, [3, 4], [5, 6]];

let flatArray = nestedArray.flat();

console.log("flat():", flatArray);


// 17. Removing Duplicates
let duplicateNumbers = [10, 20, 10, 30, 20, 40, 30];

let uniqueNumbers = [...new Set(duplicateNumbers)];

console.log("Original with duplicates:", duplicateNumbers);
console.log("After removing duplicates:", uniqueNumbers);