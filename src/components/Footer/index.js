import { RiTwitterXLine } from "react-icons/ri";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import "./index.css"
const Footer=()=>{
    return (
        <div className="footer-container">
            <div className="follow-us-section">
                <h1>Follow us</h1>
                 <div className="icons">
                    <RiTwitterXLine color="#fff" size={20}/>
                    <FaFacebook color="#fff" size={20}/>
                    <FaLinkedin color="#fff" size={20}/>
                 </div>
            </div>
            <div className="contact-us-section">
                <h1>Contact Us</h1>
                
                <p> <span><FaPhoneAlt color="#fff"/></span>+91 6281456842 </p>
            </div>
            <div className="address-section">
                <h1>Address</h1>
                <p>Kacheguda, near falknama hotel pin code :50212</p>
            </div>
        </div>
    )
}
export default Footer