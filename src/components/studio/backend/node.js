import React from 'react'
import './node.css'
import { useHistory } from 'react-router-dom'
import Navbar from '../../navbar/navbar';
import Helpbtn from '../../helpbutton/help';
import Footer from '../../footer/footer';

function NodeJS() {

    const history = useHistory();
    const HireUsButton = () => {
        history.push("/dedicatedHiring");
    }

    return (
        <>
            <Helpbtn />
            <Navbar />
            <div className="Node-Js-background">
                <div className="Node-Js-maincontainer">
                    <div className="Node-Js-homepage">
                         NODE JS DEVELOPMENT</div>
                    <div className="Node-Js-quote">End-to-end Node.JS development service to build faster and sca-label <br/>real-time application..</div>
                </div>
            </div>
                    <p className="Node-Js-offerings">node js <span>development</span><span>offerings</span></p>
<div className="quote-Box-Wrapper">
                <div className="div-Node-Js-Box-quote">Hire the best in the industry Angular Js developer from CBNITS to secure outstanding software development services according to your buisness requirements.</div>

</div>
            <div className="Node-Js-Advantages-Box">
                <p className="advantage-para-Heading">Why hire Node JS</p>
                <p className="advantage-para-Heading1"> devlopers from <span> &nbsp;CBNITS?</span></p>
                
            <div className='btndiv'>
                <button className='Hiring-submitbtn'  onClick={HireUsButton}  value="submit">hire us</button>
            </div>
            </div>




            <div className="Node-Js-Last-Div-Wrapper"></div>
            <Footer />
        </>
    )
}

export default NodeJS;
