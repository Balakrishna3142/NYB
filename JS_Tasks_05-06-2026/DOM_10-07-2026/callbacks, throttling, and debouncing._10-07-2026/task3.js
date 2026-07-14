function debounce(func, delay) {
    let timer;

    return function () {
        clearTimeout(timer);

        timer = setTimeout(() => {
            func();
        }, delay);
    };
}

function searchData() {
    console.log("Searching...");
}

document
.getElementById("search")
.addEventListener("keyup", debounce(searchData, 1000));