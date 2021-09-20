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
    const clcicked_button_color = (id) => {
        document.getElementById(id).style.backgroundColor = "rgb(61, 198, 252)";
        document.getElementById(id).style.color = "white";
    }
    const Unclcicked_button_color = (id) => {
        document.getElementById(id).style.backgroundColor = "rgb(228, 228, 228)";
        document.getElementById(id).style.color = "black";
    }
    const L1 = "Backend-Button-list";
    const L2 = "front-end-button";
    const L3 = "mobile-dev";
    const L4 = "database-button";
    const L5 = "project-Manage";
    const L6 = "technical-skills";
    const clickedButtonList = () => {
        clcicked_button_color(L1);
        Unclcicked_button_color(L2);
        Unclcicked_button_color(L3);
        Unclcicked_button_color(L4);
        Unclcicked_button_color(L5);
        Unclcicked_button_color(L6);

    }
    const clickedButtonList1 = () => {
        clcicked_button_color(L2);
        Unclcicked_button_color(L1);
        Unclcicked_button_color(L3);
        Unclcicked_button_color(L4);
        Unclcicked_button_color(L5);
        Unclcicked_button_color(L6);

    }
    const clickedButtonList2 = () => {
        clcicked_button_color(L3);
        Unclcicked_button_color(L2);
        Unclcicked_button_color(L1);
        Unclcicked_button_color(L4);
        Unclcicked_button_color(L5);
        Unclcicked_button_color(L6);

    }
    const clickedButtonList3 = () => {
        clcicked_button_color(L4);
        Unclcicked_button_color(L2);
        Unclcicked_button_color(L3);
        Unclcicked_button_color(L1);
        Unclcicked_button_color(L5);
        Unclcicked_button_color(L6);

    }
    const clickedButtonList4 = () => {
        clcicked_button_color(L5);
        Unclcicked_button_color(L2);
        Unclcicked_button_color(L3);
        Unclcicked_button_color(L4);
        Unclcicked_button_color(L1);
        Unclcicked_button_color(L6);

    }
    const clickedButtonList5 = () => {
        clcicked_button_color(L6);
        Unclcicked_button_color(L2);
        Unclcicked_button_color(L3);
        Unclcicked_button_color(L4);
        Unclcicked_button_color(L5);
        Unclcicked_button_color(L1);
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
                
           
                <li className="technical-Li-List-Ui-Ux" onClick={clickedButtonList} id="Backend-Button-list" >Back-End</li>
                    <li className="technical-Li-List-Ui-Ux" onClick={clickedButtonList1} id="front-end-button">Front-End</li>
                    <li className="technical-Li-List-Ui-Ux" onClick={clickedButtonList2} id="mobile-dev">Mobile App Development</li>
                    <li className="technical-Li-List-Ui-Ux" onClick={clickedButtonList3} id="database-button">Database</li>
                    <li className="technical-Li-List-Ui-Ux" onClick={clickedButtonList4} id="project-Manage">Project Management Tools</li>
                    <li className="technical-Li-List-Ui-Ux" onClick={clickedButtonList5} id="technical-skills">Technical Skill</li>
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
