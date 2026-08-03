

function DeleteUser() {
  const deleteUser = () => {
    axios
      .delete("https://jsonplaceholder.typicode.com/users/1")
      .then(() => {
        alert("User Deleted");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <h2>DELETE Request</h2>

      <button onClick={deleteUser}>
        Delete User
      </button>
    </div>
  );
}

export default DeleteUser;