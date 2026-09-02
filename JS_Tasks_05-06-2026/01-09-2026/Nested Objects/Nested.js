// Nested Objects Example

let student = {
    name: "pavan",
    age: 20,
    address: {
        city: "ongloe",
        state: "Andhra Pradesh",
        pincode: 530001
    },
    marks: {
        maths: 85,
        science: 90,
        english: 80
    }
};

// Accessing nested object values
console.log("Student Name:", student.name);
console.log("City:", student.address.city);
console.log("State:", student.address.state);
console.log("Pincode:", student.address.pincode);

console.log("Maths Marks:", student.marks.maths);
console.log("Science Marks:", student.marks.science);
console.log("English Marks:", student.marks.english);