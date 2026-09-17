// Original object
let person1 = {
    name: "John",
    age: 25,
    address: {
        city: "Hyderabad"
    }
};

// Shallow copy
let person2 = { ...person1 };

// Change top-level property
person2.name = "David";

// Change nested property
person2.address.city = "Chennai";

console.log(person1);
console.log(person2);