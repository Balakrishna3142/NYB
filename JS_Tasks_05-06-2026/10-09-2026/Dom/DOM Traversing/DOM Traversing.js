function traverseDOM() {

    // Select the second paragraph
    let second = document.getElementById("second");

    // 1. Parent Element
    console.log("Parent:");
    console.log(second.parentElement);

    // 2. Previous Sibling
    console.log("Previous Sibling:");
    console.log(second.previousElementSibling.innerHTML);

    // 3. Next Sibling
    console.log("Next Sibling:");
    console.log(second.nextElementSibling.innerHTML);

    // 4. First Child of Parent
    console.log("First Child:");
    console.log(second.parentElement.firstElementChild.innerHTML);

    // 5. Last Child of Parent
    console.log("Last Child:");
    console.log(second.parentElement.lastElementChild.innerHTML);

    // 6. Number of Children
    console.log("Number of Children:");
    console.log(second.parentElement.children.length);
}