

//  SYNCHRONOUS
console.log("1. Synchronous Start");

function add(a, b) {
    return a + b;
}

console.log("Addition:", add(10, 20));

console.log("Synchronous End");



//  CALL STACK


function firstFunction() {
    console.log("Inside firstFunction");

    secondFunction();
}

function secondFunction() {
    console.log("Inside secondFunction");
}

firstFunction();


//  WEB API + setTimeout()


console.log("\n2. setTimeout Example");

setTimeout(() => {
    console.log("setTimeout executed after 2 seconds");
}, 2000);



//  setInterval()

console.log("\n3. setInterval Example");

let count = 0;

const intervalId = setInterval(() => {
    count++;

    console.log("Interval count:", count);

    if (count === 3) {
        clearInterval(intervalId);
        console.log("Interval stopped");
    }
}, 1000);



//  CALLBACK QUEUE + EVENT LOOP


console.log("\n4. Event Loop Example");

setTimeout(() => {
    console.log("setTimeout callback");
}, 0);

console.log("Synchronous code");


// ======================================================
// 6. MICROTASK QUEUE
// ======================================================

Promise.resolve().then(() => {
    console.log("Promise microtask");
});

console.log("After Promise");


// ======================================================
// 7. PROMISE
// ======================================================

console.log("\n5. Promise Example");

const myPromise = new Promise((resolve, reject) => {

    let success = true;

    if (success) {
        resolve("Promise completed successfully");
    } else {
        reject("Promise failed");
    }
});


// ======================================================
// 8. .then()
// 9. .catch()
// 10. .finally()
// ======================================================

myPromise
    .then((result) => {
        console.log(".then():", result);
    })
    .catch((error) => {
        console.log(".catch():", error);
    })
    .finally(() => {
        console.log(".finally(): Promise operation finished");
    });


// ======================================================
// 11. PROMISE.ALL()
// ======================================================

console.log("\n6. Promise.all()");

const promise1 = Promise.resolve("User data");
const promise2 = Promise.resolve("Product data");
const promise3 = Promise.resolve("Order data");

Promise.all([promise1, promise2, promise3])
    .then((results) => {
        console.log("Promise.all():", results);
    })
    .catch((error) => {
        console.log("Promise.all Error:", error);
    });


// ======================================================
// 12. PROMISE.RACE()
// ======================================================

console.log("\n7. Promise.race()");

const race1 = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Race 1 completed");
    }, 2000);
});

const race2 = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Race 2 completed");
    }, 1000);
});

Promise.race([race1, race2])
    .then((result) => {
        console.log("Promise.race():", result);
    });


// ======================================================
// 13. PROMISE.ALLSETTLED()
// ======================================================

console.log("\n8. Promise.allSettled()");

const settled1 = Promise.resolve("Success");

const settled2 = Promise.reject("Failed");

const settled3 = Promise.resolve("Success Again");

Promise.allSettled([settled1, settled2, settled3])
    .then((results) => {
        console.log("Promise.allSettled():");
        console.log(results);
    });


// ======================================================
// 14. PROMISE.ANY()
// ======================================================

console.log("\n9. Promise.any()");

const any1 = Promise.reject("Failed 1");

const any2 = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Success 2");
    }, 2000);
});

const any3 = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Success 3");
    }, 1000);
});

Promise.any([any1, any2, any3])
    .then((result) => {
        console.log("Promise.any():", result);
    })
    .catch((error) => {
        console.log("Promise.any Error:", error);
    });


// ======================================================
// 15. ASYNC / AWAIT
// ======================================================

console.log("\n10. Async/Await");

function getUser() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                id: 1,
                name: "John"
            });
        }, 1000);
    });
}

async function displayUser() {

    try {

        const user = await getUser();

        console.log("User:", user);

    } catch (error) {

        console.log("Error:", error);

    } finally {

        console.log("Async operation finished");

    }
}

displayUser();


// ======================================================
// 16. ERROR HANDLING
// ======================================================

console.log("\n11. Error Handling");

async function errorExample() {

    try {

        const result = await Promise.reject("Something went wrong");

        console.log(result);

    } catch (error) {

        console.log("Caught Error:", error);

    }

}

errorExample();



// 17. FETCH API


async function fetchUsers() {

    try {

        const response = await fetch(
            "https://jsonplaceholder.typicode.com/users"
        );

        const users = await response.json();

        console.log("\n12. FETCH - GET");
        console.log("Users:", users);

    } catch (error) {

        console.log("Fetch Error:", error);

    }

}

fetchUsers();


// ======================================================
// 18. GET REQUEST
// ======================================================

async function getData() {

    try {

        const response = await fetch(
            "https://jsonplaceholder.typicode.com/posts/1"
        );

        const data = await response.json();

        console.log("\nGET Response:");
        console.log(data);

    } catch (error) {

        console.log("GET Error:", error);

    }

}

getData();


// ======================================================
// 19. POST REQUEST
// ======================================================

async function createPost() {

    try {

        const response = await fetch(
            "https://jsonplaceholder.typicode.com/posts",
            {
                method: "POST",

                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify({
                    title: "My Post",
                    body: "Hello JavaScript",
                    userId: 1
                })
            }
        );

        const data = await response.json();

        console.log("\nPOST Response:");
        console.log(data);

    } catch (error) {

        console.log("POST Error:", error);

    }

}

createPost();


// ======================================================
// 20. PUT REQUEST
// ======================================================

async function updatePost() {

    try {

        const response = await fetch(
            "https://jsonplaceholder.typicode.com/posts/1",
            {
                method: "PUT",

                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify({
                    id: 1,
                    title: "Updated Title",
                    body: "Updated Body",
                    userId: 1
                })
            }
        );

        const data = await response.json();

        console.log("\nPUT Response:");
        console.log(data);

    } catch (error) {

        console.log("PUT Error:", error);

    }

}

updatePost();

// 21. PATCH REQUEST


async function patchPost() {

    try {

        const response = await fetch(
            "https://jsonplaceholder.typicode.com/posts/1",
            {
                method: "PATCH",

                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify({
                    title: "Only Title Updated"
                })
            }
        );

        const data = await response.json();

        console.log("\nPATCH Response:");
        console.log(data);

    } catch (error) {

        console.log("PATCH Error:", error);

    }

}

patchPost();


// ======================================================
// 22. DELETE REQUEST
// ======================================================

async function deletePost() {

    try {

        const response = await fetch(
            "https://jsonplaceholder.typicode.com/posts/1",
            {
                method: "DELETE"
            }
        );

        console.log("\nDELETE Response:");
        console.log("Post deleted successfully");

    } catch (error) {

        console.log("DELETE Error:", error);

    }

}

deletePost();


// ======================================================
// END
// ======================================================

console.log("\nProgram started...");