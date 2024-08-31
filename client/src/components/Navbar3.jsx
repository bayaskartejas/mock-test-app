import React, { useEffect, useState } from 'react'
import timer from "../assets/timer.png"
function Navbar3({attemptCount, setShowPage, time, setTime, setShowResult, shuffledQb, shuffledQb1}) {
    const [startClicked, setStartClicked] = useState(false)
    const formatTime = (seconds) => {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `${String(minutes).padStart(2, "0")}:${String(remainingSeconds).padStart(2, "0")}`;
    };
    useEffect(() => {
        if (time > 0 && startClicked) {
          const timerId = setInterval(() => {
            setTime((prevTime) => prevTime - 1);
          }, 1000);
          return () => clearInterval(timerId);
        }
      }, [time, startClicked]);
      useEffect(()=>{
        if(time<60){
            document.getElementById("time").style.color="red";
            document.getElementById("time").style.animation = "popup 1s ease-out forwards infinite"
        }
        if(time==0){
            setShowResult(true)
        }
      },[time])
    return (
        <div className='bg-white flex w-full sm:h-16 h-14 items-center justify-between sm:px-10 px-2 text-xs sm:text-base rounded-md shadow-md'>
            <div className='grid justify-center'>
                Attempted
                <span className='justify-self-center mt-1'>
                    {Object.keys(attemptCount).length}
                </span>
            </div>
            <div>
                {startClicked ? <button id='startBtn' className='w-max bg-red-500 px-5 py-2 rounded-md text-white' onClick={()=>{setStartClicked(false);
                setShowResult(true);
                shuffledQb1 = shuffledQb
            }}>Submit</button> :
                    <button id='submitBtn' className="w-max bg-green-101 px-5 py-2 rounded-md text-white" onClick={()=>{setStartClicked(!startClicked);
                    setShowPage(true); }}>Start</button>}
            </div>
            <div className='grid'>
                <div className='flex justify-center items-center justify-self-center'><img src={timer} alt="" className='h-4 sm:h-5 mr-1'/> <span className='ml-1'>Time</span></div>
                <span className='justify-self-center'>
                    <strong id='time' className='tracking-wide'>{formatTime(time)}</strong>
                </span>
            </div>
        </div>
    )
}

export default Navbar3