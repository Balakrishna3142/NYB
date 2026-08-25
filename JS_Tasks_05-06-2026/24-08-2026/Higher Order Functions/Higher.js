function greet(name) {
    return "Hello " + name;
}

function processUser(name, callback) {
    return callback(name);
}

console.log(processUser("balu", greet));

//map
const numbers = [1, 2, 3, 4];

const doubled = numbers.map(function(num) {
    return num * 2;
});

console.log(doubled);

