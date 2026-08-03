

function PatchUser() {
  const patchUser = () => {
    axios
      .patch(
        "https://jsonplaceholder.typicode.com/users/1",
        {
          name: "Patched Name",
        }
      )
      .then((response) => {
        alert("User Patched");
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <h2>PATCH Request</h2>

      <button onClick={patchUser}>
        Patch User
      </button>
    </div>
  );
}

export default PatchUser;