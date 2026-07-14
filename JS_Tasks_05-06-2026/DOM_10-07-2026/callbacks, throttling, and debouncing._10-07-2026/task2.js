function throttle(func, delay) {
    let lastCall = 0;

    return function () {
        let now = Date.now();

        if (now - lastCall >= delay) {
            lastCall = now;
            func();
        }
    };
}

function showScroll() {
    console.log("Scrolling...");
}

window.addEventListener("scroll", throttle(showScroll, 500));
