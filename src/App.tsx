import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import FormInputCaptchaOTPPage from './pages/FormInputCaptchaOTPPage';
import HomePage from './pages/HomePage';
import SortArrowsController from './components/SortArrowsController';
import CarouselSlider from './pages/CarouselSlider';
import './styles/height.css';
import './styles/cursor.css';
import './styles/transform.css';
import './styles/index.css';
import ArrowOfCollapse from './components/ArrowOfCollapse';

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
            <li>
              <SortArrowsController />
            </li>
            <li>
              <Link to="/carousel-slider">Carousel - slider</Link>
            </li>
            <li>
              <ArrowOfCollapse />
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
          <Route path="/carousel-slider" exact>
            <CarouselSlider />
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
