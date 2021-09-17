import React from 'react'
import './career.css'
import Navbar from '../navbar/navbar'
import Careerdetial from './careerdetial';
import Footer from '../footer/footer';
import Helpbtn from '../helpbutton/help';
function Career() {
    return (
        <div>
             <Helpbtn/>
        <Navbar />
      <div className="Career-background">
        <div className="Career-maincontainer">
          <div className="Career-homepage">
        JOIN THE    <span>CBNITS TEAM</span></div>
          <div className="Career-quote">You can check the latest job openings here if you are looking to be a part of a your, vibrant and growing team. Take your first step to an <br/>incredible career with us.</div>
        </div>
      </div>
      <div className="Career-Next-Div"></div>
      <Careerdetial />
      <Footer />
        </div>
    )
}

export default Career;  
