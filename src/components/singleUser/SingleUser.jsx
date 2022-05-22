import React from "react";
import { useDispatch, useSelector } from "react-redux";

import Button from "../button/Button";
import { deletingSingleUser } from "../../Store/Thunk";

import "./SingleTodo.css";

const SingleTodo = () => {
  const users = useSelector((state) => state.todos.users);
  const dispatch = useDispatch();

  const onDeleteSingleUser = (id) => {
    dispatch(deletingSingleUser(id)); //deleting from backend
    // console.log(id);
  };

  // if (users) {
  //   return (
  //     <div>
  //       <h3>Loading...</h3>
  //     </div>
  //   );
  // }
  return (
    <div>
      {users.map((item) => {
        const { id, parentId, name, phone } = item;

        return (
          <div
            className="d-flex justify-content-between"
            style={{ width: "700px" }}
            key={id}
          >
            <div>
              <span className={`allSpan`}>
                {" "}
                <b>Name</b> {name}
              </span>
            </div>
            <div>
              <span className={`allSpan`}>
                {" "}
                <b>Phone</b> {phone}
              </span>
            </div>
            <div>
              <Button
                className="btn btn-info"
                btnText="Edit"
                onClick={() => {}}
              />
              <Button
                className="btn btn-danger"
                btnText="Delete"
                onClick={() => onDeleteSingleUser(id)}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SingleTodo;
