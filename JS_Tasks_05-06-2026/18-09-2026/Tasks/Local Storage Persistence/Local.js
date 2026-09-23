function saveName() {
    let name = document.getElementById("name").value;

    localStorage.setItem("name", name);

    document.getElementById("result").innerHTML =
        "Name saved successfully!";
}

function loadName() {
    let name = localStorage.getItem("name");

    if (name) {
        document.getElementById("result").innerHTML =
            "Saved Name: " + name;
    } else {
        document.getElementById("result").innerHTML =
            "No data found";
    }
}