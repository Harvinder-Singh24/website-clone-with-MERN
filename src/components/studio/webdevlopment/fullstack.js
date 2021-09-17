import React from 'react'
import './fullstack.css'
import { useHistory } from 'react-router-dom'
import Navbar from '../../navbar/navbar';
import Helpbtn from '../../helpbutton/help';
import Footer from '../../footer/footer';
function FullStack() {

    const history = useHistory();
    const HireUsButton=()=>{
       history.push("/dedicatedHiring");
   }

    return (
        <>
            <Helpbtn />
            <Navbar />
            <div className="full-Stack-background">
                <div className="full-Stack-maincontainer">
                    <div className="full-Stack-homepage">HIRE DEDICATED  
                        <span> FULL-STACK DEVELOPERS</span></div>
                    <div className="full-Stack-quote">Scalable & cost-effective full-stack development<br/>

solutions.</div>
                </div>
            </div>
                    <p className="full-Stack-offerings">our deticated<span> full-</span></p>
                    <p className="full-Stack-offerings1">stack developers</p>
<div className="quote-Box-full-stack-Wrapper">
                <div className="div-full-Stack-Box-quote">Hire the best in the industry React Js developer from CBNITS to secure outstanding software development services according to your buisness requirements.</div>

</div>
            <div className="full-Stack-Advantages-Box">
                <p className="advantage-para-Heading">Advantages of hiring React JS</p>
                <p className="advantage-para-Heading1"> devlopers from <span> &nbsp;CBNITS</span></p>
                
            <div className='btndiv'>
                <button className='Hiring-submitbtn'  onClick={HireUsButton}  value="submit">hire us</button>
            </div>
            </div>




            <div className="full-Stack-Last-Div-Wrapper"></div>
            <Footer />
        </>
    )
}

export default FullStack;
