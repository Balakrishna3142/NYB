function showIterator() {

    const fruits = ["Apple", "Banana", "Orange"];

    // Get the iterator
    const iterator = fruits[Symbol.iterator]();

    let result = "";

    result += JSON.stringify(iterator.next()) + "<br>";
    result += JSON.stringify(iterator.next()) + "<br>";
    result += JSON.stringify(iterator.next()) + "<br>";
    result += JSON.stringify(iterator.next()) + "<br>";

    document.getElementById("output").innerHTML = result;
}