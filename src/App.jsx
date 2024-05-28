import React, { useEffect } from 'react'
import "./App.css";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import Home from './Pages/Home';
import Code from './Pages/Code';
import Login from './Pages/Login';
import SignUp from './Components/SignUp';
import { RecoilRoot } from 'recoil';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from './firebase/firebase';


export default function App() {
  const [user,loading,error] = useAuthState(auth)


  return (
    <Router>
      <RecoilRoot>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/code" element={<Code/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<SignUp/>}/>
      </Routes>
      </RecoilRoot>
    </Router>
  )
}
