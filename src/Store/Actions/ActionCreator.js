import {
  FETCH_ALL_TODOS,
  POST_SINGLE_USER,
  ADD_NEW_USER,
  DELETE_SINGLE_USER,
} from "./ActionTypes";

export const getAllTodosAction = (data) => ({
  type: FETCH_ALL_TODOS,
  payload: data,
});

export const postingSingleUserAction = (singleUser) => ({
  type: POST_SINGLE_USER,
  payload: singleUser,
});

export const onAddNewUserAction = (obj) => ({
  type: ADD_NEW_USER,
  payload: obj,
});

export const onDeleteSingleUserAction = (id) => ({
  type: DELETE_SINGLE_USER,
  payload: { id },
});
