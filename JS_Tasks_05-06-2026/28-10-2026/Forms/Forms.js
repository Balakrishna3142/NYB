
const form = document.getElementById("myForm");
const role = document.getElementById("role");
const extraField = document.getElementById("extraField");

//  Dynamic Form Updates
role.addEventListener("change", function () {
    if (role.value === "student") {
        extraField.innerHTML = `
            <label for="extra">College Name *</label>
            <input type="text" id="extra" required>
            <div class="error" id="extraError"></div>
        `;
    } else if (role.value === "employee") {
        extraField.innerHTML = `
            <label for="extra">Company Name *</label>
            <input type="text" id="extra" required>
            <div class="error" id="extraError"></div>
        `;
    } else {
        extraField.innerHTML = "";
    }
});

// Form Submission
form.addEventListener("submit", function (event) {
    event.preventDefault();

    let valid = true;
    const message = document.getElementById("message");

    //  Clear Previous Error Messages
    document.querySelectorAll(".error").forEach(function (element) {
        element.textContent = "";
    });

    message.textContent = "";

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email");
    const password = document.getElementById("password").value;
    const confirm = document.getElementById("confirm").value;
    const terms = document.getElementById("terms").checked;

    // 4. Required Fields and Custom Validation

    // Name validation
    if (name === "") {
        document.getElementById("nameError").textContent =
            "Name is required.";
        valid = false;
    } else if (name.length < 2) {
        document.getElementById("nameError").textContent =
            "Name must contain at least 2 characters.";
        valid = false;
    }

    // Email validation
    if (email.value.trim() === "") {
        document.getElementById("emailError").textContent =
            "Email is required.";
        valid = false;
    } else if (!email.checkValidity()) {
        document.getElementById("emailError").textContent =
            "Enter a valid email address.";
        valid = false;
    }

    // Password validation
    if (password === "") {
        document.getElementById("passwordError").textContent =
            "Password is required.";
        valid = false;
    } else if (password.length < 8 || !/[0-9]/.test(password)) {
        document.getElementById("passwordError").textContent =
            "Password needs 8 characters and at least one number.";
        valid = false;
    }

    // Confirm password validation
    if (confirm === "") {
        document.getElementById("confirmError").textContent =
            "Please confirm your password.";
        valid = false;
    } else if (password !== confirm) {
        document.getElementById("confirmError").textContent =
            "Passwords do not match.";
        valid = false;
    }

    // Role validation
    if (role.value === "") {
        document.getElementById("roleError").textContent =
            "Please select a role.";
        valid = false;
    }

    // Dynamic field validation
    const extra = document.getElementById("extra");

    if (extra && extra.value.trim() === "") {
        document.getElementById("extraError").textContent =
            "This field is required.";
        valid = false;
    }

    // Required terms checkbox
    if (!terms) {
        document.getElementById("termsError").textContent =
            "You must agree to the terms.";
        valid = false;
    }

    // 5. Display Error Messages or Success
    if (valid) {
        message.style.color = "green";
        message.textContent = "Form submitted successfully!";

        form.reset();
        extraField.innerHTML = "";
    } else {
        message.style.color = "red";
        message.textContent = "Please correct the errors above.";
    }
});
