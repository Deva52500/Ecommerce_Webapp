import React from 'react';
import HomePage from './components/HomePage';
import Login from "./components/Login"
import Signup from "./components/Signup"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import AboutUsPage from './components/AboutUsPage';
import ContactUsPage from './components/ContactUsPage';
import UpdatePlan from './components/UpdatePlan';

function App() {
  return (
    
    <div> 
    <Router>
        <Routes>
          <Route path="/home" element={<HomePage/>}/>
          <Route path="/aboutus" element={<AboutUsPage/>}/>
          <Route path="/contactus" element={<ContactUsPage/>} />
          <Route path="/login" element={<Login/>}/>
          <Route path="/" element={<Signup/>}/>
          <Route path="/update" element={<UpdatePlan/>}/>

        </Routes>
      </Router>

    </div>
  );
}

export default App;

