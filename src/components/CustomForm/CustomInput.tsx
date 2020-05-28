import React from "react";
import { Input } from "antd";
import { InputProps } from "antd/lib/input";

interface CustomInputInterface extends InputProps {
  label?: string;
}

const CustomInput = ({
  placeholder = "Design: a tag div of label above this Input tag, does not need to pass any ID",
  label = "label",
  ...otherProps
}: CustomInputInterface) => {
  return (
    <div style={{ position: "relative" }}>
      <label
        htmlFor={otherProps.id}
        style={{ position: "absolute", zIndex: 2, paddingLeft: "11px" }}
      >
        {label}
      </label>
      <Input
        placeholder={placeholder}
        style={{ paddingTop: "20px" }}
        {...otherProps}
      />
    </div>
  );
};

export default CustomInput;
