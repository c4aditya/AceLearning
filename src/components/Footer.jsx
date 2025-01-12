import React from "react";
import fb from "../images/fb.jpeg";
import linkdin from "../images/Linkdin.jpeg";
import insta from "../images/insta.jpeg";
import x from "../images/Twitter.jpeg";



const Footer = () => {

    return <footer >
        <div className="footer">
            <div className="sb_footer section_padding">
                <div className="sb_footer-links">
                    <div className="contact_details">
                        <h4>About us</h4>
                      
                            <p>SGACE Learning is proud to be recognized as one of the leading training institutes in India.Guided by a team of highly skilled professionals.</p>
                    </div>
                    <div className="sb_footer-links_div">
                        <h4>Information Link</h4>
                        <a href="/About ">
                            <p>Home</p>
                        </a>
                        <a href="/About ">
                            <p>About Us</p>
                        </a>
                        <a href="/Resource">
                            <p>Careers</p>
                        </a>
                        <a href="/Resource">
                            <p>Cources</p>
                        </a>
                        <a href="/Resource">
                            <p>Contact Us</p>
                        </a>
                        <a href="/Resource">
                            <p>Privacy Policy</p>
                        </a>
                    </div>
                    <div className="contact_details">
                        <h4>Contacts</h4>
                        
                            <p>Address:- SGACE Learning</p>
                            <p>Nehru market gate-4 </p>
                            <p>Greater Noida, 201301</p>
                            <p>Phone No +91-997777772</p>
                        
                            
                    </div>
                  
                {/* </div> */}
            </div >
            <hr className="Divider"/>

            <div className="sb_footer-below">
                <div className="sb_footer-copyright">
                    <p>
                        @{new Date().getFullYear()} SGACELEARNING.all right reserved.
                    </p>
                </div>
                <div className="sb_footer-below-links">
                        {/* <h4>social media</h4> */}
                        <div className="socialmedia">
                        <p><img src={fb} alt=""/></p>
                        <p><img src={x} alt=""/></p>
                        <p><img src={insta} alt=""/></p>
                        <p><img src={linkdin} alt=""/></p>
                    </div>
                
                </div>
            </div>


        </div>
    </div>
    
</footer>
;

};

export default Footer;