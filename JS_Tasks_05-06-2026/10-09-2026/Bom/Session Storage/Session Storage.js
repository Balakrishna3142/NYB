function saveCourse() {

    let course = document.getElementById("course").value;

    sessionStorage.setItem("courseName", course);

    document.getElementById("output").innerHTML =
        "Course saved successfully!";
}

function displayCourse() {

    let course = sessionStorage.getItem("courseName");

    document.getElementById("output").innerHTML =
        "Stored Course: " + course;
}

function removeCourse() {

    sessionStorage.removeItem("courseName");

    document.getElementById("output").innerHTML =
        "Course removed!";
}