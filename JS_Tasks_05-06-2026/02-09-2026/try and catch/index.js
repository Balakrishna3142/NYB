try {
    let result = 10 / 0;
    console.log(result);

    let x = y; 
} catch (error) {
    console.log("An error occurred!");
    console.log(error.message);
}