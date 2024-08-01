import React, { useState } from 'react'
import Navbar from './Navbar'
import Welcome from './Welcome'
import Signup from './Signup'
import Signin from './Signin'
import Otp from './Otp'
function Landing() {
  const [clicked, setClicked] = useState(false)
  const [toSignup, setToSignup] = useState(false)
  const [toSignin, setToSignin] = useState(false)
  const [toOtpPage, setToOtpPage] = useState(false)
  const [newOtp, setNewOtp] = useState("0")
  return <div className='w-screen h-screen overflow-x-hidden overflow-y-hidden  bg-[url("./assets/bg1.png")] bg-cover'>
    <div className='mt-5'>
        <Navbar clicked={clicked} setClicked={setClicked}></Navbar>
    </div>
    <h1 className='md:flex hidden  w-full px-11 justify-center h-max text-7xl font-bold tracking-wide mt-40 text-center scale-110'>
      One stop solution for aptitude <br /> mock tests!
    </h1>
    <h1 className='md:hidden  w-full justify-center flex h-max text-4xl font-bold tracking-wide mt-28 text-center px-11 '>
      One stop solution for aptitude mock tests!
    </h1>
    <div className='flex justify-center md:mt-10 mt-5'>
      <button onClick={()=>{setClicked(!clicked)}} className='flex text-white text-lg bg-green-201 md:px-4 md:py-3 px-3 py-2 rounded-md hover:bg-green-101 transition delay-100 hover:shadow-md '>Get Started</button>
    </div>
    
    
    {clicked ? <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 transition-opacity duration-300 '><Welcome clicked={clicked} setClicked={setClicked} setToSignup={setToSignup}/></div>  : <></>}
    {toSignup ? <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 transition-opacity duration-300 '><Signup setToSignup={setToSignup} setToSignin={setToSignin} setToOtpPage={setToOtpPage} newOtp={newOtp} setNewOtp={setNewOtp}/></div>  : <></> }
    {toSignin ? <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 transition-opacity duration-300 '><Signin setToSignin={setToSignin} /></div>  : <></> }
    {toOtpPage ? <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 transition-opacity duration-300 '><Otp setToSignin={setToSignin} setToOtpPage={setToOtpPage} newOtp={newOtp}/></div>  : <></> }
  </div>
}

export default Landing