import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import navlogo from "../../images/cbnits-full-logo.png"
import indiaflag from "../../images/indiaflag.png";
import singaporeflag from "../../images/singaporeflag.png";
import usaflag from "../../images/usaflag.png";

  function Navbar() {
  const [click, setClick] = useState(false);
  const handleChange = () => setClick(!click);
  const closemobilebar = () => setClick(!click);
  const closecontactmobilebar = () => setClick(!click);


  return (
    <>
      <nav className="navbar">
        <div className="navbarcontainer">
          <Link to="/" className="navbarlogo"><img src={navlogo} alt="Not Found"></img></Link>
          <div className="menuicon" onClick={handleChange}>
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



          <ul className={click ? 'navactivemenu' : 'navmenu'}>

            <li className="concact-items">
              <Link to="/" className="concact-links" onClick={closecontactmobilebar}><i className='fas fa-envelope' />business@cbnits.com</Link>
            </li>

            <li className="concact-items">
              <Link to="/" className="concact-links" onClick={closecontactmobilebar}><img src={usaflag} className='contactcountryflag' alt="Country Flag Not Found" />+1669-213-8571</Link>
            </li>

            <li className="concact-items">
              <Link to="/" className="concact-links" onClick={closecontactmobilebar}><img src={singaporeflag} className='contactcountryflag' alt="Country Flag Not Found" />+65-31585521</Link>
            </li>

            <li className="concact-items">
              <Link to="/" className="concact-links" onClick={closecontactmobilebar}><img src={indiaflag} className='contactcountryflag'  alt="Country Flag Not Found"/>+91-9674533118</Link>
            </li>

          </ul>


        </div>
      </nav>
    </>
  )
}

export default Navbar;
