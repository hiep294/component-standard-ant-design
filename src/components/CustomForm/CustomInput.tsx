import React from 'react';
import { Input } from 'antd';
import { InputProps } from 'antd/lib/input';

interface CustomInputInterface extends InputProps {
  label?: string;
}

const CustomInput = (props: CustomInputInterface) => {
  const layoutCustom = {
    margin: 0,
  };
  return (
    <div style={{ position: 'relative', ...layoutCustom }}>
      <label
        htmlFor={props.id}
        style={{ position: 'absolute', zIndex: 2, paddingLeft: '11px' }}
      >
        {props.label || 'Label'}
      </label>
      <Input
        placeholder={
          props.placeholder ||
          'Design: a tag div of label above this Input tag, does not need to pass any ID'
        }
        {...props}
        style={{ paddingTop: '20px' }}
      />
    </div>
  );
};

export default CustomInput;
