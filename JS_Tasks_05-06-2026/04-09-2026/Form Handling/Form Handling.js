const form = document.getElementById("registrationForm");
const result = document.getElementById("result");

form.addEventListener("submit", function (event) {

    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;

    result.textContent =
        "Registration successful! Name: " + name +
        ", Email: " + email;
});