//Assign a New Empty ArrayMake arrays empty using different approaches.
let arr = [10, 20, 30, 40];

while (arr.length > 0) {
    arr.pop();
}

console.log(arr)
//Combining Multiple Arrays

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = [7, 8, 9];

const combined = [...arr1, ...arr2, ...arr3];

console.log(combined);

//spread operator
const numbers = [1, 2, 3];

const copy = [...numbers];

console.log(copy);

const arr4 = [1, 2];
const arr5 = [3, 4];

const merged = [...arr1, ...arr2];

console.log(merged);


//both approaches
const sectionA = ["krishna", "ram"];
const sectionB = ["Bala", "naresh"];

const allStudents = sectionA.concat(sectionB);

console.log(allStudents);

const arr9 = [1, 2];
const arr10 = [3, 4];

const result = [...arr1, ...arr2];

console.log(result);


// Array Iteration
//for Loop
for(let i=0; i<5; i++){
    console.log(i)


}



//while loop

let count = 1;

while (count <= 3) {
    console.log(count);
    count++;
}

//do while loop

let passwordEntered = false;

do {
    console.log("Ask for password");
} while (passwordEntered);

//for in

const person = {
    name: "pavan",
    age: 25
};

for (const key in person) {
    console.log(key, person[key]);
}
