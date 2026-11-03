
const output = document.getElementById("output");

function show(message) {
    output.innerHTML += message + "<br>";
}

function clearOutput() {
    output.innerHTML = "";
}


//  PENDING PROMISE

function pendingPromise() {

    clearOutput();

    show("Promise is Pending...");

    const promise = new Promise((resolve, reject) => {

        setTimeout(() => {
            resolve("Promise Completed!");
        }, 3000);

    });

    promise.then((result) => {
        show(result);
    });
}


//  FULFILLED PROMISE

function fulfilledPromise() {

    clearOutput();

    const promise = new Promise((resolve, reject) => {

        resolve("Promise Fulfilled Successfully!");

    });

    promise.then((result) => {
        show(result);
    });
}


//  REJECTED PROMISE

function rejectedPromise() {

    clearOutput();

    const promise = new Promise((resolve, reject) => {

        reject("Something Went Wrong!");

    });

    promise.catch((error) => {
        show("Rejected: " + error);
    });
}


//  THEN METHOD

function thenExample() {

    clearOutput();

    Promise.resolve("Hello JavaScript!")

    .then((result) => {
        show(result);
    });

}


// 5. CATCH METHOD

function catchExample() {

    clearOutput();

    Promise.reject("Network Error!")

    .catch((error) => {
        show("Error: " + error);
    });

}


// 6. FINALLY METHOD

function finallyExample() {

    clearOutput();

    Promise.resolve("Task Successful!")

    .then((result) => {
        show(result);
    })

    .catch((error) => {
        show(error);
    })

    .finally(() => {
        show("Finally: Promise Execution Finished!");
    });

}


// 7. PROMISE CHAINING

function chainingExample() {

    clearOutput();

    Promise.resolve(10)

    .then((number) => {

        show("First Value: " + number);

        return number * 2;

    })

    .then((number) => {

        show("Second Value: " + number);

        return number + 5;

    })

    .then((number) => {

        show("Final Value: " + number);

    })

    .catch((error) => {

        show("Error: " + error);

    });

}
