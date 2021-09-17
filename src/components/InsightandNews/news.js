import React from 'react'
import './news.css'
import Navbar from '../navbar/navbar'
import Footer from '../footer/footer';
import Helpbtn from '../helpbutton/help';
function News() {
    return (
        <div>
             <Helpbtn/>
        <Navbar />
      <div className="News-background">
        <div className="News-maincontainer">
          <div className="News-homepage">
        NEWS</div>
          <div className="News-quote">Leading the path of innovation!</div>
        </div>
      </div>
      <div className="News-Next-Div"></div>
      <Footer />
        </div>
    )
}

export default News;
