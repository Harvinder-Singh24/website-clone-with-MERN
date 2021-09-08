import React from 'react'
import Navbar from '../navbar/navbar'
import './homepage.css'


function Homepage() {
  return (
    <>
        <div className="homepagebackground">
        <Navbar />
      <div className="homepagemaincontainer">
          <div className="headinghomepage">
            WE ARE STARTUP<span> SPECIALISTS</span></div>
        <div className="quote">Having successful track record of bringing 500+ products to life.<br />
          Leading the path of innovation!</div>
        </div>
      </div>
    </>
  )
}

export default Homepage
