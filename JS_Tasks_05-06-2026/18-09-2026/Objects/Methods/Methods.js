const student = {
    name: "Rahul",

    greet: function() {
        console.log("Hello " + this.name);
    }
};

student.greet();

//Class method

class Student {
    greet() {
        console.log("Hello Student");
    }
}

const s1 = new Student();

s1.greet();