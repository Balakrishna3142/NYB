//Promise.allSettled()
const p1 = Promise.resolve("Success");

const p2 = Promise.reject("Failed");

const p3 = Promise.resolve("Completed");

Promise.allSettled([p1,p2,p3])

.then(console.log);