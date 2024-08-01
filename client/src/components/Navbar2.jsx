import React from 'react'
import search from "../assets/search.png"
function Navbar2() {
  return <div className='flex justify-center h-max w-full'>
    <div className='flex items-center'>
        <input type="text" className='border-2 h-10 w-96 px-5 rounded-3xl border-gray-400' placeholder='Search'/>
        <img src={search} alt="" className='h-7 ml-4 cursor-pointer'/>
    </div>
  </div>
}

export default Navbar2