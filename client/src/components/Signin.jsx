import React, { useEffect, useRef } from 'react'
import Login from './Login'
import{ useNavigate} from "react-router-dom"
import axios from 'axios'
import { useState } from 'react'
function Signin({setToSignin}) {
  const navigate = useNavigate()
  const idRef = useRef()
  const passwordRef = useRef()
  const handleclick = (e) => {
    e.preventDefault();
    axios.post("http://13.202.119.242:3000/signin", {
        id: idRef.current.value,
        password: passwordRef.current.value,
    })
    .then((res)=>{ 
      localStorage.setItem("rememberMe", document.getElementById("rememberMe").checked)
      if(document.getElementById("rememberMe").checked){
        localStorage.setItem("token", res.data.token) 
        localStorage.setItem("email", res.data.email)
        localStorage.setItem("name", res.data.name)
        localStorage.setItem("isAdmin", res.data.isAdmin)
        navigate("/home")
      }
      else{
        sessionStorage.setItem("token", res.data.token) 
        sessionStorage.setItem("email", res.data.email)
        sessionStorage.setItem("name", res.data.name)
        sessionStorage.setItem("isAdmin", res.data.isAdmin)
        navigate("/home")
      }
    })
    .catch((e)=>{
      alert(e.response.data.msg)
    })
  }
  return <div className='bg-white w-96 h-max justify-self-center shadow-lg rounded-lg md:px-7 px-4 py-8 transform transition-transform duration-300 scale-95'>
    <div className='flex justify-between'>
    <h1 className='justify-center flex text-2xl font-medium'>Sign in</h1> 
    <svg onClick={()=>{setToSignin(false)}} className=' cursor-pointer' xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 48 48">
        <path d="M 39.486328 6.9785156 A 1.50015 1.50015 0 0 0 38.439453 7.4394531 L 24 21.878906 L 9.5605469 7.4394531 A 1.50015 1.50015 0 0 0 8.484375 6.984375 A 1.50015 1.50015 0 0 0 7.4394531 9.5605469 L 21.878906 24 L 7.4394531 38.439453 A 1.50015 1.50015 0 1 0 9.5605469 40.560547 L 24 26.121094 L 38.439453 40.560547 A 1.50015 1.50015 0 1 0 40.560547 38.439453 L 26.121094 24 L 40.560547 9.5605469 A 1.50015 1.50015 0 0 0 39.486328 6.9785156 z"></path>
    </svg>
    </div>
    <div className='border mt-3'></div>
    <div>
        <form onSubmit={handleclick}  className='mt-4'>   
            <Login/>
            <input ref={idRef} type="text" name="" id="" className='w-full h-8 border-2 border-gray-300 placeholder:text-gray-500 mt-2 rounded-md text-sm pl-3' placeholder='Email' required/>
            <input ref={passwordRef} type="password" name="" id="" className='w-full h-8 mt-2 border-2 border-gray-300 placeholder:text-gray-500 rounded-md text-sm pl-3' required placeholder='Password'/>
            <input className='mt-5' type="checkbox" id="rememberMe" name="rememberMe" />
            <label htmlFor="rememberMe"> Remember me</label>
            <button type='submit'  className='flex text-white text-lg bg-green-201 w-full py-2 rounded-md hover:bg-green-101 transition delay-100 hover:shadow-md justify-center mt-4'>Sign in</button>
        </form>

    </div>
  </div>
}

export default Signin