

let collegeName = "jkc College";
const passingMarks = 40;
var totalStudents = 0;



//  DATA TYPES


let studentName = "Rahul";       // String
let studentAge = 20;             // Number
let isStudent = true;            // Boolean
let studentAddress;              // Undefined
let studentPhone = null;         // Null

console.log("College:", collegeName);
console.log("Name:", studentName);
console.log("Age:", studentAge);
console.log("Is Student:", isStudent);

//  OPERATORS

let marks1 = 80;
let marks2 = 70;

let totalMarks = marks1 + marks2;
let averageMarks = totalMarks / 2;

console.log("Total:", totalMarks);
console.log("Average:", averageMarks);

console.log(marks1 > passingMarks);
console.log(marks1 === 80);


// CONDITIONAL STATEMENT


function getGrade(marks) {

    if (marks >= 90) {
        return "A+";
    }
    else if (marks >= 80) {
        return "A";
    }
    else if (marks >= 70) {
        return "B";
    }
    else if (marks >= 60) {
        return "C";
    }
    else if (marks >= 40) {
        return "D";
    }
    else {
        return "Fail";
    }
}


// 5. ARRAY


let subjects = ["JavaScript", "HTML", "CSS", "React"];

console.log("Subjects:", subjects);

subjects.push("Node.js");

console.log("After Push:", subjects);

subjects.pop();

console.log("After Pop:", subjects);


//  ARRAY METHODS


let marks = [80, 65, 90, 45, 75];

let passedStudents = marks.filter(function(mark) {
    return mark >= passingMarks;
});

let doubledMarks = marks.map(function(mark) {
    return mark * 2;
});

let total = marks.reduce(function(sum, mark) {
    return sum + mark;
}, 0);

console.log("Passed Marks:", passedStudents);
console.log("Doubled Marks:", doubledMarks);
console.log("Total Marks:", total);


//  LOOP


for (let i = 0; i < subjects.length; i++) {
    console.log("Subject:", subjects[i]);
}


//  OBJECT


let student = {
    name: "Rahul",
    age: 20,
    marks: 85,

    displayInfo: function() {
        console.log(
            this.name +
            " is " +
            this.age +
            " years old."
        );
    }
};

console.log(student.name);
console.log(student.marks);

student.displayInfo();


//  FUNCTION


function calculateResult(name, marks) {

    let grade = getGrade(marks);

    if (marks >= passingMarks) {
        return name + " Passed with grade " + grade;
    }
    else {
        return name + " Failed with grade " + grade;
    }
}

console.log(calculateResult("Rahul", 85));

// 10. ARROW FUNCTION


const welcomeMessage = (name) => {
    return "Welcome " + name;
};

console.log(welcomeMessage("Rahul"));



// 11. DOM MANIPULATION


const form = document.getElementById("studentForm");
const studentList = document.getElementById("studentList");
const message = document.getElementById("message");

// 12. ARRAY OF OBJECTS


let students = [];



//  FORM HANDLING + EVENT LISTENER

form.addEventListener("submit", function(event) {

    // Prevent page refresh
    event.preventDefault();

    // Get values from form
    const name =
        document.getElementById("studentName").value;

    const age =
        Number(document.getElementById("studentAge").value);

    const marks =
        Number(document.getElementById("studentMarks").value);


    
    // VALIDATION
    

    if (marks < 0 || marks > 100) {

        message.textContent =
            "Marks must be between 0 and 100.";

        return;
    }



    // CREATE OBJECT
    

    const newStudent = {

        id: Date.now(),

        name: name,

        age: age,

        marks: marks,

        grade: getGrade(marks)
    };


    // Add object to array
    students.push(newStudent);

    totalStudents++;


    // Display message
    message.textContent =
        "Student added successfully!";


    // Display students
    displayStudents();


    // Clear form
    form.reset();

});



// . DISPLAY FUNCTION


function displayStudents() {

    // Clear previous list
    studentList.innerHTML = "";


    // Loop through students
    students.forEach(function(student) {

        // Create list item
        const li = document.createElement("li");

        li.innerHTML = `
            <strong>${student.name}</strong>
            - Age: ${student.age}
            - Marks: ${student.marks}
            - Grade: ${student.grade}
            <button class="deleteBtn"
                    data-id="${student.id}">
                Delete
            </button>
        `;

        // Add item to list
        studentList.appendChild(li);

    });

}


//. EVENT DELEGATION


studentList.addEventListener("click", function(event) {

    // Check if Delete button was clicked
    if (event.target.classList.contains("deleteBtn")) {

        const id =
            Number(event.target.dataset.id);


        
        students = students.filter(function(student) {

            return student.id !== id;

        });


        totalStudents--;


        
        displayStudents();


        message.textContent =
            "Student deleted successfully.";
    }

});


//. SET TIMEOUT


setTimeout(function() {

    console.log(
        "JavaScript program is running successfully!"
    );

}, 1000);


//DESTRUCTURING


const person = {
    name: "Anil",
    age: 22
};

const { name, age } = person;

console.log(name);
console.log(age);

//SPREAD OPERATOR


const firstSubjects = ["HTML", "CSS"];

const allSubjects = [
    ...firstSubjects,
    "JavaScript",
    "React"
];

console.log(allSubjects);



//  TEMPLATE 

const user = "Rahul";
const userAge = 20;

console.log(
    `My name is ${user} and I am ${userAge} years old.`
);



//  TRY / CATCH


try {

    let result = 10 / 2;

    console.log("Result:", result);

}
catch (error) {

    console.log("Error:", error);

}



console.log("Complete JavaScript Revision Finished!");