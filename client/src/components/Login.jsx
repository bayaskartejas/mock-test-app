import React from 'react';
import { GoogleLogin } from '@react-oauth/google';

function Login() {
  const handleLoginSuccess = (response) => {
    console.log('Login Success:', response);
    // Handle the response here
  };

  const handleLoginError = (error) => {
    console.error('Login Error:', error);
    alert(`Login failed: ${error.error}`);
  };

  return (
    <div>
      <GoogleLogin
        onSuccess={handleLoginSuccess}
        onError={handleLoginError}
      />
    </div>
  );
}

export default Login;
