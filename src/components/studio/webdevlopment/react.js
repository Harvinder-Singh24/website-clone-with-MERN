import React from 'react'
import './react.css'
import { useHistory } from 'react-router-dom'
import Navbar from '../../navbar/navbar';
import Helpbtn from '../../helpbutton/help';
import Footer from '../../footer/footer';
function ReactJs() {

    const history = useHistory();
    const HireUsButton=()=>{
       history.push("/dedicatedHiring");
   }

    return (
        <>
            <Helpbtn />
            <Navbar />
            <div className="React-background">
                <div className="React-maincontainer">
                    <div className="React-homepage">REACT  JS DEVELOPMENT
                        <span> SERVICE</span></div>
                    <div className="React-quote">no matter how complex your project is, at CBNITS, our cutting edge and best in<br />
                        class Angular Development Services have predictable outcomes.</div>
                </div>
            </div>
                    <p className="React-offerings">our reactjs <span>development</span></p>
<div className="quote-Box-Wrapper">
                <div className="div-React-Box-quote">Hire the best in the industry React Js developer from CBNITS to secure outstanding software development services according to your buisness requirements.</div>

</div>
            <div className="React-Advantages-Box">
                <p className="advantage-para-Heading">Advantages of hiring React JS</p>
                <p className="advantage-para-Heading1"> devlopers from <span> &nbsp;CBNITS</span></p>
                
            <div className='btndiv'>
                <button className='Hiring-submitbtn'  onClick={HireUsButton}  value="submit">hire us</button>
            </div>
            </div>




            <div className="React-Last-Div-Wrapper"></div>
            <Footer />
        </>
    )
}

export default ReactJs;
