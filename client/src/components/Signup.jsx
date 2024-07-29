import React from 'react'
import image from "../assets/brain.gif"
function Signup({clicked, setClicked}) {
  return <div className='bg-white w-96 h-max justify-self-center shadow-lg rounded-lg px-4 py-8 transform transition-transform duration-300 scale-95'>
    <div className=' flex justify-between items-center'>
        <img src={image} alt="" className='h-14 '/>
        <h1 className='text-xl font-medium  w-max justify-center flex items-center'>Welcome to Aptidote!</h1>
        <svg onClick={()=>{setClicked(!clicked)}} className=' cursor-pointer' xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 48 48">
        <path d="M 39.486328 6.9785156 A 1.50015 1.50015 0 0 0 38.439453 7.4394531 L 24 21.878906 L 9.5605469 7.4394531 A 1.50015 1.50015 0 0 0 8.484375 6.984375 A 1.50015 1.50015 0 0 0 7.4394531 9.5605469 L 21.878906 24 L 7.4394531 38.439453 A 1.50015 1.50015 0 1 0 9.5605469 40.560547 L 24 26.121094 L 38.439453 40.560547 A 1.50015 1.50015 0 1 0 40.560547 38.439453 L 26.121094 24 L 40.560547 9.5605469 A 1.50015 1.50015 0 0 0 39.486328 6.9785156 z"></path>
        </svg>
    </div>
    <h6 className='font-light sm:text-base text-sm break-words text-wrap flex justify-center text-slate-600 mt-5'>The question sets used here are merely for practice purposes, these questions aren't necessarily asked previously in any company's aptitude assessment. The sole purpose of this website is to make student profecient at Aptitude. <br />Good Luck!</h6>
    <div className='flex justify-center mt-5'>
     <button className='text-white bg-green-201 px-3 py-2 rounded-md hover:bg-green-101 transition delay-100'>Get Started</button>
    </div>
    
</div>
}

export default Signup