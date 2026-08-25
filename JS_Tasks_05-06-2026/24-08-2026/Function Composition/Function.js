function double(x) {
  return x * 2;
}

function addTen(x) {
  return x + 10;
}

const result = addTen(double(5));

console.log(result);