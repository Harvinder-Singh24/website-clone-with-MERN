import React from 'react'
import './hiringprocess.css'
import hiringprocessImage from "../../images/dedicatedhiringprocess.png"
function Hiringprocess() {
    return (
<>
         <div className="hiring-Process-Main-Container">
                <div className="hring-Process-heading">monthly-basis   <span>hiring process </span> </div>
                <div className="hiring-Proces-Image-div">
                <img src={hiringprocessImage} alt=""/>
                </div>
                </div>
                <div className="hring-Process-Monthly-Heading">fixed-basis  &nbsp;<span> hiring process </span> </div>
                </>
    )
}

export default Hiringprocess;
