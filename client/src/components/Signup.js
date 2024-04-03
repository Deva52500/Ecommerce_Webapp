import React, { useState } from 'react'
import {  Link, useNavigate } from "react-router-dom";
import axios from 'axios'

const Signup = () => {
  const [name, setName] = useState()
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()

  const navigate = useNavigate()

  const handleFormSubmit = (e) => {
    e.preventDefault()
    axios.post('http://localhost:5000/', {name, email, password})
    .then(result => {console.log(result)
    navigate('/login')
    })
    .catch(err => console.log(err))
  } 

  return (
    <div>   
    <article class="article1">
      <section class="section1">
        <div class="section1_box1">
        <span class="navigation_bar">
         
        </span>
          <h3>  OTT Platform</h3>
         
          <p>
            This platform provides you with all the best entertainemnt content and shopping varieties. 
          </p>
          
        </div>
        
      </section>
      
    </article> 
    <div className='d-flex justify-content-center'>
      <form onSubmit={handleFormSubmit}>

      <div class="form-group">
        <h1>Signup</h1>
        <label for="exampleInputEmail1">Name</label>
        <input type="text" class="form-control" id="name" aria-describedby="Name" placeholder="Enter Name" onChange={(e)=>setName(e.target.value)} required/>
        <small id="text" class="form-text text-muted">We'll never share your Name with anyone else.</small>
      </div>
      <div class="form-group">
        <label for="exampleInputEmail1">Email address</label>
        <input type="email" class="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email" onChange={(e)=>setEmail(e.target.value)} required/>
        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">Password</label>
        <input type="password" class="form-control" id="password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)} required/>
      </div>
      <div className='d-flex justify-content-center align-items-center'> 
        <button type="submit" class="btn btn-primary">Signup</button>
      </div> 
      <div className='d-flex justify-content-center align-items-center'>
        <p>Already have an account</p>
      </div> 
        <div className='d-flex justify-content-center align-items-center'>
        <Link to='/login' class="btn btn-primary">Login</Link>
      </div>
    </form>
</div> 
<div class="section4_flex">
          <div class="section4_box1">
            <h3>Call to action! Its Time!</h3>
             
          </div>
     </div>     
<footer>
        <p class="footer">Copyright @ deva525</p>
      </footer>
    </div> 
  )
}

export default Signup
