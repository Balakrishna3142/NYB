import axios from "axios";

function AddUser() {

  const addUser = () => {

    axios
      .post("https://jsonplaceholder.typicode.com/users", {
        name: "Pavan",
        email: "pavan@gmail.com",
      })
      .then((response) => {
        console.log(response.data);
        alert("User Added");
      })
      .catch(console.log);

  };

  return (
    <button onClick={addUser}>
      Add User
    </button>
  );
}

export default AddUser;