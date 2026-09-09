//  Function Declaration
function checkNumber(num) {

    // Conditional Statement: if-else
    if (num > 0) {
        console.log(num + " is Positive");
    } else if (num < 0) {
        console.log(num + " is Negative");
    } else {
        console.log("Number is Zero");
    }
}


//  Function Expression
const checkEvenOdd = function(num) {

    if (num % 2 === 0) {
        return num + " is Even";
    } else {
        return num + " is Odd";
    }
};


//  Arrow Function
const square = (num) => num * num;


//  Loop: for loop
function printNumbers() {

    console.log("Numbers from 1 to 5:");

    for (let i = 1; i <= 5; i++) {
        console.log(i);
    }
}


//  Loop: while loop
function printEvenNumbers() {

    console.log("Even numbers from 2 to 10:");

    let i = 2;

    while (i <= 10) {
        console.log(i);
        i = i + 2;
    }
}


//  Loop + Conditional Statement
function sumNumbers() {

    let sum = 0;

    for (let i = 1; i <= 5; i++) {
        sum = sum + i;
    }

    return sum;
}


//  Callback Function
function calculate(num, callback) {
    return callback(num);
}


// Main Program

let number = 7;

console.log("----- Conditional Statement -----");
checkNumber(number);

console.log("----- Function Expression -----");
console.log(checkEvenOdd(number));

console.log("----- Arrow Function -----");
console.log("Square of " + number + " = " + square(number));

console.log("----- For Loop -----");
printNumbers();

console.log("----- While Loop -----");
printEvenNumbers();

console.log("----- Loop and Sum -----");
console.log("Sum of numbers from 1 to 5 =", sumNumbers());

console.log("----- Callback Function -----");
console.log("Square using callback =", calculate(5, square));