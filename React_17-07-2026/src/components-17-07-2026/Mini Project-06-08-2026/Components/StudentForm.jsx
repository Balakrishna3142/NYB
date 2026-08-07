import { useReducer } from "react";

const initialState = {
  name: "",
  course: "",
};

function reducer(state, action) {

  switch (action.type) {

    case "name":
      return {
        ...state,
        name: action.payload,
      };

    case "course":
      return {
        ...state,
        course: action.payload,
      };

    case "reset":
      return initialState;

    default:
      return state;
  }
}

function StudentForm() {

  const [state, dispatch] =
    useReducer(reducer, initialState);

  return (
    <div>

      <h2>Add Student</h2>

      <input
        placeholder="Name"
        value={state.name}
        onChange={(e) =>
          dispatch({
            type: "name",
            payload: e.target.value,
          })
        }
      />

      <br />

      <input
        placeholder="Course"
        value={state.course}
        onChange={(e) =>
          dispatch({
            type: "course",
            payload: e.target.value,
          })
        }
      />

      <br /><br />

      <button
        onClick={() =>
          dispatch({ type: "reset" })
        }
      >
        Reset Form
      </button>

      <h3>Name : {state.name}</h3>

      <h3>Course : {state.course}</h3>

    </div>
  );
}

export default StudentForm;