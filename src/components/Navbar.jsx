import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faLinkedin, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

function Navbar() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  function handleClickHamberger() {
    setSidebarOpen(!isSidebarOpen);
  }

  function cancleHandler(){
    setSidebarOpen(false)
  }

  return (
    <div>
      {/* <navbar>
        <div className="nav-bar">
          <div className="contact-list">
            <ul>
              <li>singhas1418@gmail.com</li>
              <li>Helpline :- 8115448296</li>
            </ul>
          </div>

          <div className="icons">
            <ul>
              <li><a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faFacebook} /> </a></li>
              <li><a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin} /> </a></li>
              <li><a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faTwitter} /> </a></li>
              <li><a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faInstagram} /></a></li>
            </ul>
          </div>
        </div>
      </navbar> */}


      <navbar className="tops">
        <div className="nav-bar-main-class">
          <div className="logo">
            <img src="" alt="logo" />
          </div>

          <div className="buttons">
            <button className="onlineClassbtn">ONLINE CLASS</button>
            <button className="onlineAddmissionbtn">ONLINE ADMISSION</button>

            <div className="hamburger">
              <button onClick={handleClickHamberger} className="btn-hamburger">
                <FontAwesomeIcon icon={faBars} />
              </button>
            </div>
          </div>
        </div>
      </navbar>
      
      {isSidebarOpen && <div className="backdrop" onClick={cancleHandler}></div>}
      {isSidebarOpen && (
        <div className="sidebar">
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href='/course'>Course</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Contact</a></li>
          </ul>

          <ul className='cancle'>
            <li onClick={cancleHandler}>X</li>
          </ul>
        </div>
      )}

    

      <section>
     
      </section>
    </div>
  );
}

export default Navbar;
