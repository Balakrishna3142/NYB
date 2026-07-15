function showMarks() {

    const marks = [85, 90, 78];

    const [math, science, english] = marks;

    document.getElementById("marks").innerHTML =
        `
        Math: ${math}<br>
        Science: ${science}<br>
        English: ${english}
        `;
}