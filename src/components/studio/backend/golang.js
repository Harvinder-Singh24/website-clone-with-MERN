import React from 'react'
import './golang.css'
import { useHistory } from 'react-router-dom'
import Navbar from '../../navbar/navbar';
import Helpbtn from '../../helpbutton/help';
import Footer from '../../footer/footer';

function Golang() {

    const history = useHistory();
    const HireUsButton = () => {
        history.push("/dedicatedHiring");
    }

    return (
        <>
            <Helpbtn />
            <Navbar />
            <div className="golang-background">
                <div className="golang-maincontainer">
                    <div className="golang-homepage">
                         GOLANG DEVELOPMENT</div>
                    <div className="golang-quote">With CBNITS' top of the line Golang development services, bring <br/>your most complex software ideas to life.</div>
                </div>
            </div>
                    <p className="golang-offerings"> our golang <span>development</span></p>
                    <p className="golang-offerings1">Service under a single umbrella</p>
<div className="quote-Box-Wrapper">
                <div className="div-golang-Box-quote">Hire the best in the industry Angular Js developer from CBNITS to secure outstanding software development services according to your buisness requirements.</div>

</div>
            <div className="golang-Advantages-Box">
                <p className="advantage-para-Heading">Advantages of hiring Golang</p>
                <p className="advantage-para-Heading1"> devlopers from <span> &nbsp;CBNITS?</span></p>
                
            <div className='btndiv'>
                <button className='Hiring-submitbtn'  onClick={HireUsButton}  value="submit">hire us</button>
            </div>
            </div>




            <div className="golang-Last-Div-Wrapper"></div>
            <Footer />
        </>
    )
}

export default Golang;
