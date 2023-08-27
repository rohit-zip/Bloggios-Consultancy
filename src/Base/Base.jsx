import React, { useEffect } from 'react'
import Navbar from '../Navbar/Navbar'
import './Base.css'

const Base = ({ children, bgColor, textColor, logo, dividerColor, lineColor, fontWeight, mobileColor, yHidden }) => {

    useEffect(() => {
        if (yHidden){
            document.body.classList.add('y-hidden');
        }
        return () => {
            if (yHidden){
                document.body.classList.remove('y-hidden');
            }
        }
      }, []);
      
    return (
        <div className='homescreen-backdrop' style={{
            background: bgColor,
        }}>
            <Navbar
                textColor={textColor}
                mobileColor={mobileColor}
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