import React, { useState } from 'react'
import './Navbar.css'
import bloggios_logo from '../Assets/SVG/bloggios-logo.svg'
import { useNavigate } from 'react-router-dom';

const Navbar = ({ textColor, logo, dividerColor, lineColor, fontWeight }) => {
    const [isShown, setIsShown] = useState(false);
    const navigate = useNavigate();

    const link = window.location.href;

    const linksList = [
        {
            name: 'Services',
            link: '/services'
        },
        {
            name: 'About',
            link: '/about'
        },
        {
            name: link.endsWith('signup') ? 'Login' : 'Signup',
            link: link.endsWith('signup') ? '/login' : '/signup'
        }
    ]

    return (
        <nav className={`navbar-main ${isShown ? 'bloggios-bg-white-filter' : ''}`}>
            <div className='navbar-div'>
                <div onClick={() => navigate('/')} className='navbar-icon-div'>
                    <img src={logo ? logo : bloggios_logo} alt="B" height='100%' />
                    <div className='logo-text' style={{
                        color: textColor,
                    }}>Bloggios</div>
                </div>
                <div className='navbar-items'>
                    <div>
                        {linksList.map((value, key) => {
                            return (
                                <span style={{
                                    "--line-color": lineColor,
                                    color: textColor,
                                    fontWeight: fontWeight
                                }} key={key} onClick={() => navigate(value.link)}>{value.name}</span>
                            )
                        })}
                    </div>
                    <div style={{
                        '--divider-color': dividerColor
                    }} className='consult-button'>
                        Get a Quote
                    </div>
                </div>
                <div className='navbar-hamburger' onClick={() => setIsShown(!isShown)}>
                    <i className={`fa-solid fa-bars ${isShown ? 'fa-xmark' : 'fa-bars'}`}></i>
                </div>
                <div className={`navbar-items-mobile ${isShown ? 'menu-shown' : ''}`}>
                    <div>
                        {linksList.map((value, key) => {
                            return (
                                <span key={key} onClick={() => navigate(value.link)}>{value.name}</span>
                            )
                        })}
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