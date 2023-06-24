import React from 'react'
import './Navbar.css'
import bloggios_logo from '../Assets/SVG/bloggios-logo.svg'

const Navbar = () => {
    return (
        <nav className='navbar-main'>
            <div className='navbar-div'>
                <div className='navbar-icon-div'>
                    <img src={bloggios_logo} alt="B" height='100%' />
                    <div className='logo-text'>Bloggios</div>
                </div>
                <div className='navbar-items'>
                    <div>
                        <span>Services</span>
                        <span>About</span>
                        <span>Contact</span>
                    </div>
                    <div className='consult-button'>
                        Free Consult
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar