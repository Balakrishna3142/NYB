function getData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Data received!");
    }, 2000);
  });
}

async function showData() {
  console.log("Fetching data...");

  const result = await getData();

  console.log(result);
}

showData();