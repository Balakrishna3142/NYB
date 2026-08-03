import axios from "axios";

function DeleteUser() {

  const deleteUser = () => {

    axios
      .delete("https://jsonplaceholder.typicode.com/users/1")
      .then(() => {
        alert("User Deleted");
      })
      .catch(console.log);

  };

  return (
    <button onClick={deleteUser}>
      Delete User
    </button>
  );
}

export default DeleteUser;