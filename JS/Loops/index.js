//for Loops
for(let i=0; i<5; i++){
    console.log(i)


}


//function add

let grades = [8,10,7];
for (let i = 0; i < grades.length; i++) {
    function grade(g) {
        switch (g) {
            case 10:
                console.log("Excellent");
                break;
            case 9:
                console.log("Good");
                break;
            case 8:
                console.log("Average");
                break;
            default:
                console.log("Invalid grade");
        }
    }
    grade(grades[i]);
}

2//while loop
 let i=1
 let count=0
 // list of even numbers
 while(count<10){
     if(i%2==0){
         console.log(i)
         count++
     }
     i+=1
     //count++
 }
 
 3//do while loop
  do{
    console.log("hello")
  } while (false);
  while (false) {
    console.log("hii")
  }

  //4.infinite loop

 // 2 typ..of infinite loop
//1.for of loop

// 2.for in loop

    //for of loop

  let array = [1, 2,3,]
  console.log(array)
  for (a of array){
    console.log(a)
  }
  let obj ={a:"hello",b:"hii"}
  console.log(obj[a])
  console.log(obj["a"])

  //for in loop
  for (i in obj){

    console.log(obj[i])
    }
