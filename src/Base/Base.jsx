import React from 'react'
import Navbar from '../Navbar/Navbar'
import './Base.css'

const Base = ({ children, bgColor, textColor, logo, dividerColor, lineColor, fontWeight }) => {

    return (
        <div className='homescreen-backdrop' style={{
            background: bgColor
        }}>
            <Navbar
                textColor={textColor}
                logo={logo}
                fontWeight={fontWeight}
                dividerColor={dividerColor}
                lineColor={lineColor} />
            <div>
                {children}
            </div>
        </div>
    )
}

export default Base