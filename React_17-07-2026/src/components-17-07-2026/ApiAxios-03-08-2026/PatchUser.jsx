import axios from "axios";

function PatchUser() {

  const patchUser = () => {

    axios
      .patch("https://jsonplaceholder.typicode.com/users/1", {
        name: "Only Name Updated",
      })
      .then((response) => {
        console.log(response.data);
        alert("Patched Successfully");
      })
      .catch(console.log);

  };

  return (
    <button onClick={patchUser}>
      Patch User
    </button>
  );
}

export default PatchUser;