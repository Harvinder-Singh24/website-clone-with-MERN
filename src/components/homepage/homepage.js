import React from 'react';
import Navbar from '../navbar/navbar'
import './homepage.css'
import Work from './work'
import Ourexpertise from './ourexpertise';
import Specialised from './specialised';
import Aboutcbnits from './aboutcbnits';
import Customerreview from './customerreview';
import Footer from '../footer/footer';
import Helpbtn from '../helpbutton/help';
// import Aboutus from '../aboutus/aboutus'
function Homepage() {
  return (
    <>
      <Helpbtn/>
        <Navbar />
      <div className="homepagebackground">
        <div className="homepagemaincontainer">
          <div className="headinghomepage">
            WE ARE STARTUP<span> SPECIALISTS</span></div>
          <div className="quote">Having successful track record of bringing 500+ products to life.<br />
          Leading the path of innovation!</div>
        </div>
      </div>
<Work/>
<Ourexpertise/>
<Specialised/>
<Aboutcbnits/>
<Customerreview />
<Footer/>
{/* <Aboutus/> */}
    </>
  )
}

export default Homepage;
