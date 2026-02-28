import React from 'react'
import './ProfessionalForm.css'
import { useState } from 'react';

const ProfessionalForm = () => {
  // 1. Single State Object
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    username: '' // Notice how easy it is to add more fields!
  });

  // 2. The Universal HandleChange
  const handleChange = (e) => {
    // Destructure name and value from the input that triggered the event
    const { name, value } = e.target;

    // Update state using the Functional Update pattern
    setFormData((prevData) => ({
      ...prevData,       // Spread: Copy all existing fields (don't lose the others!)
      [name]: value,     // Computed Property: Update only the field that changed
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submission Successful:', formData);
    // Reset to initial state object
    setFormData({ email: '', password: '', username: '' });
  };

  return (
    <div className="page-wrapper">
      <form onSubmit={handleSubmit} className="login-form">
        <h2>Professional Login</h2>

        <div className="input-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"  /* MUST match the key in state */
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="input-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password" /* MUST match the key in state */
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ProfessionalForm;