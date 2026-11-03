// Named Exports
export const name = "Rahul";

export function add(a, b) {
    return a + b;
}

// Default Export
export default function greet() {
    console.log("Welcome to JavaScript Modules!");
}

// Import Named Exports
import { name as studentName, add as addition } from "./app.js";

// Import Default Export
import greetMessage from "./app.js";

// Display Output
console.log("Student Name:", studentName);

console.log("Addition:", addition(10, 20));

greetMessage();