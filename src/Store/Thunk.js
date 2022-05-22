import { fetchData, postNewUserObj, onDeleteUser } from "../Services";
import {
  getAllTodosAction,
  onAddNewUserAction,
  onDeleteSingleUserAction,
} from "./Actions/ActionCreator";

export const getAllTodos = () => async (dispatch) => {
  const response = await fetchData();
  dispatch(getAllTodosAction(response));
};

export const postNewUser = (newUserObj) => async (dispatch) => {
  await postNewUserObj(newUserObj);
  dispatch(onAddNewUserAction(newUserObj));
};

export const deletingSingleUser = (id) => async (dispatch) => {
  await onDeleteUser(id);
  dispatch(onDeleteSingleUserAction(id));
};
