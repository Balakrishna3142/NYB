

function CreateUser() {
  const createUser = () => {
    const newUser = {
      name: "Bala",
      email: "Balakrishna1072@",
    };

    axios
      .post("https://jsonplaceholder.typicode.com/users", newUser)
      .then((response) => {
        alert("User Created");
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <h2>POST Request</h2>

      <button onClick={createUser}>
        Create User
      </button>
    </div>
  );
}

export default CreateUser;