let student = {
    name: "balakrishna",
    age: 30,
    course: "Js",
    address: {
        city: "Hyderabad",
        state: "tg",
        pincode: 500001
    },
    marks: {
        maths: 85,
        science: 90,
        computer: 95
    }
};

// 1. Access nested object data
console.log("Student Name:", student.name);
console.log("City:", student.address.city);
console.log("Computer Marks:", student.marks.computer);

// 2. Extract data using destructuring
let {
    name,
    address: { city, state },
    marks: { maths, science }
} = student;

console.log("Name:", name);
console.log("City:", city);
console.log("State:", state);
console.log("Maths:", maths);
console.log("Science:", science);

// 3. Update nested object data
student.address.city = "Bangalore";
student.marks.maths = 95;

console.log("Updated City:", student.address.city);
console.log("Updated Maths Marks:", student.marks.maths);

// 4. Add new data to nested object
student.address.country = "India";
student.marks.english = 88;

console.log("Country:", student.address.country);
console.log("English Marks:", student.marks.english);

// 5. Delete nested object data
delete student.address.pincode;

console.log("Updated Address:", student.address);

// 6. Calculate total marks
let totalMarks =
    student.marks.maths +
    student.marks.science +
    student.marks.computer +
    student.marks.english;

console.log("Total Marks:", totalMarks);