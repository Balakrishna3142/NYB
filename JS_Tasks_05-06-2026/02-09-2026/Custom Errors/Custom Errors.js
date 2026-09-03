class AgeError extends Error {
    constructor(message) {
        super(message);
        this.name = "AgeError";
    }
}

try {
    let age = 16;

    if (age < 18) {
        throw new AgeError("Age must be 18 or above");
    }

    console.log("Eligible");
} catch (error) {
    console.log(error.name);
    console.log(error.message);
}