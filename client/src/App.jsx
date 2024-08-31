
import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Landing from './components/Landing';
import './App.css';
import Home from './components/Home';
import Sidebar from './components/Sidebar'
import Account from './components/Account';
import Settings from './components/Settings';
import Tests from './components/Tests';
import Dashboard from './components/Dashboard';
import Mock from './components/Mock';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Feed from './components/Feed';

function App() {
  const [showLogout, setShowLogout] = useState(false)
  const [qbanks, setQbanks] = useState([])
  const location = useLocation()
  const [qbId, setQbId] = useState(0)
  useEffect(()=>{
    if(location.pathname === "/home"){
      document.getElementById("hometab").style.backgroundColor = "#E5E7Eb"
    }  
    if(location.pathname === "/dashboard"){
      document.getElementById("dashtab").style.backgroundColor = "#E5E7Eb"
    }  
    if(location.pathname === "/tests" || location.pathname === "/tests/mock"){
      document.getElementById("teststab").style.backgroundColor = "#E5E7Eb"
    }  
    if(location.pathname === "/settings"){
      document.getElementById("settingstab").style.backgroundColor = "#E5E7Eb"
    }  
    if(location.pathname === "/account"){
      document.getElementById("accounttab").style.backgroundColor = "#E5E7Eb"
    }  
  },[location.pathname])
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
    }
  },[])

  return (
    <div className='h-screen grid font-poppins'>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home showLogout={showLogout} setShowLogout={setShowLogout}><Sidebar setShowLogout={setShowLogout}/></Home>}/>
        <Route path="/dashboard" element={<Dashboard showLogout={showLogout} setShowLogout={setShowLogout}><Sidebar setShowLogout={setShowLogout}/></Dashboard>} />
        <Route path="/tests" element={<Tests showLogout={showLogout} setShowLogout={setShowLogout} qbanks={qbanks} setQbId={setQbId}><Sidebar setShowLogout={setShowLogout}/></Tests>} />
        <Route path="/settings" element={<Settings showLogout={showLogout} setShowLogout={setShowLogout}><Sidebar setShowLogout={setShowLogout}/></Settings>} />
        <Route path="/account" element={<Account showLogout={showLogout} setShowLogout={setShowLogout}><Sidebar setShowLogout={setShowLogout}/></Account>} />
        <Route path="/tests/mock" element={<Mock qbanks={qbanks} qbId={qbId} showLogout={showLogout} setShowLogout={setShowLogout} setQbanks={setQbanks}><Sidebar setShowLogout={setShowLogout}/></Mock>} />
        <Route path="/feed" element={<Feed showLogout={showLogout} setShowLogout={setShowLogout}><Sidebar setShowLogout={setShowLogout}/></Feed>} />
      </Routes>
    </div>
  );
}

export default App;

