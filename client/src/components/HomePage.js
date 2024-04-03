import React,{useState} from 'react';
import ProductsPage from './ProductsPage';
import { Link } from "react-router-dom";
function HomePage() {
//  const location=useLocation()


  return (
    <div>   
      <article class="article1">
        <section class="section1">
          <div class="section1_box1">
          <span class="navigation_bar">
            <a href="/contactus">Contact</a>
            <a href="/aboutus">About</a>
          </span>
            <h3> Hello Welcome to Shopping Platform</h3>
           
            <p>
              This platform provides you with all the best designs and shopping varieties. 
            </p>
            
          </div>
          
        </section>
        
      </article>  
     

          
      <ProductsPage />

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
export default HomePage;