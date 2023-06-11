import React, { useEffect, useState } from 'react'
import './TopBar.css'
import b_logo from '../../Asset/Svg/bloggios1.svg'
import DropdownContent from './DropdownContent';

const TopBar = () => {

    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 200) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        }

        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, [])

    const [isShown, setIsShown] = useState(false);

    return (
        <div className={`navbar-main-div col-lg-10 col-md-10 col-sm-12 col-xl-10 offset-lg-1 offset-md-1 offset-xl-1 ${scrolled && 'scrolled'}`}>
            <img src={b_logo} alt="B" />
            <div className='mx-auto d-flex flex-row navbar-links-div'>
                <div className='d-flex flex-row justify-content-center align-items-center links dropdown-button'
                    style={{ gap: '10px', color: 'white' }}
                    onMouseEnter={() => setIsShown(true)}
                    onMouseLeave={() => setIsShown(false)}
                >
                    <a className='solutions' href="">Solutions</a>
                    <i className='solutions' class={`fa-solid fa-chevron-down ${isShown && 'fa-rotate-180'}`}></i>
                    <DropdownContent />
                    {/* <div className='dropdown-content'>DropdownContent</div> */}
                </div>
                <a className='links' href="">About</a>
                <a className='links' href="">Portfolio</a>
            </div>
        </div>
    )
}

export default TopBar