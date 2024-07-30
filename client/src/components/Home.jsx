import React from 'react'
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
function Home() {
  const navigate = useNavigate()
  let token = localStorage.getItem("token")

  useEffect(()=>{
      if(!token){
          navigate("/")
      }

  },[])
  return <div>Home</div>
}

export default Home