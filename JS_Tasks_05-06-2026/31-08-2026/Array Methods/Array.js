let fruits = ["Apple", "Banana", "Mango"];

console.log("Original Array:", fruits);

// push
fruits.push("Orange");
console.log("After push():", fruits);

// pop
fruits.pop();
console.log("After pop():", fruits);

// unshift
fruits.unshift("Grapes");
console.log("After unshift():", fruits);

// shift
fruits.shift();
console.log("After shift():", fruits);

// indexOf
console.log("Index of Mango:", fruits.indexOf("Mango"));

// includes
console.log("Has Banana:", fruits.includes("Banana"));

// reverse() - reverses the array
fruits.reverse();
console.log("After reverse():", fruits);

// sort
fruits.sort();
console.log("After sort():", fruits);

