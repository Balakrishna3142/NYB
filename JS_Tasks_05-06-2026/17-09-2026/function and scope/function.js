//  Function to add two numbers
function add(a, b) {
    return a + b;
}

// . Function to check even or odd
function checkEvenOdd(num) {
    if (num % 2 === 0) {
        return "Even";
    } else {
        return "Odd";
    }
}

//  Function to find the largest of two numbers
function largest(a, b) {
    return a > b ? a : b;
}

//  Function to calculate factorial
function factorial(n) {
    let result = 1;

    for (let i = 1; i <= n; i++) {
        result *= i;
    }

    return result;
}

//  Function to calculate square
function square(n) {
    return n * n;
}

//  Function with local scope
function localScope() {
    let message = "This is a local variable";
    return message;
}

//  Function with global scope
let globalVariable = "This is a global variable";

function globalScope() {
    return globalVariable;
}

//  Function to find sum of array elements
function arraySum(numbers) {
    let sum = 0;

    for (let number of numbers) {
        sum += number;
    }

    return sum;
}

// Function to count vowels
function countVowels(text) {
    let count = 0;
    let vowels = "aeiouAEIOU";

    for (let char of text) {
        if (vowels.includes(char)) {
            count++;
        }
    }

    return count;
}

// . Function demonstrating block scope
function blockScope() {
    let result = "Outside block";

    if (true) {
        let blockVariable = "Inside block";
        result += " | " + blockVariable;
    }

    return result;
}


// Calling all functions

console.log("1. Addition:", add(10, 20));

console.log("2. Even/Odd:", checkEvenOdd(15));

console.log("3. Largest:", largest(25, 40));

console.log("4. Factorial:", factorial(5));

console.log("5. Square:", square(6));

console.log("6. Local Scope:", localScope());

console.log("7. Global Scope:", globalScope());

console.log("8. Array Sum:", arraySum([10, 20, 30, 40, 50]));

console.log("9. Vowel Count:", countVowels("JavaScript"));

console.log("10. Block Scope:", blockScope());