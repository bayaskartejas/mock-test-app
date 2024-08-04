import React, { useRef } from 'react'
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import Navbar2 from './Navbar2'
import Greet from './Greet'
import Options from './Options'
import Logout from './Logout'

function Home({showLogout, setShowLogout, children}) {
  const navigate = useNavigate()
  let token = localStorage.getItem("token")

  useEffect(()=>{
    let token = localStorage.getItem("token")
      if(!token){
          navigate("/")
      }
  },[token])


  return <div className=' bg-slate-200 h-full'>
    {showLogout ? <div id='logout' className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 transition-opacity duration-300'><Logout setShowLogout={setShowLogout}/> </div> : <></>}
    <div className='hidden xl:flex'>
      {children}
    </div>
    <div className='hidden sm:flex bp:mt-8 mt-6 xl:ml-72 w-full xl:w-[calc(100%-18rem)] h-max'>
      <Navbar2 />
    </div>
    <div className='bp:mt-[6rem] sm:mt-[3rem] mt-16 xl:ml-72 flex-grow'>
      <Greet ></Greet>
      <Options></Options>
    </div>
  </div>
}

export default Home