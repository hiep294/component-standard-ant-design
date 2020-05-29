import React from "react";
import { Select } from "antd";
import { SelectProps } from "antd/lib/select";
import { valueType } from "antd/lib/statistic/utils";
import "./CustomSelect.css";

interface CustomSelectInterface extends SelectProps<valueType> {
  label?: string;
}

const CustomSelect = (props: CustomSelectInterface) => {
  return (
    <div id="custom-select_1590767046628" style={{ position: "relative" }}>
      <label
        htmlFor={props.id}
        style={{ position: "absolute", zIndex: 2, paddingLeft: "11px" }}
      >
        {props.label || "Label"}
      </label>
      <Select {...props} />
    </div>
  );
};

export default CustomSelect;
