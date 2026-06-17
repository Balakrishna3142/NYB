// observations with sample outputs.
const original = {
  name: "John",
  address: {
    city: "New York"
  }
};

// Shallow Copy
const shallowCopy = { ...original };
shallowCopy.address.city = "London";

console.log("Original:", original);
console.log("Shallow Copy:", shallowCopy);

// Deep Copy
const deepCopy = JSON.parse(JSON.stringify(original));
deepCopy.address.city = "Paris";

console.log("Original after Deep Copy:", original);
console.log("Deep Copy:", deepCopy);