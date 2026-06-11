//Array
var arr=[1,2,3,4]
console.log(arr)
// ading an elements to an array":
//push
//push is used toadd the elments at the end of the arry
arr.push(5)
console.log(arr)
arr.push(6)
console.log(arr)


//unshift
//un shift is usd to ad the elements of the begining of the array

arr.unshift(8)
console.log(arr)



//referenc of the array
var a=[1,2,3,4]
console.log(a[0])
console.log(a[3])

//splice:we can add at any wrer
//index value,deletecount,new
arr.splice(2,0,"hello")
console.log(arr)

//Removing Elements from an Array

//pop
//
arr.pop()
console.log(arr)


//Removing Elements from an Array
//shift
arr.shift()
console.log(arr)

//splice
arr.splice(1,1)
console.log(arr)

//indexoff
let num =[100,1,2,3,4]
console.log(num)
console.log(num[2])
console.log(num.indexOf(0))

//includes
console.log(num)
console.log(num[2])
console.log(num.includes(0))
console.log(num.includes(3))

//splice
num1.splice(0,arr.length)
console.log(num1)
