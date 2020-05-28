import React from "react";
import { Select } from "antd";

type CustomSelectProps = typeof Select & {
  label: string;
};

const CustomSelect = (props: CustomSelectProps) => {
  return (
    <Select
      mode="multiple"
      style={{ width: "100%" }}
      placeholder="Please select"
      // defaultValue={["a10", "c12"]}
      onChange={
        (values) => {}
        // console.log(form2.getFieldValue("MultipleSelect1"))
      }
    />
  );
};

export default CustomSelect;
