import axios from "axios";

function UpdateUser() {
  const updateUser = async () => {
    try {
      const response = await axios.put(
        "https://jsonplaceholder.typicode.com/users/1",
        {
          name: "Rahul Kumar",
          email: "rahul@gmail.com"
        }
      );

      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <button onClick={updateUser}>
      Update User
    </button>
  );
}

export default UpdateUser;