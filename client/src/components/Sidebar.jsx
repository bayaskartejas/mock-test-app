import React, { useEffect, useState } from 'react'
import brain from "../assets/brain.png"
import dashboard from "../assets/dashboard.png"
import tests from "../assets/tests.png"
import home from "../assets/home.png"
import settings from "../assets/settings.png"
import developer from "../assets/developer.png"
import logout from "../assets/logout.png"
import account from "../assets/account.png"
import question from "../assets/question.png"
import menuclose from "../assets/menuclose.png"
import { useNavigate } from 'react-router-dom'
function Sidebar({setShowLogout, showMenu, setShowMenu}) {
    const navigate = useNavigate()
    return (
        <div className='sm:w-72 w-56 rounded-md h-full fixed top-0 left-0 px-5 shadow-xl bg-white'>
            <div className='flex w-max mt-5 items-center border'>
                <img onClick={()=>{navigate("/home")}} src={brain} alt="" className='sm:h-14 cursor-pointer'/>
                <div className='md:text-3xl text-xl  items-center flex md:ml-2 ml-1 font-bold tracking-wide'>Aptidote</div>  
            </div>
            {showMenu ? <img onClick={()=>{setShowMenu(false)}}  src={menuclose} alt="" className='h-8 absolute sm:left-[295px] left-[250px] top-8 border border-black rounded-full p-1 bg-white'/> : <></>}
            <div className='mt-10 mb-5'>
                <ul>
                    <li id='hometab' onClick={()=>{navigate("/home"); setShowMenu(false)}} className='h-14 w-full rounded-md hover:bg-gray-200 flex items-center pl-5 cursor-pointer'>
                        <img src={home} alt="" className='h-8'/>
                        <h1 className='ml-5'>Home</h1>
                    </li>
                    <li id='dashtab' onClick={()=>{navigate("/dashboard"); setShowMenu(false)}} className='mt-2 h-14 w-full rounded-md hover:bg-gray-200 flex items-center pl-5 cursor-pointer'>
                        <img src={dashboard} alt="" className='h-8'/>
                        <h1 className='ml-5'>Dashboard</h1>
                    </li>
                    <li id='teststab' onClick={()=>{navigate("/tests"); setShowMenu(false)}} className='mt-2 h-14 w-full rounded-md hover:bg-gray-200 flex items-center pl-5 cursor-pointer'>
                        <img src={tests} alt="" className='h-8'/>
                        <h1 className='ml-5'>Tests</h1>
                    </li>
                    <li id='settingstab' onClick={()=>{navigate("/settings"); setShowMenu(false)}} className='mt-2 h-14 w-full rounded-md hover:bg-gray-200 flex items-center pl-5 cursor-pointer'>
                        <img src={settings} alt="" className='h-8'/>
                        <h1 className='ml-5'>Settings</h1>
                    </li>
                    <li id='accounttab' onClick={()=>{navigate("/account"); setShowMenu(false)}} className='mt-2 h-14 w-full rounded-md hover:bg-gray-200 flex items-center pl-5 cursor-pointer'>
                        <img src={account} alt="" className='h-8'/>
                        <h1 className='ml-5'>Account</h1>
                    </li>
                </ul>
            </div>

            <div className='border-2'></div>
            
            <div className='mt-5'>
                <ul>
                    <li onClick={()=>{setShowLogout(true); setShowMenu(false)}} className='h-14 w-full rounded-md hover:bg-gray-200 flex items-center pl-6 cursor-pointer'>
                        <img src={logout} alt="" className='h-7'/>
                        <h1 className='ml-5'>Log out</h1>
                    </li>
                    {
                        localStorage.getItem("isAdmin") == "true" ?  <li onClick={()=>{navigate("/feed"); setShowMenu(false)}} className='h-14 w-full rounded-md hover:bg-gray-200 flex items-center pl-6 cursor-pointer'>
                        <img src={question} alt="" className='h-7'/>
                        <h1 className='ml-5'>Feed Questions</h1>
                    </li>: <></>
                    }
                    <a href="https://portfolio-bayaskartejas-projects.vercel.app/" target='blank'>
                        <li className='h-14 w-full rounded-md hover:bg-gray-200 flex items-center pl-6 cursor-pointer'>
                            <img src={developer} alt="" className='h-8'/>
                            <h1 className='ml-5'>About Me</h1>
                        </li>
                    </a>
                </ul>
            </div>
        </div>
    )
}

export default Sidebar