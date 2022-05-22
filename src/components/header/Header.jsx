import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import Input from "../input/Input";
import Button from "../button/Button";
import { postNewUser } from "../../Store/Thunk";

const Header = () => {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState();

  //   const state = useSelector((state) => state);
  const dispatch = useDispatch();

  const getName = (e) => {
    setName(e.target.value);
  };
  const getPhoneNumber = (e) => {
    setPhoneNumber(e.target.value);
  };
  const addNewUser = () => {
    if (name.length > 2 && phoneNumber.length >= 7) {
      const newUserObj = {
        parentId: uuidv4(),
        name,
        phone: phoneNumber,
      };
      dispatch(postNewUser(newUserObj));
      //   alert("New user successfully added");
      setName("");
      setPhoneNumber("");
    } else {
      alert("Please enter more than 2 chars");
    }
  };

  return (
    <div>
      <h3>Add new user</h3>
      <div className="d-flex flex-column" style={{ width: "300px" }}>
        <Input
          className="form-control"
          value={name}
          onChange={getName}
          type="text"
          placeholder="Name"
        />

        <Input
          className="form-control"
          value={phoneNumber}
          onChange={getPhoneNumber}
          type="number"
          placeholder="Phone number"
        />
      </div>
      <Button onClick={addNewUser} className="btn btn-success" btnText="Add" />
    </div>
  );
};

export default Header;
