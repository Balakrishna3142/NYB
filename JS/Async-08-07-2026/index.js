
//Async

console.log("one")
setTimeout(()=>{
    console.log("two")
}, 0)
setTimeout(()=>{
    console.log("Two 1")
}, 1000)

//million seconds 1 s =100 milliseconds
console.log("three")
let sum=0
for(let i=0; i<1000000; i++){
    sum+=i
}
console.log(sum)




//setTimeout()
//setInterval()
//clearTimeout()
//clearInterval()

//setinterval
let a = setInterval(()=>{
    console.log("four")
}, 3000)


//clear Interval
setTimeout(()=>{
    clearInterval(a)
}, 6000)


for(let i=0; i<3; i++){
    console.log("hello world ")
}

