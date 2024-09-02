import React from 'react';
import { GoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate()
  const handleLoginSuccess = (response) => {
    axios.post("https://apti-server.tejascodes.com/verifyUser",{
      token: response.credential
    })
    .then((res)=>{
      localStorage.setItem("rememberMe", true)
      localStorage.setItem("token", res.data.token) 
      localStorage.setItem("email", res.data.email)
      localStorage.setItem("name", res.data.name)
      localStorage.setItem("isAdmin", res.data.isAdmin)
      navigate("/home")
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
