console.log("Program Started");

// 1. Basic async function
async function basicExample() {
    return "Hello from async function";
}

basicExample().then(result => {
    console.log("1.", result);
});


// 2. Basic await
function getData() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("Data received");
        }, 1000);
    });
}

async function awaitExample() {
    console.log("2. Waiting for data...");

    const result = await getData();

    console.log("2.", result);
}

awaitExample();


// 3. Multiple await
function getUser() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("User data");
        }, 500);
    });
}

function getProfile() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("Profile data");
        }, 500);
    });
}

async function multipleAwait() {
    const user = await getUser();
    console.log("3.", user);

    const profile = await getProfile();
    console.log("3.", profile);
}

multipleAwait();


// 4. Error handling using try/catch
function login() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject("Login failed!");
        }, 500);
    });
}

async function errorExample() {
    try {
        const result = await login();
        console.log("4.", result);
    } catch (error) {
        console.log("4. Error:", error);
    } finally {
        console.log("4. Login process completed");
    }
}

errorExample();


// 5. async function returning a value
async function calculate() {
    const a = 10;
    const b = 20;

    return a + b;
}

calculate().then(result => {
    console.log("5. Sum:", result);
});


// 6. Promise.all() with async/await
function task1() {
    return new Promise(resolve => {
        setTimeout(() => resolve("Task 1 completed"), 1000);
    });
}

function task2() {
    return new Promise(resolve => {
        setTimeout(() => resolve("Task 2 completed"), 1000);
    });
}

async function parallelExample() {
    const results = await Promise.all([
        task1(),
        task2()
    ]);

    console.log("6.", results);
}

parallelExample();


console.log("Program End");