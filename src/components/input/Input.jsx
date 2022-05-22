import React from "react";

const Input = ({
  className = "",
  value = "",
  onChange = () => {},
  type = "text",
  placeholder = "default-place-holder",
}) => {
  return (
    <input
      className={className}
      value={value}
      onChange={onChange}
      type={type}
      placeholder={placeholder}
    />
  );
};

export default Input;
