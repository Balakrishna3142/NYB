function saveData() {
    let name = document.getElementById("name").value;

    localStorage.setItem("username", name);

    alert("Data Saved!");
}

function showData() {
    let name = localStorage.getItem("username");

    document.getElementById("output").innerHTML =
    "Stored Name: " + name;
}