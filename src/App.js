import React from 'react'
import OnlineUp from './components/OnlineUp'
import OnlineIn from './components/OnlineIn'
import Home from './components/home'
import "./styles/home.css"
import './App.css'
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom';

export default function App(){
  return(
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/signup" element={<OnlineUp />} />
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<OnlineIn />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}