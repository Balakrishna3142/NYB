//Promise.race
const p1 = new Promise(resolve=>{

    setTimeout(()=>{

        resolve("First");

    },1000);

});

const p2 = new Promise(resolve=>{

    setTimeout(()=>{

        resolve("Second");

    },3000);

});

Promise.race([p1,p2])

.then(console.log);




