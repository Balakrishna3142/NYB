

//Create examples using Promise.all(), Promise.race(), Promise.allSettled(), and Promise.any().

//promise
let p = new Promise((resolve,reject) => {

    let status =false
    if(status){
        //console.log("Resolved")
        resolve("function succes")
    }
    else{
        //console.log("Reject")
        reject("error")
    }
})
p
.then((a)=>{
    console.log(a)

})
.catch((b)=>{
    console.log(b)
})

//promise all

let p1 = Promise.resolve("balu")
let p2 = Promise.resolve("ram")
let p3 = Promise.resolve("krish")

Promise.all([p1, p2, p3])
  .then(results => {
    console.log(results)
  })
  .catch(error => {
    console.error(error)
  })

  //promis race
  let slow = new Promise(resolve =>
  setTimeout(() => resolve("Slow response"), 3000)
);

let fast = new Promise(resolve =>
  setTimeout(() => resolve("Fast response"), 1000)
);

Promise.race([slow, fast])
  .then(result => console.log(result))
  .catch(error => console.error(error))

let p4 = Promise.resolve("User Data");
let p5 = Promise.reject("error");
let p6 = Promise.resolve("Settings Data")

const promise = new Promise((resolve) => {
  resolve("Success")
});

promise.then((result) => {
  console.log(result)
})

letpromise = new Promise((resolve, reject) => {
  reject("Something went wrong")
})

promise.catch((error) => {
  console.log(error);
})



