import React from 'react'
import Navbar from '../Navbar/Navbar'
import './Base.css'

const Base = ({ children }) => {
    return (
        <div className='homescreen-backdrop'>
            <Navbar />
            <div>
                {children}
            </div>
        </div>
    )
}

export default Base