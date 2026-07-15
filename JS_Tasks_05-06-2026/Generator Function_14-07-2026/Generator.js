function* numbers() {

    yield 10;
    yield 20;
    yield 30;

}

function runGenerator() {

    const gen = numbers();

    let output = "";

    output += JSON.stringify(gen.next()) + "<br>";
    output += JSON.stringify(gen.next()) + "<br>";
    output += JSON.stringify(gen.next()) + "<br>";
    output += JSON.stringify(gen.next()) + "<br>";

    document.getElementById("demo").innerHTML = output;

}