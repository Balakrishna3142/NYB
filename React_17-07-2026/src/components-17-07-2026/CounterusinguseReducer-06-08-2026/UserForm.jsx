import { useReducer } from "react";

const initialState = {
  name: "",
  email: "",
};

function reducer(state, action) {
  switch (action.type) {
    case "name":
      return {
        ...state,
        name: action.payload,
      };

    case "email":
      return {
        ...state,
        email: action.payload,
      };

    case "reset":
      return initialState;

    default:
      return state;
  }
}

function UserForm() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h2>User Form</h2>

      <input
        placeholder="Enter Name"
        value={state.name}
        onChange={(e) =>
          dispatch({
            type: "name",
            payload: e.target.value,
          })
        }
      />

      <br /><br />

      <input
        placeholder="Enter Email"
        value={state.email}
        onChange={(e) =>
          dispatch({
            type: "email",
            payload: e.target.value,
          })
        }
      />

      <br /><br />

      <button onClick={() => dispatch({ type: "reset" })}>
        Reset
      </button>

      <h3>Name : {state.name}</h3>
      <h3>Email : {state.email}</h3>
    </div>
  );
}

export default UserForm;