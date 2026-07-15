function fetchStudent() {

    return new Promise((resolve) => {

        setTimeout(() => {

            resolve({
                name: "Balakrishna",
                age: 21,
                course: "BCA"
            });

        }, 2000);

    });

}

async function getStudent() {

    const student = await fetchStudent();

    const { name, age, course } = student;

    document.getElementById("output").innerHTML =
        `
        Name: ${name}<br>
        Age: ${age}<br>
        Course: ${course}
        `;

}