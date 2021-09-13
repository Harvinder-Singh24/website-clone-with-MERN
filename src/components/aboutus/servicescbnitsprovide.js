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
                <div className="services">
                    <p>  about cbnits</p>
                    <div className="servicesdetials">
                        <ul>
                            <li><img src={softpng} alt="Software Engineers png" /> <abbr> 200+ Exper-level Software Engineers,</abbr></li>
                            <li><img src={cloudspng} alt="Cloud  Engineers png" /> <abbr>Cloud  Engineers,</abbr></li>
                            <li><img src={cyberpng} alt="Cybersecurity Expert png" /> <abbr>Cybersecurity Experts,</abbr></li>
                            <li><img src={datasciencepng} alt="Data Scientist  Engineers png" /> <abbr> Data Scientists,</abbr></li>
                            <li><img src={uxuipng} alt="UX/UI png" /> <abbr>UX/UI Designers,</abbr></li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="x-factor">x-factor of cbnits</div>
        </>
    )
}

export default Servicescbnitsprovide;
