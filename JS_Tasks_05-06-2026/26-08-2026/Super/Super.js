class Person {
    constructor(name) {
        this.name = name;
    }
}

class Employee extends Person {
    constructor(name, salary) {
        super(name);
        this.salary = salary;
    }

    display() {
        console.log("Name:", this.name);
        console.log("Salary:", this.salary);
    }
}

const emp = new Employee("Ravi", 40000);

emp.display();