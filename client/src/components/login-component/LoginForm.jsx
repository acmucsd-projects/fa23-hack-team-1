// ./src/components/login-component/LoginForm.jsx
import React, { useState } from 'react';
import { useRouter } from 'next/router';
import API from '../../api/API';
import styles from './loginform.module.css';


const LoginForm = () => {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleLogin = async (e) => {
    e.preventDefault();

    // Reset previous error messages
    setError(null);

    // Create a payload with the entered credentials
    const loginPayload = {
      username,
      password,
    };

    try {
      // Make a request to the login API endpoint
      const response = await API.loginUser(loginPayload);

      // Handle the successful login response
      console.log(response.data);
      // Assuming the API response contains a token or some indicator of a successful login
      // You might want to store tokens or user information in state or local storage

      // Redirect to the Dashboard page upon successful login
      router.push('/dashboard');
    } catch (error) {
      // Handle login error
      console.error('Login failed:', error.response.data.error);
      setError('Incorrect username or password. Please try again.');
    }
  };

  const handleRegisterClick = () => {
    // Redirect to the registration page
    router.push('/register'); // Adjust the route according to your registration page route
  };

  return (
    <div className={styles.loginForm}>
      <div className={styles.introduction}>
        <img
          src="https://lh3.googleusercontent.com/fife/AGXqzDn-lZi5DWs0Ey0odTS0Efi4WBSktloiUM0jIBXMuVZsuzvJ50_yHQupnuxRrHYl66VhBTP9Al4S5Lcm4--a4_O61oUQdhtdX7wQNwUend2r90eHZC_4hJXacJT9bccw0dh21mnPJuoJbxlwTL-Dhpe1bL00ZHdlIELOAy4GRZ8LVSbrNbd6_m3JbFQrc_EkQQt-XkW674KDq8dX9NNb6yw-GwT9vMZS2m5cuv2UlRNGt6xZDD7AJ981uE_A-d2b5KQLPOvX8dJupXZ3qLSeg77AVE8Zqwfw4XDKmMiq_iQOoKBLgxIjEuxrvmYUMnUih-uDiZCTJgNpCipGKxqmdRi1F7ds7pcsdK4rS43BZ6e_gstZ1dwlj6fju3McxHh1jMC6BYPVPYHwzJPopEMQXbQyBo0NvWitBqfNAOW4hAOz7ENivJXmiQBdsvyGstUzM06nnbHTJuZGiyeg8TAKS3yNHkiXVO_LG_b0Stuqs83cy2nbXvqzISxwhHwspFlB6Sixs7UIcfFKnvZFFv3CdLpHBqkMNANHsR3R0n6WM8CMp27aa_zVnLTumrIZvOqWUbz2YvdMeFKSnNiJXYGX5woy4YUN8Ppbj25_TT7sAxt4AK75ebppCFcYm_SrmN8qCsEF1sb92GG_D3jgcQJBTP_PL8E7wU378IYJfLtX8XrEuQujBSpftJIRgQeoe7hYC4mw6mkveUOi-Xp4hf4fXv45c4e_rG4Ecm3A3m3EpuaGl_GcVu_tu8jKtnkGRXM0crGKLvhVR9ON3W7-QP-MpQaqxWy1OSX7AXfjzbokDXCRWOIx5lJtF_xeDGQkH3uwG7RiV5a9pH6OmUc6cLIIZqZo0qIDUWJ2s1idocRoVvmIB8vBwQZrfNTFiAumaecTee5CQ5r93cU6oRD5Q0dVSy6RTfe2c2sBM70VvTXIEjiQBWtD4qDIWu0EPPkBc7k-jxcDhjkgg365TyJZc-al85O7pyD9peNBt58LEU7au4V5pbJ_HYB7sqpW-gDYD6fZ3y0OiL5JY-itFnTsXDBAq-EWBgIEkCdbIXQZS-ckOAD1OwhJuUzV-Vo6tYySTpwfifZzfwmor9nBFDljv96s3VvzFS5EfXknRcPIGpoPz0E7Jf346qJTJW09YG01iIkM0jbOfYbJ7xhQVjI5DRZ0u93A5WmbkccWIoPOqPoCxdphs8gXXXYJaFk7HZVIc2P2OTpbSRNYZl9O4tLo4i9arVerqi6ago6YOV_EZSKRT8-t1vMRNIPA3VFFy5ljnpdqllzMkfxKsrQCsco0OI915kmmYjRoqfJ9TOINmT3yaKlFhZVGjFka3QI4__yJJ9eG1P1r69SfMP47c2je8tX1kZMKQas4YEGU3yC98omAax7m6akVpwTdgpJRvjRPSCwT2ApjGoZ9rx8yn9_Sjg-MvK63Ig98Vl90oym32v9k5gE829Z9_IMHBBZTAZH1nckLkj6yJ1y2z_oWY-IM0ymg91Tz-T1pfVajMmDQozLg0SBveYMHheXCkC30ow6Zm8jlzEJs_bjmRXJV-Fi5g-kk_otKyk9R4BdCEAqkfAQLD678hdmMRdiTHuseuiN6wYsHkI3ddcEids12Z_OLR17vASwXBAlNrVI1XRVvtTZQK_5voVGAI8jkXSwkI7WHMsAo1iDfuVLhTlR9wL6llGr1TtSzjeNrFe5FqfJKJMjO-cMmEz3qmb_EHphWwJSbIllajITI2o7ntJuFgQJfJtiRqgpFaj8oknuX1xikgGKqI07u3vw=s500-w500-h500-s-no-gm?authuser=0"
          className={styles.intro_image}
        />
        <p className={styles.description}>
        Embark on a journey to wellness with our calorie tracking hub. Fuel your body with knowledge as you take control of your nutrition, one delicious byte at a time. Welcome to a healthier, more mindful you!
        </p>
      </div>
      
      <div className={styles.container}>
        <h1 className={styles.heading}>Please Login</h1>
        {error && <p className={styles.error}>{error}</p>}
        <form className={styles.form} onSubmit={handleLogin}>
          <div className={styles.inputGroup}>
            <label htmlFor="username">Username:</label>
            <input
              className={styles.input}
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="password">Password:</label>
            <input
              className={styles.input}
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button className={styles.button} type="submit">
            Login
          </button>
        </form>
        <p className={styles.registerText} onClick={handleRegisterClick}>
          New User? Register Here
        </p>
      </div>
    </div>
  );
};

export default LoginForm;
