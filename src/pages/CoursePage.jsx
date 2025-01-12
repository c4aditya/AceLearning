import React from 'react';
import video from "../images/videos.mp4";
import "../pages/coursePage.css";
import posterImg from "../images/coursePoster.jpg"

import { useNavigate } from 'react-router-dom';
function CoursePage() {
  const nevigate = useNavigate();

 function enrolhandler(){
  // for open form after click we use useNevigate()

  console.log("the button is clicked")
  nevigate('/enrollment')
 
 }
  return (
    <div >
    <div className="poster">
    <img src={posterImg} alt="img not found" />
    <div className="text">OUR COURSES</div>
</div>
        <div className='course-top-class'>
            <div className='course-box-content'>
                <div className='main-containet-course'>
                    <div className='course-video'>                        
                              {/* Video tag for autoplay, loop, and mute */}
                              <video 
                                src={video}
                                autoPlay 
                                loop 
                                muted 
                                playsInline
                                className="video-players"
                             
                              >
                                Your browser does not support the video tag.
                              </video>
                            </div>
                            <div className='course-content'>
                            <h1>1 - REENGINEERING PROGRAM</h1>
                            <p>We offer continuous support and coaching to help you grow and reach your full potential. Our tailored development plans are designed to meet your unique needs, ensuring your personal and professional growth. Through self-discovery and assessment, we empower you to understand your strengths and areas for improvement. With a clear, structured approach, we guide you towards achieving your goals. Ready to take the next step? Enquire now!</p>
                            <button onClick={enrolhandler} className='course-button-enroll'>Enroll Now</button>

                             </div>
                    </div>
                  
                    <div className='main-containet-course'>

                    <div className='course-content'>
                            <h1>2 - AIR HOSTESS</h1>
                            <p>Enquire now to enhance your career with essential customer service skills that will set you apart in any industry. Our program also covers critical safety and emergency procedures, ensuring you're well-prepared to handle any situation with confidence. With professional training from industry experts, you'll gain the expertise needed to excel in your role. This comprehensive approach will give you the tools to provide exceptional service while maintaining high standards of safety and professionalism. Take the next step in advancing your career and mastering key workplace skills </p>
                            <button onClick={enrolhandler} className='course-button-enroll'>Enroll Now</button>

                             </div>

                    <div className='course-video'>                        
                              {/* Video tag for autoplay, loop, and mute */}
                              <video 
                                src={video} 
                                autoPlay 
                                loop 
                                muted 
                                playsInline
                                className="video-players"
                             
                              >
                                Your browser does not support the video tag.
                              </video>
                            </div>
                            
                    </div>

                    <div className='main-containet-course'>
                    <div className='course-video'>                        
                              {/* Video tag for autoplay, loop, and mute */}
                              <video 
                                src={video} 
                                autoPlay 
                                loop 
                                muted 
                                playsInline
                                className="video-players"
                             
                              >
                                Your browser does not support the video tag.
                              </video>
                            </div>
                            <div className='course-content'>
                            <h1>3 - HOTEL MANAGEMENT COURSE</h1>
                           <p>Enquire now about our Certification in Hotel Management and take the first step towards a rewarding career in the hospitality industry. Explore exciting career opportunities that will open doors to various roles in hotels, resorts, and event management. Our program includes practical training, ensuring you gain hands-on experience to excel in the field. With a comprehensive curriculum, you'll be equipped with the knowledge and skills needed to thrive in a dynamic industry. Get ready to embark on a journey that blends theoretical learning with real-world applications.</p>
                            <button onClick={enrolhandler} className='course-button-enroll'>Enroll Now</button>

                             </div>
                    </div>


                    <div className='main-containet-course'>
                    <div className='course-content'>
                            <h1>4 - CRUISE SHIP</h1>
                           <p>Our comprehensive curriculum offers a well-rounded education designed to equip you with essential skills for success. With practical training, you'll gain hands-on experience that prepares you for real-world challenges. We also prioritize safety and emergency procedures, ensuring you are well-prepared to handle any situation with confidence. Enquire now to take the next step in advancing your career and mastering the skills that matter most. </p>
                            <button onClick={enrolhandler} className='course-button-enroll'>Enroll Now</button>

                             </div>

                    <div className='course-video'>                        
                              {/* Video tag for autoplay, loop, and mute */}
                              <video 
                                src={video} 
                                autoPlay 
                                loop 
                                muted 
                                playsInline
                                className="video-players"
                             
                              >
                                Your browser does not support the video tag.
                              </video>
                            </div>
                           
                    </div>



                    <div className='main-containet-course'>
                    <div className='course-video'>                        
                              {/* Video tag for autoplay, loop, and mute */}
                              <video 
                                src={video} 
                                autoPlay 
                                loop 
                                muted 
                                playsInline
                                className="video-players"
                             
                              >
                                Your browser does not support the video tag.
                              </video>
                            </div>
                            <div className='course-content'>
                            <h1>5 - AIRPORT MANAGEMENT</h1>
                          <p>Enquire now to explore valuable industry insights that will keep you updated on the latest trends in airport management. Our program offers in-depth regulatory knowledge, ensuring you're well-versed in aviation laws, policies, and compliance standards. With a comprehensive curriculum, you will be equipped with the skills and expertise needed to manage airport operations efficiently. This training will help you excel in a fast-paced, dynamic industry, preparing you for leadership roles. Start your journey towards becoming a skilled airport management professional today.</p>
                            <button onClick={enrolhandler} className='course-button-enroll'>Enroll Now</button>

                             </div>
                    </div>


                    <div className='main-containet-course'>
                    <div className='course-content'>
                            <h1>6 - AVIATION COURSE</h1>
                           <p>Enquire now to gain valuable industry insights that will keep you ahead in the competitive market. Our training provides essential regulatory knowledge, ensuring you are well-prepared to navigate industry standards and compliance. With a comprehensive curriculum, we equip you with the skills and knowledge required for success in your career. Each module is designed to offer practical, real-world applications, helping you stay relevant in a rapidly changing landscape. Don’t miss the opportunity to advance your expertise and make informed decisions in your field.</p>
                            <button onClick={enrolhandler} className='course-button-enroll'>Enroll Now</button>

                             </div>

                    <div className='course-video'>                        
                              {/* Video tag for autoplay, loop, and mute */}
                              <video 
                                src={video} 
                                autoPlay 
                                loop 
                                muted 
                                playsInline
                                className="video-players"
                             
                              >
                                Your browser does not support the video tag.
                              </video>
                            </div>
                          
                    </div>


                    
                </div>
            </div>
        </div>
  
  )
}

export default CoursePage;