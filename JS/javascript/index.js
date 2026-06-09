//1.for loop
for (let i = 0; i < 5; i++) {
    console.log(i);
}
let grads = [8,9,7];
for (let i = 0; i < grads.length; i++) {
    grade(grads[i]);

    //function grade
}
function grade(g) {
    switch(g) {
        case 10:
            console.log("excellent");
            break;
        case 9:
            console.log("good");
            break;
        case 8:
            console.log("average");
            break;
        case 7:
            console.log("poor");
            break;
    }


}
