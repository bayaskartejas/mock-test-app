import React from 'react'
import target from "../assets/target.png"
function TIle2({dur, que, setShowWarn, tl, setInfinity}) {
  return (
    <div id={que} onClick={()=>{
        setShowWarn({st: true, in: que})
        if(tl==0){setInfinity(true)}
        else{setInfinity(false)}}} className='hover:bg-slate-50 cursor-pointer w-3/4 sm:w-1/2 h-14 bg-white rounded-lg shadow-md flex justify-between items-center sm:text-lg text-sm font-medium'>
        <div className='ml-2'>
            <img src={target} alt="" className='h-10'/>
        </div>
        <div className='grid text-center sm:flex'>
            <span>{dur}&nbsp;</span>
            <span>Mock Test</span>
        </div>
        <div className='flex items-center sm:text-sm text-xs text-gray-500 text-center mr-2'>{que}<br />questions</div>
    </div>
)}

export default TIle2