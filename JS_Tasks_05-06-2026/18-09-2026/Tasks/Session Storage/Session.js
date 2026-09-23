function saveData() {
    sessionStorage.setItem("username", "nyb");

    document.getElementById("output").innerHTML =
        "Data saved successfully!";
}

function getData() {
    let username = sessionStorage.getItem("username");

    document.getElementById("output").innerHTML =
        "Username: " + username;
}