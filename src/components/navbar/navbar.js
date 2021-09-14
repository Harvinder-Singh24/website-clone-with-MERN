import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import navlogo from "../../images/cbnits-full-logo.png"
import indiaflag from "../../images/indiaflag.png";
import singaporeflag from "../../images/singaporeflag.png";
import usaflag from "../../images/usaflag.png";
import './navbar.css'
// import Aboutus from '../aboutus/aboutus';



function Navbar() {
  const [click, setClick] = useState(false);
  const handleChange = () => setClick(!click);
  const closemobilebar = () => setClick(!click);
 
  const onHoverSTUDIO=()=>{
    document.getElementById("onHoverSTUDIO").style.display="block";
  }
  const onHoverDEDICATEDHIRING=()=>{
    document.getElementById("onHoverDEDICATEDHIRING").style.display="block";
  }
  const onHoverINSIGHTNEWS11=()=>{
    document.getElementById("onHoverINSIGHTNEWS11").style.display="block";
  }

  const onHoutNav=()=>{
    document.getElementById("onHoverINSIGHTNEWS11").style.display="none";
    document.getElementById("onHoverDEDICATEDHIRING").style.display="none";
    document.getElementById("onHoverSTUDIO").style.display="none";
  }

  // const onHoutSTUDIO=()=>{
  //   document.getElementById("onHoverSTUDIO").style.display="none";
  // }
  // const onHoutDEDICATEDHIRING=()=>{
  //   document.getElementById("onHoverDEDICATEDHIRING").style.display="none";
  // }
  // const onHoutINSIGHTNEWS11=()=>{
  //   document.getElementById("onHoverINSIGHTNEWS11").style.display="none";
  // }

  return (
    <>
      <nav className="navbar" onMouseOut={onHoutNav}>
        <div className="navbarcontainer">
          <Link to="/" className="navbarlogo"><img className="navimage" src={navlogo} alt="Not Found"></img></Link>
          <div className="menu-icon" onClick={handleChange}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'navactivemenu' : 'navmenu'}>

            <li className="nav-items">
              <Link to="/" className="nav-links" onClick={closemobilebar}>HOME</Link>
            </li>

            <li className="nav-items">
              <Link to="/" className="nav-links" onClick={closemobilebar}>ABOUT</Link>
            </li>

            <li className="nav-items">
              <Link to="/" className="nav-links" onClick={closemobilebar}>CONTACT</Link>
            </li>

            <li className="nav-items">
              <Link to="/" className="nav-links" onMouseOver={onHoverSTUDIO} 
                // onMouseOut={onHoutSTUDIO} 
                onClick={closemobilebar}>STUDIO</Link>
            </li>

            <li className="nav-items">
              <Link to="/" className="nav-links" onMouseOver={onHoverDEDICATEDHIRING} 
                // onMouseOut={onHoutDEDICATEDHIRING} 
                onClick={closemobilebar}>DEDICATED HIRING</Link>
            </li>

            <li className="nav-items">
              <Link to="/" className="nav-links" onMouseOver={onHoverINSIGHTNEWS11} 
                // onMouseOut={onHoutINSIGHTNEWS11} 
                onClick={closemobilebar}>INSIGHT&NEWS11</Link>
            </li>
          </ul>
        </div>
      </nav>
          <div className="multicolor-horizontal-line">
            <div className="greenline"></div>
            <div className="purpleline"></div>
            <div className="skyline"></div>
          </div>
      <ul className= 'navmenucontact'>
        <li className="concact-items">
          <Link to="/" className="concact-links" ><i   className='fas fa-envelope' alt="Email" />business@cbnits.com</Link>
        </li>

        <li className="concact-items">
          <Link to="/" className="concact-links" ><img src={usaflag} className='contactcountryflag' alt="USA" />+1669-213-8571</Link>
        </li>

        <li className="concact-items">
          <Link to="/" className="concact-links" ><img src={singaporeflag} className='contactcountryflag' alt="Phone Singapore" />+65-31585521</Link>
        </li>

        <li className="concact-items">
          <Link to="/" className="concact-links" ><img src={indiaflag} className='contactcountryflag' alt="Phone India" />+91-9674533118</Link>
        </li>

      </ul>

      <div id="onHoverSTUDIO">
        STUDIO
      </div>
      <div id="onHoverDEDICATEDHIRING">
        DEDICATED HIRING
      </div>
      <div id="onHoverINSIGHTNEWS11">
        INSIGHT&NEWS11
      </div>
      {/* <div className="sensitivepart" onMouseOver={onHoutNav}>
        hello
      </div> */}

     {/* <Aboutus/> */}

    </>
  )
}

export default Navbar;
