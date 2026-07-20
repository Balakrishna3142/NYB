function validate() {
    const num = Number(document.getElementById("number").value);
    const msg = document.getElementById("msg");

    try {
        if (num < 1 || num > 10) {
            throw "Number must be between 1 and 10.";
        }

        msg.innerHTML = "Valid Number";
    }
    catch (error) {
        msg.innerHTML = "Error: " + error;
    }
    finally {
        console.log("Validation Finished.");
    }
}