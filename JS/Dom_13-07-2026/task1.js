//p
//.then()  // success  case resole
//.catch() // failure // reject



//p
//.then((a)=>{
  // console.log(a)

//})

//.catch((b)=>{
  //  console.log(b)
//})


//pending  resolve/reject


//create a new promise

//new promise(()=>{
//})


let ab=Promise.resolve("p1 completed")
let ba=Promise.reject("p2 failed")


//promise all

Promise.all([ab,ba])
.then((a)=>{
    console.log(a)
})

.catch((a)=>{
    console.log(a)



})



//promise.race()
let pa= new Promise( (resolve,reject)=>{
    setTimeout(()=>{
        reject("pa is done")
    },1000)
})



let pb= new Promise( (resolve)=>{
    setTimeout(()=>{
        resolve("pb is done")
    },500)
})


Promise.race([pa,pb])
.then((pa)=>{
    console.log(pa)
})

.catch((pa)=>{
    console.log(pa)
})


//promise.allsettled()
Promise.allSettled([pa,pb])
.then((a)=>{
    console.log(a)
})


//promise.any
Promise.any([pa,pb])
.then((a)=>{
    console.log(a)

})