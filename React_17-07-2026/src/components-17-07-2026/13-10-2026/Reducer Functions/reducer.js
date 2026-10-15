
export const initialState = {
  count: 0,
};

export function counterReducer(state, action) {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };

    case "DECREMENT":
      return { count: state.count - 1 };

    case "RESET":
      return { count: 0 };

    case "ADD":
      return { count: state.count + action.payload };

    default:
      return state;
  }
}
