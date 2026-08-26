const animal = {
    eat: function () {
        console.log("Animal is eating");
    }
};

const dog = {};

dog.__proto__ = animal;

dog.eat();