import React from 'react'
import './angular.css'
import { useHistory } from 'react-router-dom'
import Navbar from '../../navbar/navbar';
import Helpbtn from '../../helpbutton/help';
import Footer from '../../footer/footer';
function Angular() {

    const history = useHistory();
    const HireUsButton = () => {
        history.push("/dedicatedHiring");
    }

    return (
        <>
            <Helpbtn />
            <Navbar />
            <div className="Angular-background">
                <div className="Angular-maincontainer">
                    <div className="Angular-homepage">ANGULAR JS DEVELOPMENT
                        <span> SERVICE</span></div>
                    <div className="Angular-quote">no matter how complex your project is, at CBNITS, our cutting edge and best in<br />
                        class Angular Development Services have predictable outcomes.</div>
                </div>
            </div>
                    <p className="angular-offerings">our angularjs <span>development</span><span>offerings</span></p>
<div className="quote-Box-Wrapper">
                <div className="div-angular-Box-quote">Hire the best in the industry Angular Js developer from CBNITS to secure outstanding software development services according to your buisness requirements.</div>

</div>
            <div className="angular-Advantages-Box">
                <p className="advantage-para-Heading">Advantages of hiring Angular JS</p>
                <p className="advantage-para-Heading1"> devlopers from <span> &nbsp;CBNITS</span></p>
                
            <div className='btndiv'>
                <button className='Hiring-submitbtn'  onClick={HireUsButton}  value="submit">hire us</button>
            </div>
            </div>




            <div className="Angular-Last-Div-Wrapper"></div>
            <Footer />
        </>
    )
}

export default Angular;
