
//  ASYNC AND AWAIT

function wait(ms) {
    return new Promise(resolve => {
        setTimeout(resolve, ms);
    });
}

async function basicExample() {
    document.getElementById("output").innerHTML =
        "Loading...";

    await wait(2000);

    document.getElementById("output").innerHTML =
        "Hello! Async operation completed.";
}


//  ERROR HANDLING WITH TRY...CATCH

async function getUser(success) {
    await wait(1000);

    if (!success) {
        throw new Error("Failed to fetch user!");
    }

    return "John";
}

async function successExample() {
    try {
        let user = await getUser(true);

        document.getElementById("output").innerHTML =
            "User name: " + user;

    } catch (error) {
        document.getElementById("output").innerHTML =
            error.message;
    }
}

async function errorExample() {
    try {
        let user = await getUser(false);

        document.getElementById("output").innerHTML =
            "User name: " + user;

    } catch (error) {
        document.getElementById("output").innerHTML =
            "Error: " + error.message;
    }
}


// 3. MULTIPLE ASYNC OPERATIONS

async function getUserData() {
    await wait(1000);
    return "User data loaded";
}

async function getProductData() {
    await wait(2000);
    return "Product data loaded";
}

async function getOrderData() {
    await wait(1500);
    return "Order data loaded";
}

async function multipleOperations() {
    document.getElementById("output").innerHTML =
        "Loading multiple operations...";

    try {
        // Run all operations simultaneously
        let results = await Promise.all([
            getUserData(),
            getProductData(),
            getOrderData()
        ]);

        document.getElementById("output").innerHTML =
            results.join("<br>");

    } catch (error) {
        document.getElementById("output").innerHTML =
            "Error: " + error.message;
    }
}
