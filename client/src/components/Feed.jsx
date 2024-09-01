import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import axios from 'axios'
function Feed({ showLogout, setShowLogout, children }) {
    const navigate = useNavigate()
    let token;
    useEffect(()=>{
    if(localStorage.getItem("rememberMe")=="true"){
        token = localStorage.getItem("token")
        }
        else{
        token = sessionStorage.getItem("token")
        }
      if(!token){
        navigate("/")
      }
      if(localStorage.getItem("isAdmin") != "true"){
        navigate("/")
      }
    },[localStorage.getItem("rememberMe")])


    const sendQuestion = (e) => {
        let data = {
            Q : document.getElementById("q").value,
            A : document.getElementById("a").value,
            B : document.getElementById("b").value,
            C : document.getElementById("c").value,
            D : document.getElementById("d").value,
            S : document.getElementById("s").value
        }
        axios.post("http://13.202.188.107/postQuestion", data,{
            headers: {
                "Authorization": localStorage.getItem("token")
            }
        })
        .then((res)=>{
            alert("question posted")
            console.log(res);
        })
        .catch((e)=>{
            console.log(e);
        })
    }
    return (
        <div className='bg-slate-200 h-full'>
            {showLogout ? <div id='logout' className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 transition-opacity duration-300'><Logout setShowLogout={setShowLogout}/> </div> : <></>}
            <div className='hidden xl:flex'>
                {children}
            </div>
            <div className='bp:mt-[6rem] sm:mt-[3rem] mt-16 xl:ml-72 flex-grow sm:px-32 px-8'>
            <div className='w-full text-3xl sm:4xl font-semibold text-green-101 tracking-wide flex justify-center'>Feed Questions</div>
            <div className='flex justify-center mt-4'>
                <div className='bg-white rounded-md shadow-md h-max w-full'>
                    <form onSubmit={sendQuestion} action="">
                        <div className='sm:px-32 px-8 mt-10'>
                            <textarea id='q' type="text" className='bg-gray-100 rounded-md border-black border w-full px-4 py-2 h-32' placeholder='Question'></textarea>
                        </div>
                        <div className='grid grid-cols-1 sm:px-32 px-8 my-4'>
                            <input type="text" name="" id="a" placeholder='Option A' className='bg-gray-100 rounded-md border-black border w-full px-4 py-2 h-8'/>
                            <input type="text" name="" id="b" placeholder='Option B' className='bg-gray-100 rounded-md border-black border w-full px-4 py-2 h-8 mt-2'/>
                            <input type="text" name="" id="c" placeholder='Option C' className='bg-gray-100 rounded-md border-black border w-full px-4 py-2 h-8 mt-2'/>
                            <input type="text" name="" id="d" placeholder='Option D' className='bg-gray-100 rounded-md border-black border w-full px-4 py-2 h-8 mt-2'/>
                        </div>
                        <div className='grid grid-cols-1 sm:px-32 px-8 my-4'>
                            <select name="" id="s" className='bg-gray-100 rounded-md border-black border w-32 px-4 h-8'>
                                <option value="Answer">Answer</option>
                                <option value="A">A</option>
                                <option value="B">B</option>
                                <option value="C">C</option>
                                <option value="D">D</option>
                            </select>
                        </div>  
                        <div className='flex justify-center mb-8'>
                            <button type='submit' className='px-3 py-2 border rounded-md bg-green-101 text-white hover:bg-green-201'>Submit</button>
                        </div>
                    </form>
                </div> 
            </div>

            </div>
        </div>
    )
}

export default Feed