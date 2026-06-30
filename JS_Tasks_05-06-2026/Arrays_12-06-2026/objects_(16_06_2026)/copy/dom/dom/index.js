//Compare the behavior and use cases of each Promise method. 

let userPromise = Promise.resolve("User");
let postsPromise = Promise.resolve("Posts");
let commentsPromise = Promise.resolve("Comments");

Promise.all([
  userPromise,
  postsPromise,
  commentsPromise
])
.then(data => {
  console.log(data);
})
.catch(err => {
  console.error(err);
});

let apiRequest = new Promise(resolve => {
  setTimeout(() => resolve("Data received"), 3000);
});

let timeout = new Promise((_, reject) => {
  setTimeout(() => reject("Request timed out"), 1000);
});

Promise.race([
  apiRequest,
  timeout
])
.then(console.log)
.catch(console.error)

Promise.allSettled([
  Promise.resolve("File 1 uploaded"),
  Promise.reject("File 2 failed"),
  Promise.resolve("File 3 uploaded")
])
.then(results => {
  console.log(results);
});


let server1 = Promise.reject("Server 1 down");

let  server2 = new Promise(resolve =>
  setTimeout(() => resolve("Server 2 data"), 2000)
);

let server3 = new Promise(resolve =>
  setTimeout(() => resolve("Server 3 data"), 1000)
);

Promise.any([
  server1,
  server2,
  server3
])
.then(console.log)
.catch(console.error)

//
console.log("Start");

const promise = new Promise((resolve) => {
  console.log("Inside Promise");
  resolve("Done")
});

promise.then((result) => {
  console.log(result);
});

console.log("End");

promise.any([package,pb])
.then((a))
console.log(a)


