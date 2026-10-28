
function runExamples() {
    let output = "";

    function show(title, value) {
        output += title + ": " + JSON.stringify(value) + "\n\n";
    }

    // Creating Arrays
    let fruits = ["Apple", "Banana", "Mango"];
    show("1. Creating Arrays", fruits);

    //  Accessing Elements
    show("2. First Element", fruits[0]);
    show("   Third Element", fruits[2]);

    //  Adding and Removing Elements
    let items = ["Pen", "Book"];
    items.push("Pencil");
    items.pop();
    show("3. Adding and Removing", items);

    //  push() - Add to the end
    let a = [10, 20];
    a.push(30);
    show("4. push()", a);

    //  pop() - Remove from the end
    let b = [10, 20, 30];
    b.pop();
    show("5. pop()", b);

    //  shift() - Remove from the beginning
    let c = [10, 20, 30];
    c.shift();
    show("6. shift()", c);

    // unshift() - Add to the beginning
    let d = [20, 30];
    d.unshift(10);
    show("7. unshift()", d);

    //  slice() - Copy a portion
    let e = [10, 20, 30, 40, 50];
    show("8. slice(1, 3)", e.slice(1, 3));

    //  splice() - Remove or add elements
    let f = ["A", "B", "C", "D"];
    f.splice(1, 2);
    show("9. splice(1, 2)", f);

    //  concat() - Join arrays
    let g = [1, 2].concat([3, 4]);
    show("10. concat()", g);

    // includes() - Check if value exists
    let h = ["Apple", "Banana"];
    show("11. includes('Apple')", h.includes("Apple"));

    //  indexOf() - Find the index
    let i = ["Red", "Green", "Blue"];
    show("12. indexOf('Green')", i.indexOf("Green"));

    //  find() - First matching element
    let j = [5, 10, 15, 20];
    show("13. find(n => n > 10)", j.find(n => n > 10));

    //  findIndex() - Index of first match
    show("14. findIndex(n => n > 10)",
         j.findIndex(n => n > 10));

    //  filter() - All matching elements
    show("15. filter(n => n > 10)",
         j.filter(n => n > 10));

    //  map() - Transform each element
    show("16. map(n => n * 2)",
         j.map(n => n * 2));

    //  reduce() - Calculate one value
    show("17. reduce(sum)",
         j.reduce((sum, n) => sum + n, 0));

    //  some() - At least one matches
    show("18. some(n => n > 15)",
         j.some(n => n > 15));

    //  every() - All elements match
    show("19. every(n => n > 0)",
         j.every(n => n > 0));

    //  sort() - Sort elements
    let k = [40, 10, 30, 20];
    k.sort((a, b) => a - b);
    show("20. sort()", k);

    //  forEach() - Perform action for each element
    let l = ["HTML", "CSS", "JavaScript"];
    let result = [];
    l.forEach((item) => {
        result.push(item);
    });
    show("21. forEach()", result);

    document.getElementById("output").textContent = output;
}
