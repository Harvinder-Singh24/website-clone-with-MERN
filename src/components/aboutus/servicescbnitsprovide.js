import React from 'react'
import "./servicescbnitsprovide.css"
import softpng from "../../images/softwareengineer.png"
import cloudspng from "../../images/cloudengineer.png"
import cyberpng from "../../images/Cybersecurity.png"
import uxuipng from "../../images/uxui.png"
import datasciencepng from "../../images/datascientist.png"




function Servicescbnitsprovide() {
    return (
        <>
            <div className="servicesmaincontainer">
                    <p className="servicespara">  about <span>cbnits</span></p>
                <div className="services">
                    <div className="servicesdetials">
                            <div className="serviesimagesandabbriviation"><img src={softpng} alt="Software Engineers png" /> <abbr> 200+ Exper-level Software Engineers,</abbr></div>
                            <div className="serviesimagesandabbriviation"><img src={cloudspng} alt="Cloud  Engineers png" /> <abbr>Cloud  Engineers,</abbr></div>
                            <div className="serviesimagesandabbriviation"><img src={cyberpng} alt="Cybersecurity Expert png" /> <abbr>Cybersecurity Experts,</abbr></div>
                            <div className="serviesimagesandabbriviation"><img src={datasciencepng} alt="Data Scientist  Engineers png" /> <abbr> Data Scientists,</abbr></div>
                            <div className="serviesimagesandabbriviation"><img src={uxuipng} alt="UX/UI png" /> <abbr>UX/UI Designers,</abbr></div> 
                    </div>
                </div>
            </div>

            
        </>
    )
}

export default Servicescbnitsprovide;
