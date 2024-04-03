import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import axios from 'axios'

const Login = () => {

  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const navigate = useNavigate()

  const handleFormSubmit = (e) => {
    e.preventDefault()
    axios.post('http://localhost:5000/login', {email, password})
    .then(res => {console.log(res)
      if(res.data === "Success"){
        navigate('/home')
      }else if(res.data==='Invalid Password'){
        window.alert("Password is Invalid")
      }else{
        window.alert("User does not exist, please singnup")
      }
   
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
            <h3> OTT Platform</h3>
            <p>
              This platform provides you with all the best entertainemnt content and shopping varieties. 
            </p>
          </div>
        </section>
        
      </article>  
    <div className='d-flex justify-content-center'>
      <form onSubmit={handleFormSubmit}>
      <div class="form-group">
        <h1>Login</h1>
        <label for="exampleInputEmail1">Email address</label>
        <input type="email" class="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email" onChange={(e)=>setEmail(e.target.value)} required/>
        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
      </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" class="form-control" id="password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)} required/>
  </div>
    <div className='d-flex justify-content-center align-items-center'>
    <button class="btn btn-primary">Login</button>
  </div>
  </form>
</div> 
<footer>
        <p class="footer">Copyright @ deva525</p>
      </footer>
    </div> 
  )
}

export default Login
