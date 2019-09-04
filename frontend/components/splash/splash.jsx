import React from 'react';
import { Link } from 'react-router-dom';
import SignUpFormContainer from '../session/signup_form_container';

const splash = ({currentUser, logout}) => {
  const splashForm = () => (
    <div className="main-box">
      <div className="instagram-photo-container">
        <div className="instagram-photo-holder">
          <div className="iphone-img"></div>
        </div>
    </div>
    <div className="splash_name_container">
      <h1 className="ig">Picturesque</h1>
      <h2 className="greeting-msg">Sign up to see photos and videos from your friends.</h2>
      <div className="signup-login-container"></div>
        <Link to="/login" className="login-link-button">
          <button type="button" className="login-button">Log in</button>
        </Link>

      <div className="or-container">
        <div className="or-border"></div>
        <span className="or-txt">OR</span>
        <div className="or-border"></div>
      </div>

      <nav className="login-signup">
        <SignUpFormContainer />
      </nav>

      <div>
        <p className="p-terms">By signing up, you agree to our Terms, Data Policy and Cookies Policy</p>
      </div>
      <div className="have-an-account">
        <p className="have-an-account-p">Have an account?
          <Link to="/login" className="login-link"> Log in</Link>
        </p>
      </div>
    </div>
    </div>
  )
  return splashForm();
}

export default splash;