import {FaInstagram, FaFacebook, FaTwitter, FaYoutube, FaLinkedin} from "react-icons/fa";
import "./Footer.scss";
import "../../index.css";
const Footer = () => {
  return (
    <footer>
        <div className='about-contact'>
            <div className="about">
                <div className="about-list">
                        <ul>
                            <li className='about-list-title'>CUSTOMER SERVICES</li>
                            <li>Contact Us</li>
                            <li>Track your Order</li>
                            <li>Shipping & Returns</li>
                            <li>Frequenlty Asked Questions</li>
                            <li>Schedulre an appointment</li>
                        </ul>
                        <ul>
                            <li className='about-list-title'>ABOUT US</li>
                            <li>Origins</li>
                            <li>Our Purpose</li>
                            <li>Careers</li>
                            <li>Sustainability</li>
                            <li>Giving Back</li>
                        </ul>
                        <ul>
                            <li className='about-list-title'>MATERIAL CARE</li>
                            <li>Jewelry Repair</li>
                            <li>Ring Sizing</li>
                            <li>Metal Allergy Resources</li>
                            <li>Styling Tips</li>
                        </ul>
                        <ul>
                            <li className='about-list-title'>MAIN LOCATIONS</li>
                            <li>Chicago, IL</li>
                            <li>San Francisco, CA</li>
                            <li>New York, NY</li>
                            <li>Seattle, WA</li>
                        </ul>
                </div>
            </div>
            <div className="contact">
                <p>You can be one step ahead.</p>
                <p>Sign up to hear about our updates on the dot.</p>
                <div className='social'>
                    <input type="text" placeholder='Your email address'/>
                    <button>SIGN UP</button>
                    <ul className='social-contact'>
                        <li><FaInstagram /></li>
                        <li><FaTwitter /></li>
                        <li><FaFacebook /></li>
                        <li><FaYoutube /></li>
                        <li><FaLinkedin /></li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer
