import React from 'react'
import './vision&mision.css'
import visionpng from '../../images/ourvision.png';
import missionpng from '../../images/ourmission.png';

function Visionandmision() {
    return (
        <div className="visionandmisioncontainer">
            <div className="conatinermain">
                <div className="visioncontainer">
                    <div className="visionhead">
                        <div className="mainheadvision"><img className="visionimage" src={visionpng} alt="Vision Png"></img>
                       <span> Our Vision</span></div>
                        <p className="visionparadescription">We strive to exceed expectations and be the best that we can be, maintaining the highest level of quality. Our aim is to change the way IT services are delivered, through focusing on our core values. We always try to improve the quality of our services by exploring innovative ideas.</p>
                    </div>
                </div>
                <div className="visioncontainer1">
                    <div className="visionhead">
                        <div className="mainheadvision"><img className="visionimage" src={missionpng} alt="Vision Png"></img>
                       <span> Our Mission</span></div>
                        <p className="visionparadescription">Our mission is distinctly innovative. We constantly seek new ways to improve our IT offerings to increase our brand value.</p>
                    </div>
                </div>
                <div className="missioncontainer"></div>
            </div>

        </div>
    )
}

export default Visionandmision;
