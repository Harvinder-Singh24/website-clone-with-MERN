import React from 'react'
import './contactus.css'
import Navbar from '../navbar/navbar';
import Helpbtn from '../helpbutton/help';
import Contactfrom from './contactfrom';

function Contactus() {

    return (
        <>
        <Helpbtn/>
          <Navbar />
        <div className="contactusbackground">
          <div className="contactusmaincontainer">
            <div className="contactushomepage">
              Contactus<span> us</span></div>
            <div className="contactusquote">Get in touch with our help team & get instant response.</div>
          </div>
        </div>
        <Contactfrom />
        </>
    )
}

export default Contactus;
