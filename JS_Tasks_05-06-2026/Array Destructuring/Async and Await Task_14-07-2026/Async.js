const output = document.getElementById("output");

// Simulated API request
function fetchData(success = true) {
    return new Promise((resolve, reject) => {

        setTimeout(() => {

            if (success) {
                resolve("✅ Data loaded successfully!");
            } else {
                reject("❌ Failed to load data.");
            }

        }, 2000);

    });
}

// ----------------------------
// Promise Version
// ----------------------------
document.getElementById("promiseBtn").addEventListener("click", () => {

    output.textContent = "Loading...";

    fetchData(true)
        .then((result) => {
            output.textContent = result;
        })
        .catch((error) => {
            output.textContent = error;
        });

});

// ----------------------------
// Async/Await Version
// ----------------------------
document.getElementById("asyncBtn").addEventListener("click", async () => {

    output.textContent = "Loading...";

    try {

        // Change true to false to test error handling
        const result = await fetchData(true);

        output.textContent = result;

    } catch (error) {

        output.textContent = error;

    }

});