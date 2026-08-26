function Person(name) {
    this.name = name;
}

Person.prototype.greet = function () {
    return "Hello " + this.name;
};

const person1 = new Person("Bala");

console.log(person1.greet());