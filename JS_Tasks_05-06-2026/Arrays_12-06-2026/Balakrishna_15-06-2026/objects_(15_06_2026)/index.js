//sorting with built in methods
const arr = [5, 2, 9, 1, 5, 6];

for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr.length - i - 1; j++) {
    if (arr[j] > arr[j + 1]) {
      let temp = arr[j];
      arr[j] = arr[j + 1];
      arr[j + 1] = temp;
    }
  }
}

console.log(arr);
//for each
const numbers = [10, 20, 30, 40];

let sum = 0;

numbers.forEach(num => {
  sum += num;
});

console.log(sum);



//objects:4 ways

//Objectliteral

let b ={}
console.log (b)
let a =new Object()
console.log(a)

//new key word

var obj ={one:"a",b:"hello",c:20}
console.log(obj.c)
console.log(obj["one"])
obj.hello="good mrng"
console.log(obj)
delete obj.c
obj.b="hii"
console.log(obj)