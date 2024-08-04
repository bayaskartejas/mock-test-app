import React from 'react'

function Greet() {
  return (
    <div className='h-max'>
      <div className='w-full flex justify-center text-slate-500 text-2xl sm:text-4xl tracking-wide font-semibold text-center items-center'>Hi {localStorage.getItem("name")},</div>
        <div className='mt-3 w-full flex justify-center text-4xl sm:text-6xl tracking-wide font-semibold text-center items-center'>
            <span className='hover:scale-125 transition duration-100'>W</span><span className='hover:scale-125 transition duration-100'>e</span><span className='hover:scale-125 transition duration-100'>l</span><span className='hover:scale-125 transition duration-100'>c</span><span className='hover:scale-125 transition duration-100'>o</span><span className='hover:scale-125 transition duration-100'>m</span><span className='hover:scale-125 transition duration-100'>e&nbsp;</span>
            <span className='hover:scale-125 transition duration-100'>T</span><span className='hover:scale-125 transition duration-100'>o</span><br />
        </div>
        <div className='w-full flex justify-center text-6xl sm:text-8xl tracking-wide font-semibold text-center items-center text-green-101'>
          <span className='hover:scale-125 transition duration-100'>A</span><span className='hover:scale-125 transition duration-100'>p</span><span className='hover:scale-125 transition duration-100'>t</span><span className='hover:scale-125 transition duration-100'>i</span><span className='hover:scale-125 transition duration-100'>d</span><span className='hover:scale-125 transition duration-100'>o</span><span className='hover:scale-125 transition duration-100'>t</span><span className='hover:scale-125 transition duration-100'>e</span><span className='hover:scale-125 transition duration-100'>!</span>
        </div>
    </div>
  )
}

export default Greet