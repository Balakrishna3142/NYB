let numbers = [10, 20, 10, 30, 20, 40, 30];

let uniqueNumbers = [...new Set(numbers)];

console.log("Original Array:", numbers);
console.log("Array without duplicates:", uniqueNumbers);