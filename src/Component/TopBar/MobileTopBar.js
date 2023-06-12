import React, { useState } from 'react'
import './MobileTopBar.css'
import bloggios_logo from '../../Asset/Svg/bloggios1.svg'

const MobileTopBar = () => {

    const [isShown, setIsShown] = useState(false);

    return (
        <>
            <div className={`d-flex mobile-top-bar ${isShown && 'burger-shown'}`}>
                <img src={bloggios_logo} alt='B' />
                <i onClick={() => setIsShown(!isShown)} className={`fa-solid ${isShown ? 'fa-xmark' : 'fa-bars'}`}></i>
            </div>
            <div className={`menu-content d-flex flex-column ${isShown && 'active-burger'}`}>
                <div>
                    <span>Solutions</span>
                    <i class="fa-solid fa-chevron-right"></i>
                </div>
                <div>
                    <span>Portfolio</span>
                    <i class="fa-solid fa-chevron-right"></i>
                </div>
                <div>
                    <span>About Bloggios</span>
                    <i class="fa-solid fa-chevron-right"></i>
                </div>

            </div>
        </>

    )
}

export default MobileTopBar