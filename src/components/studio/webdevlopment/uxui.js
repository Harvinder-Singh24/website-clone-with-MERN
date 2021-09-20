import React from 'react'
import './uxui.css'
import { useHistory } from 'react-router-dom'
import Navbar from '../../navbar/navbar';
import Helpbtn from '../../helpbutton/help';
import Footer from '../../footer/footer';
import uxuiimage from '../../../images/uxuiimage.jpg'



function UxandUi() {

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
            <div className="Ux-Ui-Design-background">
                <div className="Ux-Ui-Design-maincontainer">
                    <div className="Ux-Ui-Design-homepage">UX & UI
                        <span> DEVELOPMENT</span></div>
                    <div className="Ux-Ui-Design-quote">User-centric UI UX design to simplify<br />

                        human interactions<br />

                        solutions.</div>
                </div>
            </div>
            <div className="webpage-Mobile">
                <img src={uxuiimage} className="uxuxiicon-image" alt="Icon-Image-UX-UI" />
                <div className="webpage-Mobile-para">
                    <p className="Ux-Ui-Design-offerings"> web page &<span> mobile </span></p>
                    <p className="Ux-Ui-Design-offerings1">application designing have become a very sophisticated technology-based art. At CBNITS, we follow a foundational approach for building UX/UI strategy for our clients. Our UI/UX designing team is globally recognized for designing the most innovative and user-centric experience for any digital product. We follow the best UI/UX practices in the industry.pabilities for your company and get it up and running in quick time.</p>
                </div>
            </div>


            <div className="quote-Box-Ux-Ui-Design-Wrapper">
                <div className="div-Ux-Ui-Design-Box-quote">why is cbnits <span> more than</span></div>
                <div className="div-Ux-Ui-Design-Box-quote1">just another UX UI agency</div>
                <div className="why-is-cbnits-more-than-Wrapper">
                    <div className="cbnits-Ui-Ux-advantage-Wrapper">
                        <div className="advantage-Box-Wrapper">
                            <div className="advantage-Box-Wrapper-heading">
                                <p className="number-para">1</p>
                                <abbr className="advantage-abbr">Breathe new life into the existing design</abbr></div>
                            <div className="hr-line"></div>
                            <p className="advantage-Detial-para">Our mission is to provide a bespoke and tailor-made design strategy into the existing design that will offer the best user experience.  </p>
                        </div>
                    </div>
                    <div className="cbnits-Ui-Ux-advantage-Wrapper">
                        <div className="advantage-Box-Wrapper">
                            <div className="advantage-Box-Wrapper-heading">
                                <p className="number-para">2</p>
                                <abbr className="advantage-abbr">Future-focused design concept</abbr></div>
                            <div className="hr-line"></div>
                            <p className="advantage-Detial-para">AT CBNITS, we follow a future-proof design process to create products that will exceed the expectations of your current and future clients. </p>
                        </div>
                    </div>
                    <div className="cbnits-Ui-Ux-advantage-Wrapper">
                        <div className="advantage-Box-Wrapper">
                            <div className="advantage-Box-Wrapper-heading">
                                <p className="number-para">3</p>
                                <abbr className="advantage-abbr">Known for our attention to detail</abbr></div>
                            <div className="hr-line"></div>
                            <p className="advantage-Detial-para">Every good user experience is the result of intensive research, that's why we uncover every minute details and bring them into play. </p>
                        </div>
                    </div>
                    <div className="cbnits-Ui-Ux-advantage-Wrapper">
                        <div className="advantage-Box-Wrapper">
                            <div className="advantage-Box-Wrapper-heading">
                                <p className="number-para">4</p>
                                <abbr className="advantage-abbr">Dedicated UX/UI resource hiring option</abbr></div>
                            <div className="hr-line"></div>
                            <p className="advantage-Detial-para">We work in dedicated projects and our dedicatedly-hired resources can join your existing team to help you deliver outstanding results. </p>
                        </div>
                    </div>

                </div>


            </div>
            <div className="Ux-Ui-Design-techincal-Box">
                <p className="techincal-para-Heading">deliverables<span> what we can design for you </span> </p>
            </div>


            <div className="what-We-Can-Design-For-you">
                <div className="What-We-Can-Wrapper">
                    <div className="Wrapper-Box-Design">
                        <div className="number-Box-circle-Design"><p>1</p>   </div>
                        <p className="Wrapper-Box-Design-Detail"> User Information Design</p>
                    </div>
                    <div className="Wrapper-Box-Design">
                        <div className="number-Box-circle-Design"><p>2</p>   </div>
                        <p className="Wrapper-Box-Design-Detail">User Experience Design</p>
                    </div>
                    <div className="Wrapper-Box-Design">
                        <div className="number-Box-circle-Design"><p>3</p>   </div>
                        <p className="Wrapper-Box-Design-Detail"> Design Research & Sprint
                        </p>
                    </div>
                    <div className="Wrapper-Box-Design">
                        <div className="number-Box-circle-Design"><p>4</p>   </div>
                        <p className="Wrapper-Box-Design-Detail">Graphic Design</p>
                    </div>
                </div>

                <div className="What-We-Can-Wrapper">
                    <div className="Wrapper-Box-Design">
                        <div className="number-Box-circle-Design"><p>5</p>   </div>
                        <p className="Wrapper-Box-Design-Detail"> Web Design</p>
                    </div>
                    <div className="Wrapper-Box-Design">
                        <div className="number-Box-circle-Design"><p>6</p>   </div>
                        <p className="Wrapper-Box-Design-Detail">Desktop App Design</p>
                    </div>
                    <div className="Wrapper-Box-Design">
                        <div className="number-Box-circle-Design"><p>7</p>   </div>
                        <p className="Wrapper-Box-Design-Detail"> UX/UI Consulting
                        </p>
                    </div>
                    <div className="Wrapper-Box-Design">
                        <div className="number-Box-circle-Design"><p>8</p>   </div>
                        <p className="Wrapper-Box-Design-Detail">Branding & Identity</p>
                    </div>
                </div>

                <div className="What-We-Can-Wrapper">
                    <div className="Wrapper-Box-Design">
                        <div className="number-Box-circle-Design"><p>9</p>   </div>
                        <p className="Wrapper-Box-Design-Detail"> Concept Design</p>
                    </div>
                    <div className="Wrapper-Box-Design">
                        <div className="number-Box-circle-Design"><p>10</p>   </div>
                        <p className="Wrapper-Box-Design-Detail">Interaction Design</p>
                    </div>
                    <div className="Wrapper-Box-Design">
                        <div className="number-Box-circle-Design"><p>11</p>   </div>
                        <p className="Wrapper-Box-Design-Detail"> Wireframe Design
                        </p>
                    </div>
                    <div className="Wrapper-Box-Design">
                        <div className="number-Box-circle-Design"><p>12</p>   </div>
                        <p className="Wrapper-Box-Design-Detail">Prototyping</p>
                    </div>
                </div>
            </div>



            <div className="technology-Stack-Wrapper">
                <div className="Ux-Ui-Design-techincal-Box">
                    <p className="technology-Details-Stack-Parahead">ui/ux <span>  technology stack </span> </p>
                    <p className="technology-Details-Stack-ParaDeatials">Our UI/UX development team utilizes the right mixture of technologies to deliver immersive user experience.</p>
                </div>


                <ul className="technical--ul-Ui-Ux" >
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


export default UxandUi;
