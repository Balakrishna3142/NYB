//Promise.any()

const p1 = Promise.reject("Error");

const p2 = new Promise(resolve=>{

    setTimeout(()=>{

        resolve("JavaScript");

    },2000);

});

const p3 = Promise.resolve("React");

Promise.any([p1,p2,p3])

.then(console.log);