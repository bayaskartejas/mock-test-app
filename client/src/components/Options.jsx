import React from 'react'
import { useState, useEffect } from 'react'
import thunder from "../assets/thunder.png"
import infinity from "../assets/infinity.png"
import timer from "../assets/timer.png"
import progress from "../assets/progress.png"
import Tile from './Tile'
import { useNavigate } from 'react-router-dom'

function Options({showWarn, setShowWarn}) {
    const navigate = useNavigate()
    const [moreClicked, setMoreClicked] = useState(false)
    useEffect(()=>{
        if(moreClicked){
          document.getElementById("moreRef").className = "sm:grid grid-cols-1 h-max sm:mt-4 bp:flex justify-around pl-2 w-max xl:w-[calc(100%-18rem)] justify-self-center";
          document.getElementById("parent").className = "sm:flex flex sm:flex-row flex-col mt-6 sm:mt-10 bp:mt-14 bp:grid bp:grid-cols-1 grid-cols-2 items-center justify-center"
          document.getElementById("morebutton").innerHTML = "less"
        }
        else{
          document.getElementById("moreRef").className = " hidden sm:grid grid-cols-1 border-red-500 h-max sm:mt-4 bp:flex justify-around pl-2 w-max xl:w-[calc(100%-18rem)] justify-self-center";
          document.getElementById("parent").className = "sm:flex flex mt-10 sm:mt-10 bp:mt-14 bp:grid bp:grid-cols-1 grid-cols-2 items-center justify-center"
          document.getElementById("morebutton").innerHTML = "+3 more"
        }
      })
    return (
        <div id=''>
        <div id='parent' className=''>
                <div className='grid sm:grid sm:grid-cols-1 jusify-self-center h-max bp:flex justify-around pl-2 w-max xl:w-[calc(100%-18rem)] justify-self-center'>
                <div onClick={()=>{navigate("/tests")}} className='mx-3 bp:my-0 sm:my-3 my-1'>
                    <Tile img={thunder} name={"5 min Challenge"}/>
                </div>
                <div onClick={()=>{navigate("/tests")}} className='mx-3 bp:my-0 sm:my-3 my-1'>
                    <Tile img={thunder} name={"10 min Challenge"}/>
                </div>
                <div onClick={()=>{navigate("/tests")}} className='mx-3 bp:my-0 sm:my-3 my-1'>
                    <Tile img={timer} name={"30 min Challenge"}/>
                </div>
                <div onClick={()=>{navigate("/tests")}} className='mx-3 bp:my-0 sm:my-3 mt-1'>
                    <Tile img={timer} name={"60 min Challenge"}/>
                </div>
                </div>
                <div id='moreRef' className= ''>
                <div onClick={()=>{navigate("/tests")}} className='mx-3 bp:my-0 sm:my-3  my-2'>
                    <Tile img={timer} name={"2 hrs Challenge"}/>
                </div>
                <div onClick={()=>{navigate("/tests")}} className='mx-3 bp:my-0 sm:my-3  my-2'>
                    <Tile img={infinity} name={"No Time Limit"}/>
                </div>
                <div onClick={()=>{navigate("/dashboard")}} className='mx-3 bp:my-0 sm:my-3 my-2'>
                    <Tile img={progress} name={"Progress"}/>
                </div>
                </div>
            </div>
            <div id='morebutton' onClick={()=>{setMoreClicked(!moreClicked)}} className= ' italic sm:hidden flex justify-end pr-7 w-full text-xs text-gray-600 cursor-pointer underline mt-2'>
                +3 more
            </div>
        </div>
    )
}

export default Options