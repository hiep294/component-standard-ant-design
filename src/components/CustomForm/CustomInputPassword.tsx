import React from "react";
import { Input } from "antd";

const CustomInputPassword = ({
  label = "Label",
  placeholder = "Design: a tag div of label above this Input tag, does not need to pass any ID",
  id = "basic",
  // does not need to pass a value if using Form
  value = "",
  // does not need to pass a onChange if using Form
  onChange = () => {},
}) => {
  return (
    <div style={{ position: "relative" }}>
      <div style={{ position: "absolute", zIndex: 2, paddingLeft: "11px" }}>
        {label}
      </div>
      <Input.Password
        placeholder={placeholder}
        style={{ paddingTop: "20px" }}
        id={id}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default CustomInputPassword;
