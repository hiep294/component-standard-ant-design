import React from "react";
import { Input } from "antd";

const CustomInputFloatingLabel = ({
  label = "Label",
  placeholder = "Developing...",
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
      <Input
        placeholder={placeholder}
        style={{
          paddingTop: "20px",
          border: "none",
          borderBottom: "1px solid #333",
          boxShadow: "none",
          borderRadius: "0",
        }}
        id={id}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default CustomInputFloatingLabel;
