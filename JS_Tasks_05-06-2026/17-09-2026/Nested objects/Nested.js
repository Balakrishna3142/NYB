// Manipulating Nested Objects

let student = {
    name: "Rahul",
    age: 20,
    address: {
        city: "Guntur",
        state: "Andhra Pradesh",
        pincode: 522001
    },
    marks: {
        maths: 85,
        science: 90,
        english: 80
    }
};

console.log("Original Object:");
console.log(student);

// 1. Accessing nested properties
console.log("\nStudent Name:", student.name);
console.log("City:", student.address.city);
console.log("Maths Marks:", student.marks.maths);

// 2. Modifying nested properties
student.address.city = "Vijayawada";
student.marks.maths = 95;

console.log("\nAfter Modification:");
console.log("City:", student.address.city);
console.log("Maths Marks:", student.marks.maths);

// 3. Adding a new nested property
student.address.country = "India";
student.marks.computer = 88;

console.log("\nAfter Adding Properties:");
console.log("Country:", student.address.country);
console.log("Computer Marks:", student.marks.computer);

// 4. Deleting a nested property
delete student.address.pincode;
delete student.marks.english;

console.log("\nAfter Deleting Properties:");
console.log(student);

// 5. Adding a completely new nested object
student.contact = {
    phone: "9876543210",
    email: "rahul@example.com"
};

console.log("\nAfter Adding Contact Object:");
console.log(student.contact);