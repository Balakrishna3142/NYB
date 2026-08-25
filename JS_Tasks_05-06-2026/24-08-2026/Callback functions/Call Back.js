function greet(name) {
    console.log("Hello " + name);
}

function processUser(callback) {
    const userName = "krishna";
    callback(userName);
}

processUser(greet);