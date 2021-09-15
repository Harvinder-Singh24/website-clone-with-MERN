import React from 'react'
import './hiring.css'
import Navbar from '../navbar/navbar';
import Helpbtn from '../helpbutton/help';
import Footer from '../footer/footer'
import Hiringform  from './hiringform';
import Hiringprocess from './hiringprocess';

function DedicatedHiring() {

    return (
        <>
        <Helpbtn/>
          <Navbar />
        <div className="dedicatedHiringbackground">
          <div className="dedicatedHiringmaincontainer">
            <div className="dedicatedHiringhomepage">
              hire<span> us</span></div>
            <div className="dedicatedHiringquote">CBNITS aims to provide the best-in-class remote hiring options of<br/>

skilled resources</div>
          </div>
        </div>
        <Hiringform/>
    <Hiringprocess/>
        <Footer/>
        </>
    )
}

export default DedicatedHiring;
