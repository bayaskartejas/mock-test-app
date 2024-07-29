import React from 'react'
import brain from "../assets/brain.gif"
function Navbar({clicked, setClicked}) {
  return <div className=' flex justify-between h-max'>
    <div className='flex w-max lg:ml-40 ml-8'>
        <img src={brain} alt="" className='sm:h-14'/>
        <div className='md:text-3xl text-xl  items-center flex md:ml-2 ml-1 font-bold tracking-wide'>Aptidote</div>  
    </div>

    <div className='md:flex items-center hidden absolute justify-center w-full'>
        <input type="text" className='border-2 h-10 w-96 px-5 rounded-3xl' placeholder='Search'/>
    </div>

    <div className='flex items-center lg:mr-40 mr-8'>
        <button onClick={()=>{setClicked(!clicked)}} className='hidden md:flex text-white text-sm bg-green-201 px-3 py-2 rounded-md hover:bg-green-101 transition delay-100'>Create Account</button>
        <button onClick={()=>{setClicked(!clicked)}} className='md:hidden text-white text-sm bg-green-201 px-3 py-2 rounded-md hover:bg-green-101 transition delay-100'>Sign up</button>
    </div>
  </div>
}

export default Navbar