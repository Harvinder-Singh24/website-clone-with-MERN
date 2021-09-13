import React from 'react';
import Navbar from '../navbar/navbar'
import './aboutus.css'
import Footer from '../footer/footer';
import Helpbtn from '../helpbutton/help';

function Aboutus() {
    return (
      <>
        <Helpbtn/>
          <Navbar />
        <div className="aboutusbackground">
          <div className="aboutusmaincontainer">
            <div className="aboutushomepage">
              about<span> us</span></div>
            <div className="aboutusquote">Our expertise , know more about what we do</div>
          </div>
        </div>
  <Footer/>
      </>
    )
  }
  
  export default Aboutus;