//Fetch User Data

function getUser() {

    fetch("https://jsonplaceholder.typicode.com/users/1")

        .then(response => response.json())

        .then(data => {

            document.getElementById("result").innerHTML = `
                <h3>User Information</h3>
                <p><b>Name:</b> ${data.name}</p>
                <p><b>Email:</b> ${data.email}</p>
                <p><b>City:</b> ${data.address.city}</p>
            `;

        })

        .catch(error => {

            console.log(error);

        });

}


//Display Multiple Users
function loadUsers() {

fetch("https://jsonplaceholder.typicode.com/users")

.then(response => response.json())

.then(users => {

    let output="";

    users.forEach(user=>{

        output += `
        <li>
            ${user.name} - ${user.email}
        </li>
        `;

    });

    document.getElementById("users").innerHTML=output;

})

.catch(error=>{

    console.log(error);

});

}


//Handle Success and Error
fetch("https://jsonplaceholder.typicode.com/posts/1")

.then(response=>{

    if(!response.ok){

        throw new Error("API Failed");

    }

    return response.json();

})

.then(data=>{

    console.log("Success");

    console.log(data);

})

.catch(error=>{

    console.log("Error : " + error.message);

});

//Error Handling

fetch("https://jsonplaceholder.typicode.com/abc")

.then(response=>{

    if(!response.ok){

        throw new Error("Page Not Found");

    }

    return response.json();

})

.then(data=>{

    console.log(data);

})

.catch(error=>{

    alert(error.message);

});


//asyncand await

async function getData(){

try{

const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");

const data = await response.json();

console.log(data);

}
catch(error){

console.log(error);

}

}

getData();

//Fetch Weather
async function weather(){

const response=await fetch("https://jsonplaceholder.typicode.com/todos/1");

const data=await response.json();

console.log(data);

}

weather();