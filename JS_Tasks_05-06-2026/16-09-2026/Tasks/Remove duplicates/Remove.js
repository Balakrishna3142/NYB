// Remove duplicate values from an array

let arr = [10, 20, 10, 30, 20, 40, 30, 50];

let uniqueArr = [...new Set(arr)];

console.log("Original Array:", arr);
console.log("Array after removing duplicates:", uniqueArr);