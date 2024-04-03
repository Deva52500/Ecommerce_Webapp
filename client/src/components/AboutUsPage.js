import React from 'react';
import '../App.css';
import { Link } from "react-router-dom";


function AboutUsPage() {
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
            <h3> Hello Welcome to Shopping Platform</h3>
           
            <p>
              This platform provides you with all the best designs and shopping varieties. 
            </p>
            
          </div>
          
        </section>
        
      </article>  
      <div className="about-us-container">
      <h1>About Us</h1>
      <br/>
      <div className="platform-description">
        <div className="shopping-section">
          <h3>Shopping Platform</h3>
          <img src="https://via.placeholder.com/300x200" alt="Shopping Platform Logo" />
          <p>
            Explore our shopping platform where you'll find a wide selection of products ranging from electronics and fashion
            to home goods and accessories. We're committed to providing you with a seamless shopping experience.
          </p>
        </div>
      </div>
      <div className="team-section">
        <h3>Our Team</h3>
        <div className="team-member">
          <img src="https://via.placeholder.com/150" alt="Team Member" />
          <div className="team-member-info">
            <h4>John Doe</h4>
            <p>CEO</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
        </div>
        <div className="team-member">
          <img src="https://via.placeholder.com/150" alt="Team Member" />
          <div className="team-member-info">
            <h4>Jane Smith</h4>
            <p>Head of Content</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
        </div>
      </div>
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
          <div class="section4_box2">
          <Link to='/update' class="place_toright" >Update</Link>        
         </div>
        </div>
      </section>
    <footer>
        <p class="footer">Copyright @ deva525</p>
      </footer>
    </div>
  );
}

export default AboutUsPage;
