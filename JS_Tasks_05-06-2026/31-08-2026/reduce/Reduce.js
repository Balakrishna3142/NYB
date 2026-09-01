let numbers = [10, 20, 30, 40];

let sum = numbers.reduce((total, num) => {
    return total + num;
}, 0);

console.log("Sum =", sum);