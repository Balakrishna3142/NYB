
// Helper function to create promises

function createPromise(name, time, shouldReject = false) {

    return new Promise((resolve, reject) => {

        setTimeout(() => {

            if (shouldReject) {

                reject(name + " Failed");

            } else {

                resolve(name + " Success");

            }

        }, time);

    });

}


// Display output

function showOutput(message) {

    document.getElementById("output").innerText = message;

}


// Display loading status

function showLoading() {

    document.getElementById("status").innerText = "Loading...";

}


// 1. PROMISE.ALL()

async function runAll() {

    showLoading();

    try {

        const result = await Promise.all([

            createPromise("API 1", 1000),

            createPromise("API 2", 2000),

            createPromise("API 3", 1500)

        ]);

        document.getElementById("status").innerText = "Success";

        showOutput(JSON.stringify(result, null, 2));

    }

    catch (error) {

        document.getElementById("status").innerText = "Error";

        showOutput(error);

    }

}


// 2. PROMISE.ALLSETTLED()

async function runAllSettled() {

    showLoading();

    const result = await Promise.allSettled([

        createPromise("API 1", 1000),

        createPromise("API 2", 2000, true),

        createPromise("API 3", 1500)

    ]);

    document.getElementById("status").innerText = "Completed";

    showOutput(JSON.stringify(result, null, 2));

}


// 3. PROMISE.RACE()

async function runRace() {

    showLoading();

    try {

        const result = await Promise.race([

            createPromise("API 1", 3000),

            createPromise("API 2", 1000),

            createPromise("API 3", 2000)

        ]);

        document.getElementById("status").innerText = "Winner";

        showOutput(result);

    }

    catch (error) {

        document.getElementById("status").innerText = "Error";

        showOutput(error);

    }

}


// 4. PROMISE.ANY()

async function runAny() {

    showLoading();

    try {

        const result = await Promise.any([

            createPromise("API 1", 1000, true),

            createPromise("API 2", 2000),

            createPromise("API 3", 1500)

        ]);

        document.getElementById("status").innerText = "Success";

        showOutput(result);

    }

    catch (error) {

        document.getElementById("status").innerText = "All Failed";

        showOutput(error);

    }

}
