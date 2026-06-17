//Arraysome and every
const ages = [20, 25, 17, 30];

console.log(ages.some(age => age < 18));  
console.log(ages.every(age => age >= 18)); 

//some condition must be true
//ALL conditions must be true

//join

const chars = ["H", "e", "l", "l", "o"];

console.log(chars.join("/"));
// convert all elements

//with out useing short

const numbers = [100, 25, 3, 40];

numbers.sort();

console.log(numbers);
//is an array method used to sort the elements of an array.

//looping techniques
//for loop
const colors = ["red", "green", "blue"];

for (let i = 0; i < colors.length; i++) {
  console.log(colors[i]);
}
//for off
const nums = [1, 2, 3, 4, 5, 6];

for (const num of nums) {
  if (num % 2 === 0) {
    console.log(num);
  }
}

//for each
const names = ["pavani", "Lakshmi", "parimi"];

names.forEach((name, index) => {
  console.log(index, name);
});


//Using flat
const arr = [1, [2, [3, 4]], 5];

const result = arr.flat(2);

console.log(result);

//converting a mult leval arrays

