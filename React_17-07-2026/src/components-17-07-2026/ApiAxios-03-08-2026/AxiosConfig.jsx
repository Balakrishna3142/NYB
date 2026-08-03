import React from 'react'
import axios from "axios"
const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 5000,
});

function AxiosConfig() {
     const getUsers = () => {
    api.get("/users")
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
 <h2>Axios Common Configuration</h2>

      <button onClick={getUsers}>
        Get Users
      </button>
    </div>
  )
}

export default AxiosConfig