function addNumbers(...numbers) {
    let total = 0;

    for (let number of numbers) {
        total += number;
    }

    return total;
}

console.log(addNumbers(10, 20, 30));
console.log(addNumbers(5, 10, 15, 20));