import React, { useState } from 'react'
import Logout from './Logout'
import { useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import Navbar3 from './Navbar3'
import tick from "../assets/tick.png"
function Mock({qbanks, qbId, showLogout, setShowLogout, setQbanks, children}) {
  const navigate = useNavigate()
  const [shuffledQb, setShuffledQb] = useState([{}])
  const [attemptCount, setAttemptCount] = useState({})
  const [showConfirm, setShowConfirm] = useState({})
  const [answerLog, setAnswerLog] = useState({})
  useEffect(() => {
    const handleBeforeUnload = (event) => {
      event.preventDefault();
    };
    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);
  useEffect(()=>{
    const token = localStorage.getItem("token")
    if(token){
      axios.get("http://localhost:3000/getqb",{
        headers:{
          "Authorization": token
        }
      })
      .then((response)=>{
          const res = response.data;
          setQbanks(res[0])
      })
      .catch((e)=>{alert(e)})
    }else{
      navigate("/")
    }
  },[])
  useEffect(() => {
    if (qbanks && qbanks[qbId]) {
      const shuffleArray = (array) => {
        let shuffledArray = array.slice();
        for (let i = shuffledArray.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
        }
        return shuffledArray;
      };
      setShuffledQb(shuffleArray(qbanks[qbId]));
    }
    if(shuffledQb.length <= 10){
      document.getElementById("box").style.gridTemplateColumns = "repeat(1, minmax(0, 1fr))"
    }
    else if(shuffledQb.length == 30){
      document.getElementById("box").style.gridTemplateColumns = "repeat(2, minmax(0, 1fr))"
    }
    else if(shuffledQb.length == 60){
      document.getElementById("box").style.gridTemplateColumns = "repeat(4, minmax(0, 1fr))"
    }
  }, [qbanks, qbId]);
  useEffect(()=>{    
    shuffledQb.map((question, index) => {
      if(answerLog[index] === "A" && !attemptCount[index]){
        document.getElementById(index+"A").style.backgroundColor = "#E2E8F0"
        document.getElementById(index+"B").style.backgroundColor = "#fff"
        document.getElementById(index+"C").style.backgroundColor = "#fff"
        document.getElementById(index+"D").style.backgroundColor = "#fff"
      }
      else if(answerLog[index] === "B" && !attemptCount[index]){
        document.getElementById(index+"B").style.backgroundColor = "#E2E8F0"
        document.getElementById(index+"A").style.backgroundColor = "#fff"
        document.getElementById(index+"C").style.backgroundColor = "#fff"
        document.getElementById(index+"D").style.backgroundColor = "#fff"
      }
      else if(answerLog[index] === "C" && !attemptCount[index]){
        document.getElementById(index+"C").style.backgroundColor = "#E2E8F0"
        document.getElementById(index+"B").style.backgroundColor = "#fff"
        document.getElementById(index+"A").style.backgroundColor = "#fff"
        document.getElementById(index+"D").style.backgroundColor = "#fff"
      }
      else if(answerLog[index] === "D" && !attemptCount[index]){
        document.getElementById(index+"D").style.backgroundColor = "#E2E8F0"
        document.getElementById(index+"B").style.backgroundColor = "#fff"
        document.getElementById(index+"C").style.backgroundColor = "#fff"
        document.getElementById(index+"A").style.backgroundColor = "#fff"
      }
  })
  },[answerLog])
  
  useEffect(()=>{
    shuffledQb.map((question, index) => {
      if(attemptCount[index]){
        document.getElementById(index+"st").style.backgroundColor = "#00b386"
        document.getElementById(index+"st").style.color = "#fff"
      }
    })
  },[attemptCount])

  return (
    <div className='bg-slate-200 h-full'>
      {showLogout ? <div id='logout' className='z-10 fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 transition-opacity duration-300'><Logout setShowLogout={setShowLogout}/> </div> : <></>}
      <div className='hidden xl:flex border'>
          {children}
          <div id='box' className='min-w-10 rounded-md h-[550px] top-20 fixed right-2 px-5 shadow-xl bg-white grid grid-cols-4 py-5 gap-x-1'>
            {shuffledQb ? (
              shuffledQb.map((question, index) => (
                <a href={"#"+index}><div id={index+"st"} className='h-5 w-5 text-xs border-2 flex items-center justify-center rounded-md p-2'>{index+1}</div></a> 
              ))
            ):<></>}
          </div>
      </div>
      <div className='bp:mt-[4rem] sm:mt-[2rem] mt-8 xl:ml-72 flex-grow flex justify-center'> 
        <div className='fixed w-[270px] sm:w-[500px] md:w-[800px] lg:w-[1000px] top-0 flex h-max'>
          <Navbar3 attemptCount={attemptCount}/>
        </div>
        <div className='mt-7 w-full'>
          {shuffledQb ? (
                shuffledQb.map((question, index) => (
                  <div id={index+1} className='w-full flex justify-center text-sm sm:text-base border border-black'>
                    <div className='sm:w-1/2 w-full mx-3 min-h-52 max-h-max bg-white shadow-md rounded-lg my-3 sm:px-7 px-5 py-7 flex flex-col items-center'>
                    <div className='w-full h-max'><strong>Q.{index + 1}.</strong> <span className='ml-2'>{question.q}</span></div>
                    <div className='border w-full mt-3'></div>
                    <div className='w-full mt-3'>
                      <div onClick={()=>{
                        if(!attemptCount[index]){
                          setShowConfirm({[index]: true})
                          setAnswerLog({[index]: "A"})
                        }
                      }} id={index + "A"} className='w-full hover:bg-slate-100 cursor-pointer my-1 py-1 pl-3 rounded-md'>{"A. " + question[1]}</div>
                      <div onClick={()=>{
                        if(!attemptCount[index]){
                          setShowConfirm({[index]: true})     
                          setAnswerLog({[index]: "B"})
                        }
                                 
                      }} id={index + "B"} className='w-full hover:bg-slate-100 cursor-pointer my-1 py-1 pl-3 rounded-md'>{"B. " + question[2]}</div>
                      <div onClick={()=>{
                        if(!attemptCount[index]){
                          setShowConfirm({[index]: true})   
                          setAnswerLog({[index]: "C"})    
                        }
          
                      }} id={index + "C"} className='w-full hover:bg-slate-100 cursor-pointer my-1 py-1 pl-3 rounded-md'>{"C. " + question[3]}</div>
                      <div onClick={()=>{
                        if(!attemptCount[index]){
                          setShowConfirm({[index]: true})  
                          setAnswerLog({[index]: "D"})  
                        }
                      }} id={index + "D"} className='w-full hover:bg-slate-100 cursor-pointer my-1 py-1 pl-3 rounded-md'>{"D. " + question[4]}</div>
                    </div>
                    {showConfirm[index] ? <div className='w-full flex justify-end items-center pr-3'>
                      <div onClick={()=>{
                        setAttemptCount((prevState => ({...prevState, [index]: true})))
                        setShowConfirm({[index]: false})
                      }} className='flex items-center hover:bg-slate-100 px-2 py-2 rounded-md cursor-pointer border'>
                        <img src={tick} alt="" className='h-7 mr-2'/>
                        Confirm
                      </div>
                    </div> : <></>}
                  </div>
                  </div>
                ))
              ) : (
                <></>
              )}
        </div>
      </div>
    </div>
  )
}

export default Mock