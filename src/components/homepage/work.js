
import './work.css'
import React from 'react';



function Work() {
  return (
    <>
        <div className="workmaincontainer">
         <p className="workparahead"> WHAT <span> WE DO </span> </p> 
</div>

<div className="whatwedodiv">
         <div className="circles">
           <div className="circle"></div>
           <div className="circle"> <p className="circlenumber"> 07</p><p  className="circlepara">years </p> <p className="circlepara">of experience</p></div>
           <div className="circle"></div>
           <div className="circle"></div>
         </div> 

<div className="whatwedodatadiv">
<div className="employees">
  <span className="dataspannumber">200+</span>
  <abbr className="abbrevation">EMPLOYEES</abbr>
  <p className="detailofwhatwedopara">Leaders and the hard-working personalities</p>
</div>
<div className="countries">
  <span className="dataspannumber">20</span>
  <abbr className="abbrevation">COUNTRIES</abbr>
  <p className="detailofwhatwedopara">Countries where we have satisfied customers</p>
</div>
<div className="projects">
  <span className="dataspannumber">1000+</span>
  <abbr className="abbrevation">PROJECTS</abbr>
  <p className="detailofwhatwedopara">Enterprise-class solutions & projects delivered</p>
</div >

</div> 
 </div>


    </>
  )
}

export default Work;
