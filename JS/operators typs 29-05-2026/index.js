//1.Arithmetic operators

//1) Addition (+)
//2) Subtraction (-)
//3) Subdivision (/)
//4) Modulus (%)
//5) Increment (++)
//6) Decrement (--)
//7) Multiplication (*)
//8) Exponential (**)


var a=20
var b=5
console.log(a/b)
console.log(a%b)

//1.increment.pre-increment
           // (ii)post-increment

            console.log(a)
            console.log(++a)
            console.log(a++)
            console.log(a)

//2.decrement   (i) pre decresment
            //(ii) post decrement
            console.log(a)
            console.log(--a)
            console.log(a--)
            console.log(a)

          //  2. assignment operators
          //   1) Assignment (-=)
            //    2) addition assignment (+=)


                var A=2
                var  B=3
            console.log(B)
            B+=A
            console.log(B)
            console.log(B)

            //  3. comparison operators
            //   1)Greater than (>)
            //   2) Less than (<)
            //   3)loose Equal to (==)
            //   4) Strict equal to (===)
            //   5) loose not equal to (!=)
            //   6) Strict not equal to (!==)
            //   7) Greater than or equal to (>=)
            //   8) Less than or equal to (<=)
            //1.Greater than (>)
            //2.) Less than (<)

            //1.Greater than (>
             var a=10
             var b=5
             console.log(a>b)
             //2.less than(<)
             var a=10
             var b=5
             console.log(a<b)
                //3.loose equal to (==)
                var a=10
                var b="10"
                console.log(a==b)
                //4.strict equal to (===)

                console.log(a===b)

            //a<=
            console.log(a<=b)
            //a>=
            console.log(a>=b)

//!=loose inequity 
console.log("loose in equality",a!=b)
//!==strict inequality
console.log("strict inequality",a!==b)

//logical opeators
//1) logical and (&&)
//2) logical 0r (||)
//3) logical not (!)

console.log((2<4) && (5>3))
console.log ((2<4) || (2<3))
console.log (!(2<4))

//ternary operator
//syntax: condition ? truue value :false value
var age=18
var result=age>=18 ? "you are eligible to vote" : "your are not eligible to vote"
console.log(result)

//string operatores
var firestname="bala"
var lastname="parimi"
var middlename="krishna"
var fullname=firestname+" "+middlename+" "+lastname
console.log(fullname)

//templet literal
console.log(`my name is ${fullname} and I am 18 years old`)