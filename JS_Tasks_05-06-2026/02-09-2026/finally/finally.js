try {
    console.log("Try block");
    throw new Error("Something went wrong");
} catch (error) {
    console.log("Catch block:", error.message);
} finally {
    console.log("Finally block always runs");
}