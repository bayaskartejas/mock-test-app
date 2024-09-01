import React from 'react'
import { useNavigate } from 'react-router-dom'
function Warn({setShowWarn, setQbId, index}) {
    const navigate = useNavigate()
  return (
    <div className="bg-white sm:w-96 w-72 h-max justify-self-center shadow-lg rounded-lg md:px-7 px-4 py-8 animate-popup">
        <div className='flex justify-center sm:text-xl text-lg'>
            Do you wish to start the Mock Test of this Question Bank?
        </div>
        <div className='mt-10 flex justify-center'>
            <button onClick={()=>{
                setQbId(index)
                navigate("/tests/mock")
            }} className='w-28 border py-2 mx-2 bg-green-101 text-white rounded-lg'>Yes</button>
            <button onClick={()=>{setShowWarn(false)}} className='w-28 border-2 border-slate-300 py-2 mx-2 rounded-lg'>No</button>
        </div>
    </div>
  )
}

export default Warn