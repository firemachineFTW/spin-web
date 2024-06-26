import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import '../stylesheets/Navbar.css'


function Navbar() {
    const [active, setActive] = useState("nav-menu");
    const [toggleIcon, setToggleIcon] = useState("nav-toggler");

    const navToggle = () =>{
        active === 'nav-menu' 
        ? setActive('nav-menu nav-active') 
        : setActive('nav-menu');
    
    toggleIcon === 'nav-toggler' 
    ? setToggleIcon('nav-toggler toggle')
    : setToggleIcon('nav-toggler');
    };
    
  return (
        <nav className="nav">
            <Link to='/Home' className='logo'>
                <img src={require('../images/LOGO-spin.png')} alt='Logo' className='logo-img'/>
            </Link>
            <ul className={active}>
                <li className="nav-item">
                    <Link to="/Home" className="nav-link">
                        Home
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/MisionVision" className="nav-link">
                        Misión y Visión
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/Services" className="nav-link">
                        Services
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/Contact" className="nav-link">
                        Contact
                    </Link>
                </li>
            </ul>
            <div onClick={navToggle} className={toggleIcon}>
                <div className="line1"></div>
                <div className="line2"></div>
                <div className="line3"></div>
            </div>
        </nav>
  )
}

export default Navbar