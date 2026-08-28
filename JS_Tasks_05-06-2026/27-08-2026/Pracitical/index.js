console.log("1. Start");

// setTimeout()
setTimeout(() => {
    console.log("2. setTimeout");
}, 0);

// Promise
Promise.resolve().then(() => {
    console.log("3. Promise");
});

// Async/Await
async function example() {
    console.log("4. Async function");

    await Promise.resolve();

    console.log("5. After await");
}

example();

console.log("6. End");