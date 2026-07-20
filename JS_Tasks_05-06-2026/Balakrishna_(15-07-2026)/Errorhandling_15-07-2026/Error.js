function checkAge() {
    const age = document.getElementById("age").value;
    const result = document.getElementById("result");

    try {
        // Check if input is empty
        if (age === "") {
            throw "Age cannot be empty!";
        }

        // Check if age is a number
        if (isNaN(age)) {
            throw "Age must be a number!";
        }

        // Custom validation
        if (age < 18) {
            throw "You must be at least 18 years old.";
        }

        result.innerHTML = "Access Granted!";
    }
    catch (error) {
        result.innerHTML = "Error: " + error;
    }
    finally {
        console.log("Validation completed.");
    }
}