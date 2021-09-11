import React from 'react'
import './footer.css'
import companylogo from "../../images/cbnits-full-logo.png"
import Wave from '../../images/wavecut1.png'
import { Link } from 'react-router-dom'
import certificate from '../../images/certificate.jpg'
function Footer() {
    return (
        <>
        <div className="footermaincontainer">
         <img className="waveicon" src={Wave} alt="wave not found"/>
         <div className="footerdiv">
             <div className="footerdata">
                 <p className="footerheadpara">Have a project?</p>
                 <button className="footerbuttoncontactus">Contact Us</button>
                 <div className="footernavbar">
                     <ul>
                         <li className="footernavli"> <Link to="/" className="footer-nav-links">Home</Link></li>
                         <li className="footernavli"> <Link to="/" className="footer-nav-links">About</Link></li>
                         <li className="footernavli"> <Link to="/" className="footer-nav-links">DedicatedHiring</Link></li>
                         <li className="footernavli"> <Link to="/" className="footer-nav-links">Career</Link></li>
                         <li className="footernavli"> <Link to="/" className="footer-nav-links">Contact</Link></li>
                     </ul>
                 </div>
                 <div className="footercompanydetials">
                     <div className="footercompanylogo"><img className="companylogo" src={companylogo} alt="Logo not found"/></div>
                <div className="companysociallinks">
                <ul>
                         <li className="companysociallinksli"> <Link to="/" className="f39e"></Link></li>

                         </ul>
                </div>
                 </div>
             </div>
             <div className="footercertificateimage"> <img className="certificateimage" src={certificate} alt="Certificate  not found"/></div>
         </div>
        </div>
        </>
    )
}

export default Footer;
