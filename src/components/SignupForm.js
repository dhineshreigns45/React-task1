// src/SignupForm.js
import React, { useState } from 'react';
import './Signup.css';

function SignupForm() {
  const [formData, setFormData] = useState({
    Fname: '',
    Lname:'',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle form submission logic here
    console.log('Form data submitted:', formData);
  };

  return (
    <div className="signup-form-container">
      <h2>Signup</h2>
      <form onSubmit={handleSubmit} className="signup-form">
        <div className="form-group">
          <label htmlFor="name">First Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.Fname}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="name">Last Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.Lname}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default SignupForm;
