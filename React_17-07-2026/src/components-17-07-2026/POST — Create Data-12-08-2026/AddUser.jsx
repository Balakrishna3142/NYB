import axios from "axios";

function AddUser() {
  const addUser = async () => {
    try {
      const response = await axios.post(
        "https://jsonplaceholder.typicode.com/users",
        {
          name: "bala",
          email: "bala@gmail.com"
        }
      );

      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <button onClick={addUser}>
      Add User
    </button>
  );
}

export default AddUser;