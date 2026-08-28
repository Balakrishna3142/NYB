console.log("Start");
//setTimeout
setTimeout(() => {
    console.log("welcome to  nyb after 5 seconds");
}, 5000);
//fetch
fetch("https://jsonplaceholder.typicode.com/users/1")
    .then(response => response.json())
    .then(data => {
        console.log(data);
    });
console.log("End");