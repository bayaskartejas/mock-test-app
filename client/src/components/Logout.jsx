import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
function Logout({ setShowLogout}) {
const navigate = useNavigate()
useEffect(() => {
    setShowLogout(true)
    return () => {
    setShowLogout(false); // Ensure this runs only when the component unmounts
    };
}, [setShowLogout]);

  return (
    <div className="bg-white sm:w-96 w-72 h-max justify-self-center shadow-lg rounded-lg md:px-7 px-4 py-8 transform transition-transform duration-300 scale-95">
        <div className='flex justify-center sm:text-2xl text-xl'>
            Do you wish to Log out?
        </div>
        <div className='mt-10 flex justify-center'>
            <button onClick={()=>{
                if(localStorage.getItem("rememberMe")=="true"){
                    localStorage.removeItem("token")
                    localStorage.removeItem("isAdmin") 
                }
                else{
                    sessionStorage.removeItem("token")
                    sessionStorage.removeItem("isAdmin") 
                }
                navigate("/")
            }} className='w-28 border-2 border-slate-300 py-2 mx-2 rounded-lg'>Yes</button>
            <button onClick={()=>{setShowLogout(false)}} className='w-28 border py-2 mx-2 bg-green-101 text-white rounded-lg'>No</button>
        </div>
    </div>
  )
}

export default Logout