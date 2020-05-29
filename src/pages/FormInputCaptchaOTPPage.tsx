import React from "react";
import { CustomOTPInput } from "../components/CustomOTPInput";
// import ReCAPTCHA from "react-google-recaptcha";
import CustomForm from "../components/CustomForm";

const FormInputCaptchaOTPPage = () => {
  return (
    <>
      <div
        style={{ margin: "40px", border: "2px solid #333", padding: "20px" }}
      >
        <CustomForm />
      </div>
      <div
        style={{ margin: "40px", border: "2px solid #333", padding: "20px" }}
      >
        <div>
          should define more ReCAPTCHA domain of production, in:
          https://www.google.com/recaptcha/admin/site/:id/settings
        </div>

        <div
          style={{
            border: "2px solid red",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div>uncomment in code to use ReCAPTCHA</div>
          {/* <ReCAPTCHA
            sitekey="6Le1qfwUAAAAAMgGrsmcpG3vYvlLS4Qcgbs3kgib"
            onChange={(value) => {
              console.log("check value:", value);
            }}
          /> */}
        </div>
      </div>

      <div
        style={{ margin: "40px", border: "2px solid #333", padding: "20px" }}
      >
        <div
          className="container_"
          style={{
            display: "flex",
            flexDirection: "column",
            border: "1px solid #333",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h3>OPT input</h3>
          <CustomOTPInput
            length={6}
            isNumberInput
            // autoFocus
            onChangeOTP={(otp) => console.log("Number OTP: ", otp)}
          />
        </div>
      </div>
    </>
  );
};

export default FormInputCaptchaOTPPage;
