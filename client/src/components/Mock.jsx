import React, { useState } from 'react'
import Logout from './Logout'
import { useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import Navbar3 from './Navbar3'
import tick from "../assets/tick.png"
import wrong from "../assets/wrong.png"
import question from "../assets/question.png"
import res from "../assets/res.png"
import Warn2 from './Warn2'
function Mock({qbanks, qbId, showLogout, setShowLogout, setQbanks, infinity, children}) {
  let shuffledQb1;
  const navigate = useNavigate()
  const [shuffledQb, setShuffledQb] = useState([{}])
  const [attemptCount, setAttemptCount] = useState({})
  const [showConfirm, setShowConfirm] = useState({})
  const [answerLog, setAnswerLog] = useState({})
  const [answer, setAnswer] = useState({})
  const [marksObtained, setMarksObtained] = useState(0)
  const [incorrect, setIncorrect] = useState(0)
  const [showAttempted, setShowAttempted] = useState({})
  const [showInst, setShowInst] = useState(true)
  const [showPage, setShowPage] = useState(false)
  const [time, setTime] = useState(1800)
  const [showResult, setShowResult] = useState(false)
  const [checkAns, setCheckAns] = useState(false)
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
    let token;
    if(localStorage.getItem("rememberMe")=="true"){
      token = localStorage.getItem("token")
    }
    else{
      token = sessionStorage.getItem("token")
    }
    if(token){
      axios.get("http://13.202.188.107/getqb",{
        headers:{
          "Authorization": token
        }
      })
      .then((response)=>{
          const res = response.data;
          setQbanks(res.data)
      })
      .catch((e)=>{alert(e)})
    }else{
      navigate("/")
    }
  },[localStorage.getItem("rememberMe")])
  useEffect(() => {
    if (qbanks && qbId) {
      const shuffleArray = (array, limit) => {
        let shuffledArray = array.slice();
        for (let i = limit - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
        }
        return shuffledArray.slice(0, limit);
      };
      setShuffledQb(shuffleArray(qbanks, qbId));
    }
    if(shuffledQb.length == 5 || shuffledQb.length == 10){
      document.getElementById("box").style.gridTemplateColumns = "repeat(1, minmax(0, 1fr))"
    }
    else if(shuffledQb.length == 30){
      document.getElementById("box").style.gridTemplateColumns = "repeat(2, minmax(0, 1fr))"
    }
    else if(shuffledQb.length == 60){
      document.getElementById("box").style.gridTemplateColumns = "repeat(4, minmax(0, 1fr))"
    }
    else if(shuffledQb.length == 120){
      document.getElementById("box").style.gridTemplateColumns = "repeat(8, minmax(0, 1fr))"
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
    if(qbId == 5){
      setTime(300)
    }
    else if(qbId == 10){
      setTime(600)
    }
    else if(qbId == 30){
      setTime(1800)
    }
    else if(qbId == 60){
      setTime(3600)
    }
    else if(qbId == 120){
      setTime(7200)
    }
  },[])

  useEffect(()=>{
    shuffledQb.map((question, index) => {
      if(attemptCount[index]){
        document.getElementById(index+"st").style.backgroundColor = "#00b386"
        document.getElementById(index+"q").style.backgroundColor = "#00b386"
        document.getElementById(index+"st").style.color = "#fff"
        document.getElementById(index+"q").style.color = "#fff"
      }
    })
  },[attemptCount])


  return (
    <div className='bg-slate-200 h-full'>
      {showLogout ? <div id='logout' className='z-10 fixed inset-0 flex items-center justify-center bg-black bg-opacity-50'><Logout setShowLogout={setShowLogout}/> </div> : <></>}
      <div className='hidden xl:flex border'>
          {children}
          <div id='box' className='min-w-10 rounded-md h-[550px] top-20 fixed right-2 px-5 shadow-xl bg-white grid grid-cols-4 py-5 gap-x-1'>
            {shuffledQb ? (
              shuffledQb.map((question, index) => (
                <a href={"#"+(index+1)}><div id={index+"st"} className='h-5 w-5 text-xs border-2 flex items-center justify-center rounded-md p-2'>{index+1}</div></a> 
              ))
            ):<></>}
          </div>
      </div>
      <div id='main' className='bp:mt-[4rem] sm:mt-[2rem] mt-8 xl:ml-72 flex-grow flex justify-center'> 
        <div id='nav' className='fixed w-[270px] sm:w-[500px] md:w-[800px] lg:w-[1000px] top-0 flex h-max'>
            <Navbar3 attemptCount={attemptCount} setShowPage={setShowPage} time={time} setTime={setTime} setShowResult={setShowResult} shuffledQb={shuffledQb} shuffledQb1={shuffledQb1} infinity={infinity}/>
        </div>
      {showPage ? <></> : <div className='fixed top-16 xl:left-72 inset-0 flex items-center justify-center bg-black bg-opacity-90'>
        <div className='text-white'>Click the <span className='w-max bg-green-101 px-3 py-1 rounded-md text-white m-1'>Start</span> Button on the Topbar</div>  
      </div>}
      {showResult ? <div className='fixed top-0 xl:left-72 inset-0 flex items-center justify-center bg-black bg-opacity-90'>
          <div className='bg-white w-max h-max p-10 rounded-md'>
            <h1 className='font-bold text-3xl w-full flex justify-center'>Your Result!</h1>
            <div className='h-max w-full flex justify-center mt-2'>
              <ol className=''>
                <li className='flex my-2'>
                  <img src={tick} alt="" className='h-6'/>
                  <div className='ml-3'>Correct: <span>{marksObtained}</span></div>
                </li>
                <li className='flex my-2'>
                  <img src={wrong} alt="" className='h-6'/>
                  <div className='ml-3'>Incorrect: <span>{incorrect}</span></div>
                </li>
                <li className='flex my-2'>
                  <img src={question} alt="" className='h-5'/>
                  <div className='ml-4'>Not Attempted: <span>{shuffledQb.length - (marksObtained + incorrect)}</span></div>
                </li>
                <div className='border-2 w-full'></div>
                <li className='flex my-2'>
                  <img src={res} alt="" className='h-6'/>
                  <div className='ml-3'><strong>Result :</strong> <span>{marksObtained}/{qbId}</span></div>
                </li>
              </ol>
            </div>
            <div className='mt-4 flex'>
              <button onClick={()=>{
                setCheckAns(true)
                setShowResult(false)
              }} className='px-2 py-1 rounded-md bg-green-101 text-white mx-2'>Check Answers</button>
              <button onClick={()=>{
                navigate("/home")
              }} className='px-2 py-1 rounded-md border border-black mx-2'>Homepage</button>
            </div>
          </div>  
      </div> : <></>}
      {showInst ? <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-90'><Warn2 setShowInst={setShowInst}/></div> : <></>}
        <div className='mt-7 w-full'>
          {shuffledQb ? (
                shuffledQb.map((question, index) => (
                  <div id={index+1} className='w-full flex justify-center text-sm sm:text-base border'>
                    <div className='sm:w-1/2 w-full mx-3 min-h-52 max-h-max bg-white shadow-md rounded-lg my-3 sm:px-7 px-5 py-7 flex flex-col items-center'>
                    <div className='w-full h-max'><strong id={index + "q"} className='rounded-md p-1'>Q.{index + 1}.</strong> <span className='ml-2 whitespace-pre-line'>{question.Q}</span></div>                    
                    <div className='border w-full mt-3'></div>
                    <div className='w-full mt-3'>
                      <div onClick={()=>{
                        if(!attemptCount[index]){
                          setShowConfirm({[index]: true})
                          setAnswerLog({[index]: "A"})
                        }
                      }} id={index + "A"} className='w-full hover:bg-slate-100 cursor-pointer my-1 py-1 pl-3 rounded-md'>{"A. " + question.A}</div>
                      <div onClick={()=>{
                        if(!attemptCount[index]){
                          setShowConfirm({[index]: true})     
                          setAnswerLog({[index]: "B"})
                        }
                                 
                      }} id={index + "B"} className='w-full hover:bg-slate-100 cursor-pointer my-1 py-1 pl-3 rounded-md'>{"B. " + question.B}</div>
                      <div onClick={()=>{
                        if(!attemptCount[index]){
                          setShowConfirm({[index]: true})   
                          setAnswerLog({[index]: "C"})    
                        }
          
                      }} id={index + "C"} className='w-full hover:bg-slate-100 cursor-pointer my-1 py-1 pl-3 rounded-md'>{"C. " + question.C}</div>
                      <div onClick={()=>{
                        if(!attemptCount[index]){
                          setShowConfirm({[index]: true})  
                          setAnswerLog({[index]: "D"})  
                        }
                      }} id={index + "D"} className='w-full hover:bg-slate-100 cursor-pointer my-1 py-1 pl-3 rounded-md'>{"D. " + question.D}</div>
                    </div>
                    {showConfirm[index] ? <div className='w-full flex justify-end items-center pr-3'>
                      <div onClick={()=>{
                        setShowConfirm({[index]: false})
                        setAttemptCount((prevState => ({...prevState, [index]: true})))
                        setAnswer((prevState => ({...prevState, [index]: answerLog[index]})))
                        let ans = question.S
                        if(answerLog[index] === ans){
                          setMarksObtained(marksObtained+1)
                        }
                        else{
                          setIncorrect(incorrect+1)
                        }
                      }} className='flex items-center hover:bg-slate-100 px-2 py-2 rounded-md cursor-pointer border'>
                        <img src={tick} alt="" className='h-7 mr-2'/>
                        {attemptCount[index] ? <div>Attempted</div> : <div>Confirm</div>}
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