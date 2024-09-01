import React, { useRef } from 'react'
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import Navbar2 from './Navbar2'
import Greet from './Greet'
import Options from './Options'
import Logout from './Logout'
import menuopen from "../assets/menuopen.png"

function Home({showLogout, setShowLogout, showWarn, setShowWarn, showMenu, setShowMenu, children}) {
  const navigate = useNavigate()
  let token;
  useEffect(()=>{
  if(localStorage.getItem("rememberMe")=="true"){
    token = localStorage.getItem("token")
  }
  else{
    token = sessionStorage.getItem("token")
  }
  if(!token){
    navigate("/")
  }
  },[])
  useEffect(()=>{
    if(showMenu){
      document.getElementById("sideHome").style.display = "flex"
    }
    else{
      document.getElementById("sideHome").style.display = "none"
    }
  },[showMenu])


  return <div className=' bg-slate-200 h-full'>
    {showLogout ? <div id='logout' className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 transition-opacity duration-300'><Logout setShowLogout={setShowLogout}/> </div> : <></>}
    <div id='sideHome' className='hidden xl:flex'>
      {children}
    </div>
    <div className='hidden xl:flex'>
      {children}
    </div>
    {showMenu ? <></> :     
    <div className='flex xl:hidden ml-5 mt-5'>
      <img onClick={()=>{
        setShowMenu(true)
      }} src={menuopen} alt="" className='h-7'/>
    </div>}
    <div className='hidden sm:flex bp:mt-8 mt-6 xl:ml-72 w-full xl:w-[calc(100%-18rem)] h-max'>
      <Navbar2 />
    </div>
    <div className='bp:mt-[6rem] sm:mt-[3rem] mt-16 xl:ml-72 flex-grow'>
      <Greet ></Greet>
      <Options showWarn={showWarn} setShowWarn={setShowWarn}></Options>
    </div>
  </div>
}

export default Home