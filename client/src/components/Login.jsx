import React from 'react';
import { GoogleLogin } from '@react-oauth/google';
import axios from 'axios';

function Login() {
  const handleLoginSuccess = (response) => {
    console.log('Login Success:', response.credential);
    axios.post("http://13.202.188.107/verifyUser",{
      token: response.credential
    })
    .then((res)=>{
      console.log(res);
    })
    .catch((e)=>{alert(e.response.data.msg)})
  };

  const handleLoginError = (error) => {
    console.error('Login Error:', error);
    alert(`Login failed: ${error.error}`);
  };

  return (
    <div className=''>
      <GoogleLogin
        onSuccess={handleLoginSuccess}
        onError={handleLoginError}
      />
    </div>
  );
}

export default Login;
