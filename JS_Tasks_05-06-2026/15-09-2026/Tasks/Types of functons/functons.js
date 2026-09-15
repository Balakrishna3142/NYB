//  Function Declaration
function add(a, b) {
    return a + b;
}

console.log("Function Declaration:", add(10, 20));


//  Function Expression
const subtract = function(a, b) {
    return a - b;
};

console.log("Function Expression:", subtract(20, 10));


//  Named Function
const multiply = function multiplication(a, b) {
    return a * b;
};

console.log("Named Function:", multiply(5, 4));


// Anonymous Function
const divide = function(a, b) {
    return a / b;
};

console.log("Anonymous Function:", divide(20, 5));


//  Arrow Function
const square = (num) => num * num;

console.log("Arrow Function:", square(6));