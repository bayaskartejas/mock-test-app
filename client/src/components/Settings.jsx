import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import Logout from './Logout'
function Settings({ showLogout, setShowLogout, children }) {
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
    return (
        <div className='bg-slate-200 h-full'>
            {showLogout ? <div id='logout' className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 transition-opacity duration-300'><Logout setShowLogout={setShowLogout}/> </div> : <></>}
            <div className='hidden xl:flex'>
                {children}
            </div>
            <div className='bp:mt-[6rem] sm:mt-[3rem] mt-16 xl:ml-72 flex-grow'>
                Settings
            </div>
        </div>
    )
}

export default Settings