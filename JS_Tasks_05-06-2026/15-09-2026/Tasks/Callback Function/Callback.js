function login(username, callback) {
    console.log(username + " logged in");
    callback();
}

function welcome() {
    console.log("Welcome to the website!");
}

login("nyb", welcome);