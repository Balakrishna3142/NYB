

//  Global Scope
let globalName = "krishna";

function display() {
    console.log("Global Scope:", globalName);

    //  Function Scope
    let age = 20;
    console.log("Function Scope:", age);

    //  Block Scope
    if (age >= 18) {
        let city = "Guntur";
        const country = "India";

        console.log("Block Scope - City:", city);
        console.log("Block Scope - Country:", country);
    }
}

display();

console.log("Global Scope Outside Function:", globalName);