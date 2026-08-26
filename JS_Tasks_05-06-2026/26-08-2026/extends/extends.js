class Animal {
    eat() {
        console.log("Animal is eating");
    }
}

class Cat extends Animal {
    meow() {
        console.log("Cat says Meow");
    }
}

const cat = new Cat();

cat.eat();
cat.meow();