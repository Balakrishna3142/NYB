
//  Timer and Execution Order


console.log("1. Program Started");

setTimeout(() => {
    console.log("2. Timer executed");
}, 0);


//  Promise Creation


const getStudent = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({
            name: "Rahul",
            age: 21,
            marks: [80, 90, 85]
        });
    }, 1000);
});



//  Class and Inheritance

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    introduce() {
        console.log(`Student name is ${this.name}`);
    }
}

class Student extends Person {
    constructor(name, age, course) {
        super(name, age);
        this.course = course;
    }

    display() {
        console.log(
            `${this.name} is ${this.age} years old and studies ${this.course}`
        );
    }
}



//  Async/Await + Try/Catch

async function main() {

    try {

        console.log("3. Waiting for student data...");

        const data = await getStudent;

        console.log("4. Promise resolved");

    
        // Destructuring
        

        const { name, age, marks } = data;

        console.log(`Name: ${name}`);
        console.log(`Age: ${age}`);


        // ================================
        // 6. Spread Operator
        // ================================

        const newMarks = [...marks, 95];

        console.log("Marks:", newMarks);


        // ================================
        // 7. Rest Operator
        // ================================

        function calculateTotal(...numbers) {
            return numbers.reduce((total, num) => total + num, 0);
        }

        const total = calculateTotal(...newMarks);

        console.log("Total Marks:", total);


        // ================================
        // 8. Set
        // ================================

        const subjects = new Set([
            "JavaScript",
            "HTML",
            "CSS",
            "JavaScript"
        ]);

        console.log("Subjects:", [...subjects]);


        // ================================
        // 9. Map
        // ================================

        const studentMarks = new Map();

        studentMarks.set("Math", 90);
        studentMarks.set("JavaScript", 95);
        studentMarks.set("HTML", 85);

        console.log(
            "JavaScript Mark:",
            studentMarks.get("JavaScript")
        );


        // ================================
        // 10. Class Object
        // ================================

        const student = new Student(
            name,
            age,
            "Computer Science"
        );

        student.introduce();
        student.display();


        // ================================
        // 11. Optional Chaining
        // ================================

        console.log(
            "City:",
            data.address?.city
        );


        // ================================
        // 12. Nullish Coalescing
        // ================================

        console.log(
            "City:",
            data.address?.city ?? "City not available"
        );


        // ================================
        // 13. Custom Iterator
        // ================================

        const numbers = {
            start: 1,
            end: 3,

            [Symbol.iterator]() {
                let current = this.start;

                return {
                    next: () => {
                        if (current <= this.end) {
                            return {
                                value: current++,
                                done: false
                            };
                        }

                        return {
                            value: undefined,
                            done: true
                        };
                    }
                };
            }
        };

        console.log("Iterator:");

        for (const number of numbers) {
            console.log(number);
        }


        // ================================
        // 14. Generator
        // ================================

        function* generateNumbers() {
            yield 10;
            yield 20;
            yield 30;
        }

        console.log("Generator:");

        const generator = generateNumbers();

        console.log(generator.next().value);
        console.log(generator.next().value);
        console.log(generator.next().value);


        // ================================
        // 15. Promise Chaining
        // ================================

        Promise.resolve(10)
            .then(num => {
                return num * 2;
            })
            .then(num => {
                return num + 5;
            })
            .then(result => {
                console.log("Promise Chain Result:", result);
            });


        // ================================
        // 16. Fetch API
        // ================================

        console.log("Loading API data...");

        const response = await fetch(
            "https://jsonplaceholder.typicode.com/users"
        );

        if (!response.ok) {
            throw new Error("API request failed");
        }

        const users = await response.json();


        // ================================
        // 17. Loading / Success / Empty
    

        if (users.length === 0) {
            console.log("No users found");
        } else {
            console.log("API Success");
            console.log("Number of Users:", users.length);
        }

    } catch (error) {

        
        //  Error Handling
        

        console.log("Error:", error.message);
    }
}

main();



//  Prototype Example

Student.prototype.study = function () {
    console.log(`${this.name} is studying JavaScript`);
};

const student2 = new Student(
    "Priya",
    20,
    "Computer Science"
);

student2.study();



console.log("5. Program Ended");