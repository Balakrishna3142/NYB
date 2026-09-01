// =====================================
// JAVASCRIPT ARRAY METHODS
// =====================================

let numbers = [10, 20, 30, 40, 50];

console.log("Original Array:", numbers);

// 1. push() - Add element at the end
numbers.push(60);
console.log("push():", numbers);

// 2. pop() - Remove last element
numbers.pop();
console.log("pop():", numbers);

// 3. unshift() - Add element at beginning
numbers.unshift(5);
console.log("unshift():", numbers);

// 4. shift() - Remove first element
numbers.shift();
console.log("shift():", numbers);

// 5. map() - Creates a new array
let double = numbers.map(num => num * 2);
console.log("map():", double);

// 6. filter
let even = numbers.filter(num => num % 2 === 0);
console.log("filter():", even);

// 7. reduce
let sum = numbers.reduce((total, num) => total + num, 0);
console.log("reduce():", sum);

// 8. forEach
console.log("forEach():");
numbers.forEach(num => console.log(num));

// 9. includes
console.log("includes():", numbers.includes(30));

// 10. indexOf
console.log("indexOf():", numbers.indexOf(30));

// 11. find
let result = numbers.find(num => num > 25);
console.log("find():", result);

// 12. findIndex
let index = numbers.findIndex(num => num > 25);
console.log("findIndex():", index);

// 13. sort
let marks = [50, 10, 40, 20, 30];
marks.sort((a, b) => a - b);
console.log("sort():", marks);

// 14. reverse
marks.reverse();
console.log("reverse():", marks);

// 15. slice
let fruits = ["Apple", "Banana", "Mango", "Orange"];
let selected = fruits.slice(1, 3);
console.log("slice():", selected);

// 16. splice
fruits.splice(1, 1, "Grapes");
console.log("splice():", fruits);

// 17. concat
let a = [1, 2, 3];
let b = [4, 5, 6];
let combined = a.concat(b);
console.log("concat():", combined);

// 18. join
let names = ["John", "Peter", "David"];
console.log("join():", names.join(", "));

// 19. some
let hasBigNumber = numbers.some(num => num > 40);
console.log("some():", hasBigNumber);

// 20. every
let allPositive = numbers.every(num => num > 0);
console.log("every():", allPositive);