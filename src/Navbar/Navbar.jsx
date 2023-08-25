import React, { useState } from 'react'
import './Navbar.css'
import bloggios_logo from '../Assets/SVG/bloggios-logo.svg'
import { useNavigate } from 'react-router-dom';

const Navbar = () => {

    const [isShown, setIsShown] = useState(false);
    const navigate = useNavigate();

    return (
        <nav className={`navbar-main ${isShown ? 'bloggios-bg-white-filter' : ''}`}>
            <div className='navbar-div'>
                <div onClick={() => navigate('/')} className='navbar-icon-div'>
                    <img src={bloggios_logo} alt="B" height='100%' />
                    <div className='logo-text'>Bloggios</div>
                </div>
                <div className='navbar-items'>
                    <div>
                        <span>Services</span>
                        <span>About</span>
                        <span onClick={() => navigate('/signup')}>Signup</span>
                    </div>
                    <div className='consult-button'>
                        Get a Quote
                    </div>
                </div>
                <div className='navbar-hamburger' onClick={() => setIsShown(!isShown)}>
                    <i className={`fa-solid fa-bars ${isShown ? 'fa-xmark' : 'fa-bars'}`}></i>
                </div>
                <div className={`navbar-items-mobile ${isShown ? 'menu-shown' : ''}`}>
                    <div>
                        <span>Services</span>
                        <span>About</span>
                        <span onClick={() => navigate('/signup')}>Sign Up</span>
                    </div>
                    <div className='consult-button'>
                        Get a Quote
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar