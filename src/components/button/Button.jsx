import React from "react";

const Button = ({
  className = "",
  btnText = "default-name",
  onClick = () => {},
}) => {
  return (
    <button className={className} onClick={onClick} style={{ margin: "5px" }}>
      {btnText}
    </button>
  );
};

export default Button;
