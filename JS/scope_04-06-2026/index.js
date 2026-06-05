//global scope
let a=10
function sum(a,b){
    console.log(a+b)
    console.log(a)
    
}
sum(10,20)

//functionl scope
function student(){
    var name="krishna"
    console.log(name)

}
student()

//Block Scope
if(true){
    let age=30
    console.log(age)
}
if(true){
    const city="kanigiri"
    console.log(city)
}
if(true){
    var name="bala"
}
console.log(name)

let globalVar="Global scope"
function outerfunction(){
    let functionvar="function scope"
    if(true){
        let blockvar="block scope"
        console.log(globalVar)
        console.log(functionvar)
        console.log(blockvar)

    }
}
outerfunction()