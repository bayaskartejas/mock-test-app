import React from 'react'
import timer from"../assets/timer.png"
import norefresh from "../assets/norefresh.png"
import autosub from "../assets/autosub.png"
import { useNavigate } from 'react-router-dom'
function Warn2({setShowInst}) {
    const navigate = useNavigate()
  return (
    <div className='bg-white sm:w-96 w-72 h-max justify-self-center shadow-lg rounded-lg md:px-7 px-4 py-8 animate-popup '>
        <div className='leading-8'>
            Click on the <span className='w-max bg-green-101 px-3 py-1 rounded-md text-white m-1'>Start</span> button on the Topbar to start the Mock Test 
        </div>
        <div className='mt-3 ml-2'>
            <ol>
                <li className='flex items-center my-3'>
                    <img src={timer} alt="" className='h-6'/>
                    <div className='ml-3'>
                        The timer will start ticking as soon as you click <strong>Start</strong>
                    </div>  
                </li>
                
                <li className='flex items-center my-3'>
                    <img src={norefresh } alt="" className='h-6'/>
                    <div className='ml-3'>
                        Avoid hitting <strong>Refresh</strong>
                    </div>  
                </li>
                <li className='flex items-center my-3'>
                    <img src={autosub} alt="" className='h-7'/>
                    <div className='ml-3'>
                        The test will<strong> Auto-submit</strong> when the time's up
                    </div>  
                </li>
                <li className='flex items-center my-3'>
                    <div className='p-1 rounded-md flex justify-center text-sm sm:text-base border-2'>Q.1</div>
                    <div className='ml-3'>
                        Unattempted Question
                    </div>  
                </li>
                <li className='flex items-center my-3'>
                    <div className='p-1 bg-green-101 text-white rounded-md flex justify-center text-sm sm:text-base border-2'>Q.1</div>
                    <div className='ml-3'>
                        Attempted Question
                    </div>  
                </li>
            </ol>
        </div>
        <div className='mt-5 flex justify-center'>
            <button onClick={()=>{setShowInst(false)}} className='w-max bg-green-101 px-3 py-1 rounded-md text-white mx-3'>Proceed</button>
            <button onClick={()=>{setShowInst(false); navigate("/tests")}} className='w-max border-2 px-3 py-1 rounded-md mx-3'>Go Back</button>
        </div>
    </div>
  )
}

export default Warn2