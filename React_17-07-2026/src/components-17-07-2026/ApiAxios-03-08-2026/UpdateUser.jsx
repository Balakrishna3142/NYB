import axios from "axios";

function UpdateUser() {

  const updateUser = () => {

    axios
      .put("https://jsonplaceholder.typicode.com/users/1", {
        name: "Updated Name",
        email: "updated@gmail.com",
      })
      .then((response) => {
        console.log(response.data);
        alert("Updated Successfully");
      })
      .catch(console.log);

  };

  return (
    <button onClick={updateUser}>
      Update User
    </button>
  );
}

export default UpdateUser;