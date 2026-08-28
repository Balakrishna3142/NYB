console.log("Program Started");

// 1. Creating a Promise
const myPromise = new Promise((resolve, reject) => {
    let success = true;

    if (success) {
        resolve("Data received successfully");
    } else {
        reject("Something went wrong");
    }
});

// 2. then() - success
myPromise
    .then((result) => {
        console.log("Success:", result);
    })

    // 3. catch() - error
    .catch((error) => {
        console.log("Error:", error);
    })

    // 4. finally() - always executes
    .finally(() => {
        console.log("Promise completed");
    });


// 5. Promise Chaining
Promise.resolve(10)
    .then((num) => {
        console.log("Value:", num);
        return num * 2;
    })
    .then((num) => {
        console.log("Value:", num);
        return num + 5;
    })
    .then((num) => {
        console.log("Final Value:", num);
    });


// 6. Promise Reject
Promise.reject("Login failed")
    .catch((error) => {
        console.log("Rejected:", error);
    });


// 7. Promise.all()
const p1 = Promise.resolve("User");
const p2 = Promise.resolve("Profile");
const p3 = Promise.resolve("Settings");

Promise.all([p1, p2, p3])
    .then((results) => {
        console.log("Promise.all:", results);
    });


// 8. Promise.race()
const p4 = new Promise(resolve => {
    setTimeout(() => resolve("First"), 1000);
});

const p5 = new Promise(resolve => {
    setTimeout(() => resolve("Second"), 500);
});

Promise.race([p4, p5])
    .then((result) => {
        console.log("Promise.race:", result);
    });


console.log("Program End");