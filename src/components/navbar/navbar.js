import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import navlogo from "../../images/cbnits-full-logo.png"
import indiaflag from "../../images/indiaflag.png";
import singaporeflag from "../../images/singaporeflag.png";
import usaflag from "../../images/usaflag.png";
import './navbar.css'



function Navbar() {
  const [click, setClick] = useState(false);
  const handleChange = () => setClick(!click);
  const closemobilebar = () => setClick(!click);
 


  return (
    <>
      <nav className="navbar">
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
              <Link to="/" className="nav-links" onClick={closemobilebar}>STUDIO</Link>
            </li>

            <li className="nav-items">
              <Link to="/" className="nav-links" onClick={closemobilebar}>DEDICATED HIRING</Link>
            </li>

            <li className="nav-items">
              <Link to="/" className="nav-links" onClick={closemobilebar}>INSIGHT&NEWS</Link>
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


     

    </>
  )
}

export default Navbar;
