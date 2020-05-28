import React from "react";
import { Input } from "antd";

const CustomInput2 = ({
  placeholder = "Just custom style...",
  id = "basic",
  // does not need to pass a value if using Form
  value = "",
  // does not need to pass a onChange if using Form
  onChange = () => {},
}) => {
  return (
    <Input
      placeholder={placeholder}
      style={{
        border: "none",
        borderRadius: "0",
        borderBottom: "1px solid #333",
        boxShadow: "none",
        paddingLeft: "5px",
        paddingRight: "5px",
      }}
      id={id}
      value={value}
      onChange={onChange}
    />
  );
};

export default CustomInput2;
