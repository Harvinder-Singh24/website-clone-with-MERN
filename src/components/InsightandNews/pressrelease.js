import React from 'react'
import './pressrelease.css'
import Navbar from '../navbar/navbar'
import Footer from '../footer/footer';
import Helpbtn from '../helpbutton/help';
function PressRelease() {
    return (
        <div>
             <Helpbtn/>
        <Navbar />
      <div className="pressRelease-background">
        <div className="pressRelease-maincontainer">
          <div className="pressRelease-homepage">
        PRESS RELEASES</div>
          <div className="pressRelease-quote">Leading the path of innovation!</div>
        </div>
      </div>
      <div className="pressRelease-Next-Div"></div>
      <Footer />
        </div>
    )
}

export default PressRelease;
