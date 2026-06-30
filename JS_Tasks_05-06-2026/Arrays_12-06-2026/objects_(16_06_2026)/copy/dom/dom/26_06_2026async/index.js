//async 
async function greet() {
  return "Hello, ";
}

greet().then(result => {
  console.log(result)

});

//await

function fetchData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Data Loaded");
    }, 2000);
  });
}

async function displayData() {
  console.log("Loading...")
  const result = await fetchData();
  console.log(result);
}

displayData();