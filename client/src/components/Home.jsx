import React, { useRef } from 'react'
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import Navbar2 from './Navbar2'
import Sidebar from './Sidebar'
import Greet from './Greet'
import Tile from './Tile'
import thunder from "../assets/thunder.png"
import infinity from "../assets/infinity.png"
import timer from "../assets/timer.png"
function Home() {
  const navigate = useNavigate()
  let token = localStorage.getItem("token")
  const [moreClicked, setMoreCliciked] = useState(false)

  useEffect(()=>{
      if(!token){
          navigate("/")
      }
  },[])

  useEffect(()=>{
    if(moreClicked){
      document.getElementById("moreRef").className = "border sm:grid grid-cols-1 border-red-500 h-max sm:mt-4 bp:flex justify-around pl-2 w-max xl:w-[calc(100%-18rem)] justify-self-center";
      document.getElementById("parent").className = "sm:flex flex sm:flex-row flex-col mt-6 sm:mt-10 bp:mt-14 border border-black bp:grid bp:grid-cols-1 grid-cols-2 items-center justify-center"
      document.getElementById("morebutton").innerHTML = "less"
    }
    else{
      document.getElementById("moreRef").className = "border hidden sm:grid grid-cols-1 border-red-500 h-max sm:mt-4 bp:flex justify-around pl-2 w-max xl:w-[calc(100%-18rem)] justify-self-center";
      document.getElementById("parent").className = "sm:flex flex mt-6 sm:mt-10 bp:mt-14 border border-black bp:grid bp:grid-cols-1 grid-cols-2 items-center justify-center"
      document.getElementById("morebutton").innerHTML = "+3 more"
    }
  })
  return <div className=' bg-slate-200 h-full'>
    <div className='hidden xl:flex'>
      <Sidebar />
    </div>
    <div className='hidden sm:flex bp:mt-8 mt-6 xl:ml-72 w-full xl:w-[calc(100%-18rem)] h-max'>
      <Navbar2 />
    </div>
    <div className='bp:mt-[6rem] sm:mt-[3rem] mt-16 xl:ml-72 flex-grow'>
      <Greet />
        <div id='parent' className='h-max sm:flex flex mt-6 sm:mt-10 bp:mt-14 border border-black bp:grid bp:grid-cols-1 grid-cols-2 items-center justify-center'>
          <div className='grid sm:grid sm:grid-cols-1 jusify-self-center h-max bp:flex border border-red-600 justify-around pl-2 w-max xl:w-[calc(100%-18rem)] justify-self-center'>
            <div className='mx-3 bp:my-0 sm:my-3 my-1'>
              <Tile img={thunder} name={"5 min Challenge"}/>
            </div>
            <div className='mx-3 bp:my-0 sm:my-3 my-1'>
              <Tile img={thunder} name={"10 min Challenge"}/>
            </div>
            <div className='mx-3 bp:my-0 sm:my-3 my-1'>
              <Tile img={timer} name={"30 min Challenge"}/>
            </div>
            <div className='mx-3 bp:my-0 sm:my-3 mt-1'>
              <Tile img={timer} name={"60 min Challenge"}/>
            </div>
          </div>
          <div id='moreRef' className= 'border hidden sm:grid grid-cols-1 border-red-500 h-max sm:mt-4 bp:flex justify-around pl-2 w-max xl:w-[calc(100%-18rem)] justify-self-center'>
            <div className='mx-3 bp:my-0 sm:my-3  my-2'>
              <Tile img={timer} name={"2 hrs Challenge"}/>
            </div>
            <div className='mx-3 bp:my-0 sm:my-3  my-2'>
              <Tile img={infinity} name={"No Time Limit"}/>
            </div>
            <div className='mx-3 bp:my-0 sm:my-3 my-2'>
              <Tile img={infinity} name={"No Time Limit"}/>
            </div>
          </div>
        </div>
        <div id='morebutton' onClick={()=>{setMoreCliciked(!moreClicked)}} className= 'sm:hidden flex justify-end pr-4 w-full text-sm text-gray-600 cursor-pointer hover:underline'>
            +3 more
        </div>
    </div>

  </div>
}

export default Home