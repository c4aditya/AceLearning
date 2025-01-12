import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Import FontAwesome
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'; // Import the specific icon


function MoreAboutUs() {
  return (
    <div>
      <div className='outer-class-aboutUs'>
        <div className='inner-class-aboutUs'>
          <div className='main-content-class'>
            <div className='content-section'>
              <h1>About Us</h1>
              <p>
              Welcome To IMT Academy IMT Academy has earned a reputation of academic excellence in providing practical and quality academic programme's in the field of Multiple Industries.

A premier institution dedicated to shaping the future of aviation professionals. With a commitment to excellence, our academy offers a comprehensive curriculum designed to equip students with the skills and knowledge necessary to thrive in the dynamic aviation industry.

Ever since its commencement the institute has promoted entrepreneurship, new concepts and technological innovations among its students to create them the longer term leaders of the skilled world. IMT Academy delivers the real-world experience one needs to succeed in today's competitive global marketplace.
              </p>
              
                <button className='knowMorebtn'>
                  Know More <FontAwesomeIcon class="icons" icon={faArrowRight} /> {/* Using FontAwesome icon here */}
                </button>
              
            </div>
            <div className='image-section'>
              <img src='https://www.imtacademy.in/assets/images/banner/home-placement-section-image.jpeg' alt="Placement Section" />
              <button className='knowMorebtn'>
                  Know More <FontAwesomeIcon class="icons" icon={faArrowRight} /> {/* Using FontAwesome icon here */}
                </button>
            </div>
          </div>



          <div className='main-content-class'>
          <div className='image-section'>
              <img src='https://www.imtacademy.in/assets/images/banner/home-our-story-image.jpeg' alt="Placement Section" />
            </div>
            <div className='content-section'>
              <h1>Our Story</h1>
              <p>
              Our Academy's story is a testament to excellence and innovation in education. Established with a mission to transform learning experiences, we have become a premier institution renowned for our cutting-edge programs and exceptional faculty. Our journey is marked by a relentless pursuit of academic excellence and a commitment to nurturing talent. From our humble beginnings, we’ve evolved to offer diverse, industry-relevant courses that prepare students for success in a rapidly changing world. With state-of-the-art facilities and a supportive learning environment, we empower students to achieve their full potential. Guided by our values of integrity, excellence, and inclusivity, we continue to lead and inspire, shaping the leaders of tomorrow and advancing the frontiers of knowledge.
              </p>
              
                <button className='knowMorebtn'>
                  Know More <FontAwesomeIcon class="icons" icon={faArrowRight} /> {/* Using FontAwesome icon here */}
                </button>
              
            </div>
           
          </div>


          <div className='main-content-class'>
            <div className='content-section'>
              <h1>Our Placement Support</h1>
              <p>
                Our placement support for Online Courses delivers industry-leading career services to ensure your success. 
                We provide expert resume optimization, targeted job search strategies, and advanced interview coaching tailored specifically for the sector. 
                Leveraging a robust network of professionals and exclusive job opportunities, we connect you with top employers and industry insiders. 
                Our personalized career guidance aligns your skills with market demands, enhancing your employability. 
                With our comprehensive support, graduates of our online courses are well-prepared to secure prestigious positions and thrive in the competitive industry, setting the stage for a successful career.
              </p>
              
                <button className='knowMorebtn'>
                  Know More <FontAwesomeIcon class="icons" icon={faArrowRight} /> {/* Using FontAwesome icon here */}
                </button>
              
            </div>
            <div className='image-section'>
              <img src='https://www.imtacademy.in/assets/images/banner/home-placement-section-image.jpeg' alt="Placement Section" />
            </div>
          </div>


        </div>
      </div>
    </div>
  );
}

export default MoreAboutUs;
