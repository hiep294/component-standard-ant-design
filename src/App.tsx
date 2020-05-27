import React from "react";
import CustomForm from "./components/CustomForm";
import CustomForm2 from "./components/CustomForm2";
import ReCAPTCHA from "react-google-recaptcha";
import CustomOTPInput from "./components/CustomOTPInput";

function App() {
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
          <ReCAPTCHA
            sitekey="6Le1qfwUAAAAAMgGrsmcpG3vYvlLS4Qcgbs3kgib"
            onChange={(value) => {
              console.log("check value:", value);
            }}
          />
        </div>
      </div>

      <div
        style={{ margin: "40px", border: "2px solid #333", padding: "20px" }}
      >
        <CustomOTPInput
          length={6}
          isNumberInput
          autoFocus
          onChangeOTP={(otp) => console.log("Number OTP: ", otp)}
        />
      </div>

      <div
        style={{ margin: "40px", border: "2px solid #333", padding: "20px" }}
      >
        <CustomForm2 />
      </div>
    </>
  );
}

export default App;
