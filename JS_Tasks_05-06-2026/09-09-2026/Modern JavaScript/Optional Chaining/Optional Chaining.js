const student = {
    name: "krishna",
    address: {
        city: "Hyderabad"
    }
};

console.log(student.address?.city);
console.log(student.address?.pincode);
console.log(student.contact?.phone);