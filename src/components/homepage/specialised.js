import './specialised.css'
import React from 'react';

function Specialised() {
  return (
    <>
    <div className="specialisedcontainer">
        <div className="specialisedmaincontainer">
            <p className="specialisedparahead"> OUR SPECIALISED <span> DOMAINS </span> </p> 
        </div>
        <div className="specialiseddiv">
            <div className="specialiseddivdiv">
                <div className="imagehealth">
                    <img alt="health"/>
                </div>
                <div className="readmorediv">
                    <button class="readmorebtn">Read More</button>
                </div>
            </div>
        </div>
        <hr/>
        <div className="whymaincontainer">
            <p className="whyparahead"> WHY <span> CBNITS ? </span> </p>
            <p className="whyparasubhead"> We don't deliberate. We deliver. </p> 
        </div>
    </div>
</>
)}

export default Specialised;
