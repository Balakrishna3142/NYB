let age = 15;

try {
    if (age < 18) {
        throw new Error("You must be 18 or older");
    }

    console.log("You can vote");
} catch (error) {
    console.log("Error:", error.message);
}