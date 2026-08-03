
function UpdateUser() {
  const updateUser = () => {
    const updatedUser = {
      id: 1,
      name: "Updated Name",
      email: "updated@gmail.com",
    };

    axios
      .put(
        "https://jsonplaceholder.typicode.com/users/1",
        updatedUser
      )
      .then((response) => {
        alert("User Updated");
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <h2>PUT Request</h2>

      <button onClick={updateUser}>
        Update User
      </button>
    </div>
  );
}

export default UpdateUser;