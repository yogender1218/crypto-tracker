import React, { useState } from 'react';
import { GoogleLogin } from '@react-oauth/google';
import styles from './Register.module.css';

const Register = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Registering:', formData);
    // Handle registration logic here
  };

  const handleGoogleSuccess = (credentialResponse) => {
    console.log('Google Register Success:', credentialResponse);
    // Handle Google registration logic here
  };

  const handleGoogleFailure = (error) => {
    console.error('Google Register Failed:', error);
  };

  return (
    <div className='styles.mainContainer'>
    <div className={styles.container}>
      <div className={styles.imageSection}>
        <img src="/path/to/your/image.jpg" alt="Register" className={styles.image} />
      </div>
      <div className={styles.formSection}>
        <h2>Create an Account</h2>
        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.formGroup}>
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className={styles.submitButton}>Register</button>
        </form>
        <div className={styles.divider}>Or</div>
        <div className={styles.googleAuth}>
          <GoogleLogin
            onSuccess={handleGoogleSuccess}
            onError={handleGoogleFailure}
          />
        </div>
      </div>
    </div>
    </div>
  );
};

export default Register;