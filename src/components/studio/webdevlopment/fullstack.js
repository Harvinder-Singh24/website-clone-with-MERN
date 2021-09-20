import React from 'react'
import './fullstack.css'
import { useHistory } from 'react-router-dom'
import Navbar from '../../navbar/navbar';
import Helpbtn from '../../helpbutton/help';
import Footer from '../../footer/footer';


  

      
function FullStack() {
    
    const history = useHistory();
    const HireUsButton = () => {
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
                    <div className="full-Stack-quote">Scalable & cost-effective full-stack development<br />

                        solutions.</div>
                </div>
            </div>
            <p className="full-Stack-offerings">our deticated<span> full-</span></p>
            <p className="full-Stack-offerings1">stack developers</p>
            <div className="quote-Box-full-stack-Wrapper">
                <div className="div-full-Stack-Box-quote">why hire full-stack<span>developers from cbnits ?</span></div>

            </div>
            <div className="full-Stack-techincal-Box">
                <p className="techincal-para-Heading">techincal skills of our<span> full-stack developers</span> </p>
                <ul className="technical--ul" >
                
           
                    <li className="technical-Li-List">Back-End</li>
                    <li className="technical-Li-List">Front-End</li>
                    <li className="technical-Li-List">Mobile App Development</li>
                    <li className="technical-Li-List">Database</li>
                    <li className="technical-Li-List">Project Management Tools</li>
                    <li className="technical-Li-List">Technical Skill</li>
                </ul>


                <div className='btndiv'>
                    <button className='Hiring-submitbtn' onClick={HireUsButton} value="submit">hire us</button>
                </div>
            </div>




            <div className="full-Stack-Last-Div-Wrapper"></div>
            <Footer />
        </>
    )
}
      

export default FullStack;
