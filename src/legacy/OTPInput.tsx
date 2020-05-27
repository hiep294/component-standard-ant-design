import React, { useState, useEffect } from "react";
import { Input } from "antd";

let prevValue = "";

const getLastCharacter = (str: string): string => {
  return str.substr(str.length - 1);
};

const getInitialArray = (numInputs: number): Array<any> => {
  const arr = [];
  for (let index = 0; index < numInputs; index++) {
    arr[index] = "";
  }
  return arr;
};

const OTPInput = ({
  numInputs = 6,
  onChange = (otp: string) => {
    console.log(otp);
  },
}) => {
  // const [prevValue, setPrevValue] = useState("");
  const [inputValues, setInputValues] = useState(getInitialArray(numInputs));
  const [inputRefs] = useState(getInitialArray(numInputs));

  const setFocusInNextInput = (index: number) => {
    if (index < inputValues.length - 1) {
      const el = inputRefs[index + 1];
      el.focus();
      // el.select();
    }
  };

  const setFocusInPrevInput = (index: number) => {
    if (index > 0) {
      const el = inputRefs[index - 1];
      el.focus();
      // el.select();
    }
  };

  const onKeyDown = (e: any, index: number) => {
    prevValue = inputValues[index];
  };

  const onInputChange = (e: any, index: number) => {
    const nextValue = e.target.value;
    // validate
    const regexOneDegit = /\d+/;
    if (!regexOneDegit.test(nextValue) && nextValue) return;
    // update input
    inputValues[index] = getLastCharacter(nextValue);
    setInputValues([...inputValues]);
    // go to focus in next input
    if (nextValue) setFocusInNextInput(index);
  };

  const onKeyUp = (e: any, index: number) => {
    const currentValue = inputValues[index];
    const keyCode = e.keyCode;
    // go to focus in previous input
    if (prevValue === currentValue && currentValue === "" && keyCode === 8) {
      setFocusInPrevInput(index);
      return;
    }
    if (keyCode === 37) {
      setFocusInPrevInput(index);
      return;
    }
    if (keyCode === 39) {
      setFocusInNextInput(index);
      return;
    }
  };

  useEffect(() => {
    const str = inputValues.join("");
    onChange(str);
  }, [inputValues, onChange]);

  useEffect(
    () => () => {
      prevValue = "";
      // willUnMount is also depended on deps below
    },
    []
  );

  return (
    <div style={{ display: "flex" }}>
      {inputValues.flatMap((item, index) => {
        return (
          <Input
            key={index}
            style={{
              width: "40px",
              padding: 0,
              margin: "5px", // => if distance betweeen two field is 10px, so margin is 10px/2 = 5px
              border: "none",
              borderRadius: 0,
              borderBottom: "1px solid #333",
              boxShadow: "none",
              textAlign: "center",
            }}
            value={item}
            onFocus={(e: any) => e.target.select()}
            onKeyDown={(e) => onKeyDown(e, index)}
            onChange={(e) => onInputChange(e, index)}
            onKeyUp={(e) => onKeyUp(e, index)}
            ref={(input) => (inputRefs[index] = input)}
          />
        );
      })}
    </div>
  );
};

export default OTPInput;
