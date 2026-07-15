function saveCity() {

    let city = document.getElementById("city").value;

    sessionStorage.setItem("city", city);

    alert("City Saved");
}

function showCity() {

    let city = sessionStorage.getItem("city");

    document.getElementById("result").innerHTML =
    "City: " + city;
}