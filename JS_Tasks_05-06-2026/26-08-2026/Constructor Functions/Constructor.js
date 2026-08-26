function Person(name, age) {
    this.name = name;
    this.age = age;
}

const person1 = new Person("bala", 22);
const person2 = new Person("pavani", 21);

console.log(person1.name);
console.log(person1.age);

console.log(person2.name);
console.log(person2.age);