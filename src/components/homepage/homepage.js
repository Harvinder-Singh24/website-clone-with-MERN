import React from 'react'
import Navbar from '../navbar/navbar'
import './homepage.css'


function Homepage() {
  return (
    <>
      <Navbar />
      <div className="homepagemaincontainer">
        <div className="homepagebackground">
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
