import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Logout from './Logout'
import target from "../assets/target.png"
import menuopen from "../assets/menuopen.png"
import Warn from './Warn'
import Tile2 from './Tile2'

function Tests({ showLogout, setShowLogout, qbanks, setQbId, setInfinity, showWarn, setShowWarn, showMenu, setShowMenu, children }) {
    let x;
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
          document.getElementById("sideTests").style.display = "flex"
        }
        else{
          document.getElementById("sideTests").style.display = "none"
        }
      },[showMenu])

    return (
        <div className='bg-slate-200 h-full'>
            {showLogout ? <div id='logout' className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 transition-opacity duration-300'><Logout setShowLogout={setShowLogout}/> </div> : <></>}
            <div id='sideTests' className='hidden xl:flex'>
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
            <div className='bp:mt-[6rem] sm:mt-[3rem] mt-10 xl:ml-72 flex-grow'>
                <div className='w-full flex justify-center text-3xl sm:4xl font-semibold text-green-101 tracking-wide'>Tests</div>
                <div>
                    <div className='h-full sm:mt-10 mt-7'>
                    {showWarn.st ? <div id='' className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 transition-opacity duration-300'><Warn setShowWarn={setShowWarn} setQbId={setQbId} index={showWarn.in}/> </div> : <></>}
                        <div className='w-full flex justify-center my-3 border'>
                            <Tile2 dur={"5 Minutes"} que={5} setShowWarn={setShowWarn} tl={1} setInfinity={setInfinity}/> 
                        </div>
                        <div className='w-full flex justify-center my-3 border'>
                            <Tile2 dur={"10 Minutes"} que={10} setShowWarn={setShowWarn} tl={1} setInfinity={setInfinity}/>
                        </div>
                        <div className='w-full flex justify-center my-3 border'>
                            <Tile2 dur={"30 Minutes"} que={30} setShowWarn={setShowWarn} tl={1} setInfinity={setInfinity}/>
                        </div>
                        <div className='w-full flex justify-center my-3 border'>
                            <Tile2 dur={"60 Minutes"} que={60} setShowWarn={setShowWarn} tl={1} setInfinity={setInfinity}/>
                        </div>
                        <div className='w-full flex justify-center my-3 border'>
                            <Tile2 dur={"2 Hour"} que={120} setShowWarn={setShowWarn} tl={1} setInfinity={setInfinity}/>
                        </div>
                        <div className='w-full flex justify-center my-3 border'>
                            <Tile2 dur={"No Time Limit"} que={120} setShowWarn={setShowWarn} tl={0} setInfinity={setInfinity}/>
                        </div>
                        
                        {/* {
                            qbanks.map((qb, index) => (
                                <div key={index} className='w-full flex justify-center my-2 border'>
                                    {showWarn.st ? <div id='' className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 transition-opacity duration-300'><Warn setShowWarn={setShowWarn} setQbId={setQbId} index={showWarn.in}/> </div> : <></>}
                                    <div id={index} onClick={()=>{
                                        setShowWarn({st: true, in: index})
                                    }} className='hover:bg-slate-50 cursor-pointer w-3/4 sm:w-1/2 h-14 bg-white rounded-lg shadow-md flex justify-between items-center sm:text-lg text-sm font-medium'>
                                        <img src={target} alt="" className='h-10 ml-2'/>
                                        <div className='grid text-center sm:flex'>
                                            <span>Question&nbsp;</span>
                                            <span>Bank {index+1}</span>
                                        </div>
                                        <div className='flex items-center sm:text-sm text-xs text-gray-500 text-center mr-2'>
                                            {qb.length} <br />questions
                                        </div>
                                    </div> 
                                </div>
                            ))
                        } */}
                    </div> 
                </div>

            </div>
        </div>
    )
}

export default Tests