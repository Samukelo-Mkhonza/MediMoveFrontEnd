// SignUpPage.jsx

import React, { useState } from 'react';

const SignUpFormMainContent = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    practiceName: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, such as sending data to an API
    console.log(formData);
  };

  return (
    <div className="main-content">
      <div className="form-title">SIGN UP</div>
      <p className="App-link">Leave your details and we will get back to you</p>
      <form onSubmit={handleSubmit} className="ride-booking-form">
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Name*"
          className="form-input"
          required
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email Address*"
          className="form-input"
          required
        />
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Phone Number*"
          className="form-input"
          required
        />
        <input
          type="text"
          name="practiceName"
          value={formData.practiceName}
          onChange={handleChange}
          placeholder="Practice Name"
          className="form-input"
        />
        <button type="submit" className="button-link">SIGN UP</button>
      </form>
    </div>
  );
};

export default SignUpFormMainContent;
