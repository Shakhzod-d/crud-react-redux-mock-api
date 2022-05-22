import {
  FETCH_ALL_TODOS,
  ADD_NEW_USER,
  DELETE_SINGLE_USER,
} from "../Actions/ActionTypes";
const initialState = {
  users: [],
};

function TodoReducer(state = initialState, action) {
  //   console.log("action", action.payload);
  switch (action.type) {
    case FETCH_ALL_TODOS:
      return { ...state, users: [...action.payload] };
    case ADD_NEW_USER:
      return {
        ...state,
        users: [...state.users, action.payload],
      };
    case DELETE_SINGLE_USER:
      const filteredItems = state.users.filter(
        (item) => item.id !== action.payload.id
      );
      return {
        ...state,
        users: [...filteredItems],
      };
    default:
      return state;
  }
}

export default TodoReducer;
