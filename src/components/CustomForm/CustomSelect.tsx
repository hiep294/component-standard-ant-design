import React from "react";
import { Select } from "antd";
import { SelectProps } from "antd/lib/select";
import { valueType } from "antd/lib/statistic/utils";

interface CustomSelectInterface extends SelectProps<valueType> {
  label?: string;
}

const CustomSelect = (props: CustomSelectInterface) => {
  return <Select {...props} />;
};

export default CustomSelect;
