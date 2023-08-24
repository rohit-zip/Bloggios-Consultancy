import React from 'react'
import Navbar from '../Navbar/Navbar'
import './Base.css'
import { toast } from 'react-toastify'
import { Toast } from 'react-bootstrap'

const Base = ({ children }) => {

    const isError = true;
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