import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Logout from './Logout'
import target from "../assets/target.png"
import Warn from './Warn'

function Tests({ showLogout, setShowLogout, qbanks, setQbId, children }) {
    const navigate = useNavigate()
    const [showWarn, setShowWarn] = useState({})
    let token = localStorage.getItem("token")
    let x;  
    useEffect(()=>{
      let token = localStorage.getItem("token")
        if(!token){
            navigate("/")
        }
    },[token])

    return (
        <div className='bg-slate-200 h-full'>
            {showLogout ? <div id='logout' className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 transition-opacity duration-300'><Logout setShowLogout={setShowLogout}/> </div> : <></>}
            <div className='hidden xl:flex'>
                {children}
            </div>
            <div className='bp:mt-[6rem] sm:mt-[3rem] mt-16 xl:ml-72 flex-grow'>
                <div className='w-full flex justify-center text-3xl sm:4xl font-semibold text-green-101 tracking-wide'>Tests</div>
                <div>
                    <div className='h-full sm:mt-10 mt-7'>
                        {
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
                        }
                    </div> 
                </div>

            </div>
        </div>
    )
}

export default Tests