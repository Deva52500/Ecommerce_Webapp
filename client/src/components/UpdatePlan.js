import React from 'react'
import '../App.css'; 
import { useNavigate } from "react-router-dom";

const UpdatePlan = () => {
  const navigate = useNavigate()
  const handleFormSubmit = (e) => {
    e.preventDefault()
    window.alert("Your plan has been successfully updated!")
    navigate('/home')  
  } 

  return (
    <div>
      <article class="article1">
        <section class="section1">
          <div class="section1_box1">
          <span class="navigation_bar">
            <a href="/contactus">Contact</a>
            <a href="/aboutus">About</a>
            <a href="/home">Home</a>
            </span>
            <h3> Hello Welcome to OTT Platform</h3>
            <p>
              This platform provides you with all the best entertainemnt content and shopping varieties. 
            </p>
          </div>
        </section>
      </article>  
      
    <div className='d-flex justify-content-center'>
      <form onSubmit={handleFormSubmit}>
  <div class="form-group">
    <h2>Update your subscription plan in just one click</h2>
    <br/>
    <label for="exampleFormControlInput1">Email address</label>
    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
  </div>
  <div class="form-group">
    <label for="exampleFormControlSelect1">Select Plan</label>
    <select class="form-control" id="exampleFormControlSelect1">
      <option>Monthly Subscription 300 Rs/ month</option>
      <option>6 Month Subscription 1500 Rs</option>
      <option>Yearly Subscription Plan 3000 </option>
    </select>
    <br/>
    <div className='d-flex justify-content-center align-items-center'> 
        <button type="submit" class="btn btn-primary">Update</button>
      </div> 
  </div>
</form>
</div>
<section class="section3">
        <p>
          This is an important quote or a testimonial from our customer. May be
          its just filling space, or someone will actually read it. Who knows?
          All I know is that it looks nice.
          <strong> _Tom</strong>
        </p>
      </section>
      <section class="section4">
        <div class="section4_flex">
          <div class="section4_box1">
            <h3>Call to action! Its Time!</h3>
            You can now update your plan anythime  by clicking the button right over there! 
          </div>
          
        </div>
      </section>
    <footer>
        <p class="footer">Copyright @ deva525</p>
      </footer>
   
    </div>
  )
}

export default UpdatePlan
