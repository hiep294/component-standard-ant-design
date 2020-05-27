import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import FormInputCaptchaOTPPage from "./pages/FormInputCaptchaOTPPage";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home - </Link>
            </li>
            <li>
              <Link to="/form-input-captcha-otp">
                Form - Input - CAPTCHA - OTP
              </Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
        renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>
          <Route path="/form-input-captcha-otp" exact>
            <FormInputCaptchaOTPPage />
          </Route>
          {/* <Route path="/">
            <Home />
          </Route> */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
