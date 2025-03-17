import React, { Component } from 'react';
import '../Pages/Home.css';
import Bed1 from "../Images/hbed1.jpg";
import Bed2 from "../Images/hbed2.webp";
import Bed3 from "../Images/hbed3.webp";
import Bed4 from "../Images/hbed4.jpg";
import Logo from "../Images/user1.jpg";
import Logo1 from "../Images/user2.png";
import MainNavBar from '../Navbar/NavBar';


function Home() {
  return (
    <div>
      <MainNavBar/>
      <section className="rooms sec-width" id="rooms">
          <div className="title">
            <h2>Beds</h2>
          </div>
          <div className="rooms-container">
            {/* <!-- single room --> */}
            <article className="room">
              <div className="room-image">
                <img src={Bed4} alt="room image" />
              </div>
              <div className="room-text">
                <h3>ICU Beds</h3>
              </div>
            </article>
            {/* <!-- end of single room -->
        <!-- single room --> */}
          <article className="room">
              <div className="room-image">
                <img src={Bed2} alt="room image" />
              </div>
              <div className="room-text">
                <h3>Ventilators</h3>
              </div>
            </article>
     
            {/* <!-- end of single room -->
             <!-- single room --> */}
             <article className="room">
              <div className="room-image">
                <img src={Bed3} alt="room image" />
              </div>
              <div className="room-text">
                <h3>Oxygenated Beds</h3>
              </div>
            </article>
            {/* <!-- end of single room -->
        <!-- single room --> */}
           
           <article className="room">
              <div className="room-image">
                <img src={Bed1} alt="room image" />
              </div>
              <div className="room-text">
                <h3>ICU Beds</h3>
              </div>
            </article>
            {/* <!-- end of single room --> */}
          </div>
        </section>


        <section className="customers" id="customers">
          <div className="sec-width">
            <div className="title">
              <h2>User_Review</h2>
            </div>
            <div className="customers-container">
              {/* <!-- single customer --> */}
              <div className="customer">
                <div className="rating">
                  <span><i className="fas fa-star"></i></span>
                  <span><i className="fas fa-star"></i></span>
                  <span><i className="fas fa-star"></i></span>
                  <span><i className="fas fa-star"></i></span>
                  <span><i className="far fa-star"></i></span>
                </div>
                <h3>We Loved it</h3>
                <p>Excellent hospital service and service excellence tem is excellent giving a service it is very helpful to people and I thank to all the service</p>
                <img src={Logo} alt="customer image" />
                <span>User </span>
              </div>
              {/* <!-- end of single customer -->
          <!-- single customer --> */}
              <div className="customer">
                <div className="rating">
                  <span><i className="fas fa-star"></i></span>
                  <span><i className="fas fa-star"></i></span>
                  <span><i className="fas fa-star"></i></span>
                  <span><i className="fas fa-star"></i></span>
                  <span><i className="far fa-star"></i></span>
                </div>
                <h3>Comfortable Beds</h3>
                <p>In this Hospital they provide eletric beds which is comfortable for patients and easy to change the positions</p>
                <img src={Logo1} alt="customer image" />
                <span>User </span>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- end of body content -->
        

    <!-- footer --> */}
        <div className="footer">
          <div className="footer-container">
            <div>
              <h2>About Us </h2>
             <p>The Private Hospitals and Nursing Homes’ Association (PHANA) is set to roll out its database that will allow citizens to monitor availability of beds in real-time. While there is a spreadsheet that gives updated information on bed available in the government quota, there is no such centralised database for the private sector, a gap that the city’s civic body and the State government have been trying to plug.</p>
            </div>

            <div>
              <h2>Useful Links</h2>
              <a href="#">facebook</a>
              <a href="#">Rooms</a>
              <a href="#">Subscription</a>
              <a href="#">Gift Card</a>
            </div>

            <div>
              <h2>Privacy</h2>
              <a href="#">Career</a>
              <a href="#">About Us</a>
              <a href="#">Contact Us</a>
              <a href="#">Services</a>
            </div>

            <div>
              <h2>Have A Question</h2>
              <div className="contact-item">
                <span>
                  <i className="fas fa-map-marker-alt"></i>
                </span>
                <span>
                  Rajahmundry , East Godavari , Andhra Pradesh 
                </span>
              </div>
              <div className="contact-item">
                <span>
                  <i className="fas fa-phone-alt"></i>
                </span>
                <span>
                  +xxxxxxxxxxxxxxxxx
                </span>
              </div>
              <div className="contact-item">
                <span>
                  <i className="fas fa-envelope"></i>
                </span>
                <span>
                  suryarekhapalli752@gmail.com
                </span>
             
              </div>

            </div>
          </div>
        </div>
      <div className="footer-bottom">
        <p>copyright &copy; <a href="#"> Surya Rekhapalli</a>  </p>
       
      </div>

      </div>
      
   
  )
}

export default Home;