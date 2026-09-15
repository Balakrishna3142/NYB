console.log("1. Program Started");


// Synchronous vs Asynchronous 

console.log("2. Synchronous: First");

setTimeout(() => {
    console.log("3. Asynchronous: setTimeout");
}, 1000);

console.log("4. Synchronous: Second");



//  Callback Function


function greet(name, callback) {
    console.log("Hello " + name);
    callback();
}

greet("krishna", function () {
    console.log("Callback function executed");
});



//  setInterval() and clearInterval()


let count = 0;

let intervalId = setInterval(() => {
    count++;
    console.log("Interval count:", count);

    if (count === 3) {
        clearInterval(intervalId);
        console.log("Interval stopped");
    }
}, 500);



//  clearTimeout()


let timeoutId = setTimeout(() => {
    console.log("This message will NOT appear");
}, 3000);

clearTimeout(timeoutId);



//  Callback Hell


setTimeout(() => {
    console.log("Callback Hell: Step 1");

    setTimeout(() => {
        console.log("Callback Hell: Step 2");

        setTimeout(() => {
            console.log("Callback Hell: Step 3");
        }, 300);

    }, 300);

}, 300);



//  Promise


function getData() {
    return new Promise((resolve, reject) => {
        let success = true;

        if (success) {
            resolve("Promise resolved successfully");
        } else {
            reject("Promise rejected");
        }
    });
}

getData()
    .then((result) => {
        console.log(result);
        return "Data processed";
    })
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log("Error:", error);
    })
    .finally(() => {
        console.log("Promise completed");
    });



// Promise.all()


let p1 = Promise.resolve("Promise 1");
let p2 = Promise.resolve("Promise 2");
let p3 = Promise.resolve("Promise 3");

Promise.all([p1, p2, p3])
    .then((result) => {
        console.log("Promise.all:", result);
    });



//  Promise.race()


let race1 = new Promise(resolve =>
    setTimeout(() => resolve("Race Winner 1"), 1000)
);

let race2 = new Promise(resolve =>
    setTimeout(() => resolve("Race Winner 2"), 500)
);

Promise.race([race1, race2])
    .then((result) => {
        console.log("Promise.race:", result);
    });



//  Promise.allSettled()


let s1 = Promise.resolve("Success");
let s2 = Promise.reject("Failed");

Promise.allSettled([s1, s2])
    .then((result) => {
        console.log("Promise.allSettled:", result);
    });



//  Promise.any()


let a1 = Promise.reject("Error 1");
let a2 = new Promise(resolve =>
    setTimeout(() => resolve("First successful promise"), 700)
);
let a3 = Promise.resolve("Immediate success");

Promise.any([a1, a2, a3])
    .then((result) => {
        console.log("Promise.any:", result);
    });


//  Async / Await 


async function asyncExample() {
    try {
        let result = await getData();
        console.log("Async/Await:", result);
    } catch (error) {
        console.log("Async Error:", error);
    } finally {
        console.log("Async operation completed");
    }
}

asyncExample();

console.log("5. Program End");