import React, { useState } from "react";
import logo from '../../components/assests/logo.png'
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";
import './Register.css'

const Register = (props) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [Confpass, setConfPass] = useState('');
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validate();
    if (Object.keys(errors).length === 0) {
      console.log(email);
    } else {
      setErrors(errors);
    }
  }

  const validate = () => {
    const errors = {};

    if (!name) {
      errors.name = 'Name is required';
    } else if (name.length < 3) {
      errors.name = 'Name should be at least 3 characters long';
    }

    if (!email) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = 'Email is invalid';
    }

    if (!pass) {
      errors.password = 'Password is required';
    } else if (pass.length < 6) {
      errors.password = 'Password must be at least 6 characters long';
    }

    if (!Confpass) {
      errors.Confpassword = 'Confirm Password is required';
    } else if (Confpass !== pass) {
      errors.Confpassword = 'Passwords do not match';
    }

    return errors;
  };

  return (
    <div className="register-container">
      <div className="bg-image"></div>
      <div className='Rform-container'>
        <form onSubmit={handleSubmit}>
          <img src={logo} alt='logo' className="logo" />
          <h1>EMAAN</h1>
          <p className="mobile-paragraph">Please first Register your account.</p>

          <div className="form-group">
            <label htmlFor="name">Full name</label>
            <div className="input-with-icon">
           <FaUser className="icon" />
            <input value={name} name="name" onChange={(e) => setName(e.target.value)} id="name" placeholder="full Name" /></div>
            {errors.name && <span className="error">{errors.name}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <div className="input-with-icon">
           <FaEnvelope className="icon" />
            <input value={email} name="email" onChange={(e) => setEmail(e.target.value)} id="email" placeholder="youremail@gmail.com" /></div>
            {errors.email && <span className="error">{errors.email}</span>}
          </div>

          <div className="form-group">
            <label htmlFor='password'>Password</label>
            <div className="input-with-icon">
           <FaLock className="icon" />
            <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" /></div>
            {errors.password && <span className="error">{errors.password}</span>}
          </div>

          <div className="form-group">
            <label htmlFor='Conformpassword'> Confirm Password</label>
            <div className="input-with-icon">
           <FaEnvelope className="icon" />
            <input value={Confpass} onChange={(e) => setConfPass(e.target.value)} type="password" placeholder="********" id="Conformpassword" name="Conformpassword" /></div>
            {errors.Confpassword && <span className="error">{errors.Confpassword}</span>}
          </div>

        <button type="submit">Register</button>
        <button className="link-btn" onClick={() => props.onFormSwitch('login')}>
        Already have an account? Login here.
        </button>
      </form>
    </div>
  </div>
  )
}

export default Register
