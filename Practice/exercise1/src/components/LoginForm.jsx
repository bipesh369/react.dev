
import { useState } from 'react'
import './LoginForm.css';


const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const {name, value} = e.target
    setFormData((prev) => ({
      ...prev, [name]: value,
  }));
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Final Form Data:', formData)
    // Resetting state back to initial empty strings
    setFormData({email: '', password: ''})
    alert('Logged in successfully! Check the console.')
  }

  return (
    <form onSubmit={handleSubmit} className='login-form'>
      <h2>Login</h2>
      <div className='input-group'>
        <label htmlFor="email">Email</label>
        <input 
        type='email'
        id='email'
        name='email'
        value={formData.email}
        onChange={handleChange}
        required 
        />
        </div>

        <div className='input-group'>
          <label htmlFor="password">Password</label>
          <input 
          type='password'
          id='password'
          name='password'
          value={formData.password}
          onChange={handleChange}
          required
          />
        </div>

        <button type='submit'>Submit</button>
    </form>
  );
}

export default LoginForm