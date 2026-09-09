let marks = 75;

// 1. if statement
if (marks >= 35) {
    console.log("Student has passed.");
}

//  if...else statement
if (marks >= 50) {
    console.log("Student got First Class.");
} else {
    console.log("Student did not get First Class.");
}

//  else if statement
if (marks >= 90) {
    console.log("Grade: A+");
} else if (marks >= 75) {
    console.log("Grade: A");
} else if (marks >= 60) {
    console.log("Grade: B");
} else if (marks >= 35) {
    console.log("Grade: C");
} else {
    console.log("Grade: Fail");
}

//  switch statement
let day = 2;

switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    default:
        console.log("Invalid day");
}