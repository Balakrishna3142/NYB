function saveName() {
    let name = document.getElementById("name").value;

    localStorage.setItem("username", name);

    document.getElementById("output").innerHTML =
        "Name saved successfully!";
}

function showName() {
    let name = localStorage.getItem("username");

    document.getElementById("output").innerHTML =
        "Stored Name: " + name;
}

function removeName() {
    localStorage.removeItem("username");

    document.getElementById("output").innerHTML =
        "Name removed!";
}