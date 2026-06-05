//Recursive function:-
function countDown(num){
    if (num === 0){
        console.log("Hi")

return;
    }
    console.log(num);
    countDown(num-1);
}
countDown(10)


function factorial(hello){
    if (hello === 1){//condition met
        return 1;
    }
    return hello* factorial(hello-1);//n*factorail(n-1) :-formula of factorial

}
console.log(factorial(5))
//factorial(5)
//5*factorial(4)
//5 *4* factorial(3)
//5*4*3*factorial(2)
//5*4*3*2*factial(1)
//5*4*3*2*1


 //pure function
 function add(a, b) {
    return a + b;
}

console.log(add(2, 3)); // 5
console.log(add(2, 3)); // 5

//in pure function
function square(num) {
    return num * num;
}

console.log(square(4)); 
console.log(square(4)); 