function runProgram() {

    let output = "";

    // . Function Declaration
    function add(a, b) {
        return a + b;
    }

    output += "1. Function Declaration: " + add(10, 20) + "\n";


    // . Function Expression
    const multiply = function(a, b) {
        return a * b;
    };

    output += "2. Function Expression: " + multiply(5, 4) + "\n";


    // . Named Function
    const greet = function sayHello(name) {
        return "Hello " + name;
    };

    output += "3. Named Function: " + greet("Ravi") + "\n";


    //  Anonymous Function
    const message = function() {
        return "Welcome to JavaScript";
    };

    output += "4. Anonymous Function: " + message() + "\n";


    // . Arrow Function
    const square = x => x * x;

    output += "5. Arrow Function: " + square(5) + "\n";


    //  Callback Function
    function display(name, callback) {
        return callback(name);
    }

    function welcome(name) {
        return "Welcome " + name;
    }

    output += "6. Callback Function: " +
              display("Ravi", welcome) + "\n";


    //. Higher Order Function
    function calculate(a, b, operation) {
        return operation(a, b);
    }

    output += "7. Higher Order Function: " +
              calculate(10, 5, add) + "\n";


    // 8. First-Class Function
    const myFunction = add;

    output += "8. First-Class Function: " +
              myFunction(2, 3) + "\n";


    // 9. Default Parameters
    function student(name = "Guest") {
        return "Student: " + name;
    }

    output += "9. Default Parameter: " + student() + "\n";
    output += "   With argument: " + student("Ravi") + "\n";


    // 10. Rest Parameters
    function sum(...numbers) {
        let total = 0;

        for (let number of numbers) {
            total += number;
        }

        return total;
    }

    output += "10. Rest Parameters: " +
              sum(10, 20, 30, 40) + "\n";


    // 11. Arguments Object
    function showArguments() {
        return arguments.length;
    }

    output += "11. Arguments Object: " +
              showArguments("A", "B", "C") + "\n";


    // 12. Global Scope
    let globalVariable = "Global";

    function showGlobal() {
        return globalVariable;
    }

    output += "12. Global Scope: " +
              showGlobal() + "\n";


    // 13. Function Scope
    function functionScope() {
        var x = 100;
        return x;
    }

    output += "13. Function Scope: " +
              functionScope() + "\n";


    // 14. Block Scope
    {
        let blockVariable = "Inside Block";

        output += "14. Block Scope: " +
                  blockVariable + "\n";
    }


    // 15. Lexical Scope
    let outerName = "Ravi";

    function outer() {
        let message = "Hello";

        function inner() {
            return message + " " + outerName;
        }

        return inner();
    }

    output += "15. Lexical Scope: " +
              outer() + "\n";


    // 16. Closure
    function counter() {
        let count = 0;

        return function() {
            count++;
            return count;
        };
    }

    const increment = counter();

    output += "16. Closure: " + increment() + "\n";
    output += "   Closure again: " + increment() + "\n";
    output += "   Closure again: " + increment() + "\n";


    // 17. IIFE
    (function() {
        output += "17. IIFE: Function executed immediately\n";
    })();


    // 18. Hoisting
    output += "18. Hoisting with var: " +
              hoistedVariable + "\n";

    var hoistedVariable = 50;


    // 19. var
    var a = 10;
    a = 20;

    output += "19. var: " + a + "\n";


    // 20. let
    let b = 30;
    b = 40;

    output += "20. let: " + b + "\n";


    // 21. const
    const c = 50;

    output += "21. const: " + c + "\n";


    // Display output on webpage
    document.getElementById("output").textContent = output;
}