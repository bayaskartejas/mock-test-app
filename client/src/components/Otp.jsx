import axios from 'axios'
import React, { useRef } from 'react'

function Otp({setToSignin, setToOtpPage, newOtp}) {
    const otpRef = useRef()
    return <div className='bg-white w-96 h-96 justify-self-center shadow-lg rounded-lg md:px-7 px-4 py-8 transform transition-transform duration-300 scale-95'>
        <div className='flex justify-between'>
            <h1 className='justify-center flex text-2xl font-medium'>Enter the OTP : </h1> 
            <svg onClick={()=>{setToOtpPage(false)}} className=' cursor-pointer' xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 48 48">
            <path d="M 39.486328 6.9785156 A 1.50015 1.50015 0 0 0 38.439453 7.4394531 L 24 21.878906 L 9.5605469 7.4394531 A 1.50015 1.50015 0 0 0 8.484375 6.984375 A 1.50015 1.50015 0 0 0 7.4394531 9.5605469 L 21.878906 24 L 7.4394531 38.439453 A 1.50015 1.50015 0 1 0 9.5605469 40.560547 L 24 26.121094 L 38.439453 40.560547 A 1.50015 1.50015 0 1 0 40.560547 38.439453 L 26.121094 24 L 40.560547 9.5605469 A 1.50015 1.50015 0 0 0 39.486328 6.9785156 z"></path>
            </svg>
        </div>
        <div className='border mt-2'></div>
        <div className='mt-16'>
            <input type="number" className='w-full border-2 pl-3 h-9 rounded-md' placeholder='OTP' ref={otpRef}/>
            <button onClick={()=>{
                if(newOtp == otpRef.current.value){
                    setToSignin(true)
                    setToOtpPage(false)
                    axios.post("http://localhost:3000/newuser",{
                        id: "",
                        password: "",
                    })
                    .then((res)=>{  
                        alert("Account created successfully")
                    })
                    .catch((e)=>{
                        alert(e)
                    })
                }
                else{
                    alert("Wrong OTP!")
                    console.log(newOtp);
                }
            }} className='flex text-white text-lg bg-green-201 w-full py-1 rounded-md hover:bg-green-101 transition delay-100 hover:shadow-md justify-center mt-5'>Submit</button>
        </div>
    </div>
}

export default Otp