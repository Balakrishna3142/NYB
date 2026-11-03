
//  try...catch and 2. finally

function checkNumber() {
    try {
        let age = -5;

        if (age < 0) {
            throw new Error("Age cannot be negative!");
        }

        document.getElementById("result").innerHTML =
            "Age: " + age;
    }
    catch (error) {
        document.getElementById("result").innerHTML =
            "Error: " + error.message;
    }
    finally {
        console.log("Finally block executed");
    }
}

//  Throwing Errors

function throwError() {
    try {
        let marks = 150;

        if (marks > 100) {
            throw new Error("Marks cannot be greater than 100!");
        }

        document.getElementById("result").innerHTML =
            "Marks: " + marks;
    }
    catch (error) {
        document.getElementById("result").innerHTML =
            "Error: " + error.message;
    }
}

//  Custom Errors

class MyCustomError extends Error {
    constructor(message) {
        super(message);
        this.name = "MyCustomError";
    }
}

function customError() {
    try {
        throw new MyCustomError("This is a custom error!");
    }
    catch (error) {
        document.getElementById("result").innerHTML =
            error.name + ": " + error.message;
    }
}

//  Handling API Failures

async function apiFailure() {
    try {
        let response = await fetch(
            "https://jsonplaceholder.typicode.com/invalid"
        );

        if (!response.ok) {
            throw new Error("API request failed!");
        }

        let data = await response.json();

        document.getElementById("result").innerHTML =
            JSON.stringify(data);
    }
    catch (error) {
        document.getElementById("result").innerHTML =
            "API Error: " + error.message;
    }
}
