/* eslint-disable react/jsx-props-no-spreading */
import React, { memo, useRef, useLayoutEffect } from "react";
import usePrevious from "../../hooks/usePrevious";

export interface SingleOTPInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  focus?: boolean;
}

export function SingleOTPInputComponent(props: SingleOTPInputProps) {
  const { focus, autoFocus, ...rest } = props;
  const inputRef = useRef<HTMLInputElement>(null);
  const prevFocus = usePrevious(!!focus);
  useLayoutEffect(() => {
    if (inputRef.current) {
      if (focus && autoFocus) {
        inputRef.current.focus();
      }
      if (focus && autoFocus && focus !== prevFocus) {
        inputRef.current.focus();
        inputRef.current.select();
      }
    }
  }, [autoFocus, focus, prevFocus]);

  return (
    <input
      ref={inputRef}
      {...rest}
      style={{
        width: "40px",
        padding: 0,
        margin: "5px", // => if distance betweeen two field is 10px, so margin is 10px/2 = 5px
        border: "none",
        borderRadius: 0,
        borderBottom: "1px solid #333",
        boxShadow: "none",
        outline: "none",
        textAlign: "center",
      }}
    />
  );
}

const SingleOTPInput = memo(SingleOTPInputComponent);
export default SingleOTPInput;
