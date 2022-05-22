import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Header from "./components/header/Header";
import ListTodos from "./components/listUsers/ListUsers";

import { getAllTodos } from "./Store/Thunk";

function App() {
  // const state = useSelector((state) => state);
  const dispatch = useDispatch();
  // console.log(state);
  useEffect(() => {
    dispatch(getAllTodos());
  }, []);

  return (
    <div className="App">
      <Header />
      <ListTodos />
    </div>
  );
}

export default App;
