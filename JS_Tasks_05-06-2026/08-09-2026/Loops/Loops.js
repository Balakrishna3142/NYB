

// for loop
console.log("For Loop:");
for (let i = 1; i <= 5; i++) {
    console.log(i);
}


// . while loop
console.log("\nWhile Loop:");
let j = 1;
while (j <= 5) {
    console.log(j);
    j++;
}


// . ...while loop
console.log("\nDo While Loop:");
let k = 1;
do {
    console.log(k);
    k++;
} while (k <= 5);


//  for...of loop
console.log("\nFor Of Loop:");
let fruits = ["Apple", "Banana", "Mango"];

for (let fruit of fruits) {
    console.log(fruit);
}


//  for...in loop
console.log("\nFor In Loop:");
let student = {
    name: "Rahul",
    age: 20,
    course: "JavaScript"
};

for (let key in student) {
    console.log(key + " : " + student[key]);
}