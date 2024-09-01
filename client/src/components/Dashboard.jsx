import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import Logout from './Logout'
import menuopen from "../assets/menuopen.png"
function Dashboard({ showLogout, setShowLogout, showMenu, setShowMenu, children }) {
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
    },[localStorage.getItem("rememberMe")])
    useEffect(()=>{
        if(showMenu){
          document.getElementById("sideDash").style.display = "flex"
        }
        else{
          document.getElementById("sideDash").style.display = "none"
        }
      },[showMenu])
    return (
        <div className='bg-slate-200 h-full'>
            {showLogout ? <div id='logout' className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 transition-opacity duration-300'><Logout setShowLogout={setShowLogout}/> </div> : <></>}
            <div id='sideDash' className='hidden xl:flex'>
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
            <div className='bp:mt-[6rem] sm:mt-[3rem] mt-16 xl:ml-72 flex-grow'>
                Work in Progress...
            </div>
        </div>
    )
}

export default Dashboard