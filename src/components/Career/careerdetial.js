import React from 'react'
import './careerdetial.css'
import CareerDetailimage from '../../images/careerimage.png'
function Careerdetial() {
    return (
       <>
       <div className="Career-mainconentdiv">
          <img src={CareerDetailimage } className="Career-Image" alt="Career-Image-Not-Found" />
            <div className="Career-contentdiv">
                <p class="Career-parahead"> TRANSFORMATION AT</p>
                <p class="Career-parahead1">SPEED AND SCALE.</p>
               <p class="Career-parahead2"> You can check the latest job openings here if you are looking to be a part of a young, vibrant and growing team. Take your first step to an incredible career with us.</p>
               </div>
        </div>


        <div className="reason-Why-To-Choose-Cbnits">
        <p class="Career-Reason-parahead"> four reasons why you should </p>
                <p class="Career-Reason-parahead1">choose our service</p>  
        </div>
        <div className="Current-Career-In-Cbnits">
        <p class="Career-Reason-parahead"> Current carrer  </p>
                <p class="Career-Reason-parahead1">opportunity at cbnits </p>  
                <p class="Current-Career-parahead2"> You can check the latest job openings here if you are looking to be a part of a young, vibrant and growing team. Take your first step to an incredible career with us.</p>
        </div>
       </>
    )
}

export default Careerdetial;
