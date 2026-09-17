const student = {
  name: "Rahul",
  age: 21,
  course: "JavaScript",
  address: {
    city: "Guntur",
    state: "Andhra Pradesh"
  }
};

const {
  name,
  age,
  course,
  address: { city, state }
} = student;

console.log("Name:", name);
console.log("Age:", age);
console.log("Course:", course);
console.log("City:", city);
console.log("State:", state);