class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    introduce() {
        console.log("My name is " + this.name);
        console.log("My age is " + this.age);
    }
}

const person1 = new Person("bala", 22);

person1.introduce();