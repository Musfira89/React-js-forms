import React, { useState } from "react";
import logo from '../../components/assests/logo.png'
import { FaUser, FaLock, FaEnvelope } from "react-icons/fa";

import './Login.css'

const StudentLogin = (props) => {
  const [id, setId] = useState('');
  const [pass, setPass] = useState('');
  const [forgotPassword, setForgotPassword] = useState(false);
  const [resetEmail, setResetEmail] = useState('');
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validate();
    if (Object.keys(errors).length === 0) {
      console.log(id);
    } else {
      setErrors(errors);
    }
  }

  const handleForgotPassword = () => {
    setForgotPassword(true);
  }

  const handleResetPassword = (e) => {
    e.preventDefault();
    console.log(resetEmail);
    setForgotPassword(false);
  }

  const validate = () => {
    const errors = {};
    if (!id) {
      errors.id = 'Student ID is required';
    }
    if (!pass) {
      errors.password = 'Password is required';
    } else if (pass.length < 6) {
      errors.password = 'Password must be at least 6 characters long';
    }
    if (forgotPassword && !resetEmail) {
      errors.resetEmail = 'Email is required';
    } else if (forgotPassword && !/\S+@\S+\.\S+/.test(resetEmail)) {
      errors.resetEmail = 'Email is invalid';
    }
    return errors;
  };
 

  if (forgotPassword) {
    return (
      <div className="login-container">
        <div className="bg-image"></div>
        <div className="form-container">
          <form onSubmit={handleResetPassword}>
            <img src={logo} alt="logo" className="logo" />
            <h1 className="reset-heading">EMAAN</h1>

            <p className="reset-paragraph">
              Enter your valid email address to reset your password.
            </p>

            <div className="form-group">
              <label htmlFor="reset-email">
               Email
              </label>
              <div className="input-with-icon">
               <FaEnvelope className="icon" />
              <input
                value={resetEmail}
                onChange={(e) => setResetEmail(e.target.value)}
                type="email"
                placeholder="example@example.com"
                id="reset-email"
                name="reset-email"
                autocomplete="off" // add this line to disable auto-fill

              />
              </div>
              {errors.resetEmail && (
                <span className="error">{errors.resetEmail}</span>
              )}
            </div>

            <button type="submit">Reset Password</button>
            <button
              className="link-btn"
              onClick={() => setForgotPassword(false)}
            >
              Cancel
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="login-container">
      <div className="bg-image"></div>
      <div className='form-container'>
        <form onSubmit={handleSubmit}>
          <img src={logo} alt='logo' className="logo" />
          <h1>EMAAN</h1>
          <p className="mobile-paragraph">Welcome back! Please log in to your account.</p>

          <div className="form-group" >
  <label htmlFor='studentid'>Student Id</label>
  <div className="input-with-icon">
    <FaUser className="icon" />
    <input 
      value={id} 
      onChange={(e) => setId(e.target.value)} 
      type="idstudentid" 
      placeholder="Student id" 
      id="studentid" 
      name="studentid" 
      autocomplete="off" // add this line to disable auto-fill

    />
  </div>
  {errors.id && <span className="error">{errors.id}</span>}
</div>

          <div className="form-group">
            <label htmlFor='password'>Password</label>
            <div className="input-with-icon">
           <FaLock className="icon" />
            <input
              value={pass}
              onChange={(e) => setPass(e.target.value)}
              type="password"
              placeholder="********"
              id="password"
              name="password"
              autocomplete="off" // add this line to disable auto-fill

            />
            </div>
            {errors.password && <span className="error">{errors.password}</span>}
          </div>
          <div className="link-container">
            <button className="link-btn" onClick={() => handleForgotPassword()}>
              Forgot password?
            </button>
          </div>
          <button type="submit">Log In</button>
          <button className="link-btn" onClick={() => props.onFormSwitch('register')}>
            Don't have an account? Register here.
          </button>
        </form>
      </div>
    </div>
  )
}

export default StudentLogin;
