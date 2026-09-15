// Closure Example

function counter() {
    let count = 0;

    return function () {
        count++;
        console.log("Count:", count);
    };
}

// Create closure
const increase = counter();

// Calling the inner function
increase();
increase();
increase();