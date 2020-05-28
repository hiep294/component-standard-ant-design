import React from "react";
import { Input } from "antd";

type CustomInputType = typeof Input & {
  label?: string;
};

const CustomInput = ({
  label = "Label",
  placeholder = "Design: a tag div of label above this Input tag, does not need to pass any ID",
  id = "basic",
  // does not need to pass a value if using Form
  value = "",
  // does not need to pass a onChange if using Form
  onChange = () => {},
  ...rest
}: CustomInputType) => {
  return (
    <div style={{ position: "relative" }}>
      <label
        htmlFor={id}
        style={{ position: "absolute", zIndex: 2, paddingLeft: "11px" }}
      >
        {label}
      </label>
      <Input
        placeholder={placeholder}
        style={{ paddingTop: "20px" }}
        id={id}
        value={value}
        onChange={onChange}
        {...rest}
      />
    </div>
  );
};

export default CustomInput;
