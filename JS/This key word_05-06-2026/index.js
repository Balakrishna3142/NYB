//this is keyword
function hello(){
    console.log(this)

}
hello()
let obj={
    name:"balakrishna"

}
console.log(obj.name)
//call
function hello (a,b){

    console.log(this)
    console.log(a,b)

}
hello.call(obj,10,20)

//apply 
hello.apply(obj,[10,20])
// bind
hello.bind(obj,10,20)()
