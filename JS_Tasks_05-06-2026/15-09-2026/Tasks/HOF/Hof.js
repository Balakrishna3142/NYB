function calculator(a, b, operation) {
    return operation(a, b);
}

const add = (a, b) => a + b;

const multiply = (a, b) => a * b;

console.log(calculator(10, 20, add));
console.log(calculator(10, 20, multiply));