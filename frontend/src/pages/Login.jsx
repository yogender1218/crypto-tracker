import React, { useState } from 'react';
import { GoogleLogin } from '@react-oauth/google';
import styles from './Login.module.css';

const Login = () => {
  const [formData, setFormData] = useState({
    username: '',
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
    console.log('Logging in:', formData);
    // Handle login logic here
  };

  const handleGoogleSuccess = (credentialResponse) => {
    console.log('Google Login Success:', credentialResponse);
    // Handle Google login logic here
  };

  const handleGoogleFailure = (error) => {
    console.error('Google Login Failed:', error);
  };

  return (
    <div className={styles.container}>
      <div className={styles.imageSection}>
        <img src="/path/to/your/image.jpg" alt="Login" className={styles.image} />
      </div>
      <div className={styles.formSection}>
        <h2>Welcome Back</h2>
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
          <button type="submit" className={styles.submitButton}>Login</button>
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
  );
};

export default Login;