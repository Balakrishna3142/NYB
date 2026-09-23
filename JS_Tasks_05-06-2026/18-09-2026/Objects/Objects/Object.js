const student = {
    name: "krishana",
    age: 20,
    course: "JavaScript",

    display: function() {
        console.log(this.name);
    }
};

console.log(student.name);
console.log(student.age);
student.display();