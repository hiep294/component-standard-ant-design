import React from "react";
import CustomForm from "./components/CustomForm";
import CustomForm2 from "./components/CustomForm2";
import ReCAPTCHA from "react-google-recaptcha";
// @ts-ignore
// import OtpInput from "react-otp-input";

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
        {/* <div>
          <OtpInput
            onChange={(otp: any) => console.log(otp)}
            numInputs={6}
            separator={<span>-</span>}
          />
        </div> */}
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
