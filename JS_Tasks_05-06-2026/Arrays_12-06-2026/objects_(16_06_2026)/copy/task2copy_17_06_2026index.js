//deep copy using JSON method
const obj = {
  date: new Date(),
  fn: () => console.log("Hello"),
  value: undefined
};

const copy = JSON.parse(JSON.stringify(obj));

console.log(copy);
//differences between shallow and deep copy.
const original = {
  name: "krishna",
  address: {
    city: "kphb"
  }
};

const shallowCopy = { ...original };

shallowCopy.address.city = "hyd";

console.log(original.address.city); 
console.log(shallowCopy.address.city); 
console.log(deepCopy.address.city);