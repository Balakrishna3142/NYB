const courstList = document.getElementById("cours");
const selectedcours = document.getElementById("selectedcours");

courstList.addEventListener("click", function (event) {

    if (event.target.tagName === "LI") {
        selectedcours.textContent =
            "You selected: " + event.target.textContent;
    }

});