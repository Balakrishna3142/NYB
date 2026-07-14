//Async and await

function hai(){
return new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("done")
    },2000)

    })
}

async function hello(){
    return await hai()

    
}
let s= hello()
console.log(s)
