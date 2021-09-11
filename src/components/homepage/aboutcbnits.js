import React from 'react'
import './aboutcbnits.css'
import mainimagesabout from '../../images/mainImage.png'

function Aboutcbnits() {
    return (
        <>
        <div className="backgroundimage">
        <div className="mainconentdiv">
          <img src={mainimagesabout} className="mainimage" alt="AboutCbnitsImage" />
            <div className="contentdiv">
                <p class="parahead"> ABOUT CBNITS</p>
                <p class="parahead1"> WE ARE FAMILY</p>
               <p class="parahead2"> CBNITS is a premier Enterprise Solution & IT service provider. With 
                our effective digital solutions and immense expertise in cutting-
                edge technologies, we are helping companies around the world to
                transform their businesses.</p>
                <p class="parahead2">
With our 200+ expert-level software engineers, cloud engineers, 
cybersecurity experts, Data Scientists, and UX/UI designers, we
have built an impressive portfolio worldwide. We strive for 
excellence at every stage of our clients’ project development.</p>
            </div>
        </div>
        </div>
        </>
    )
}

export default Aboutcbnits;
