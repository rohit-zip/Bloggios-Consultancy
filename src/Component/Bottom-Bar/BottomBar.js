import React, { useState } from 'react'
import './BottomBar.css'

const BottomBar = () => {

    const navigationOptions = [
        {
            name: 'home',
            color: '#5B37B7',
            icon: 'fa-solid fa-house icon',
            to: '#'
        },
        {
            name: 'discover',
            color: '#C9379D',
            icon: 'fa-solid fa-compass icon',
            to: '#'
        },
        {
            name: 'profile',
            color: '#E6A919',
            icon: 'fa-solid fa-user icon',
            to: '#'
        },
        {
            name: 'logout',
            color: '#1892A6',
            icon: 'fa-solid fa-arrow-right-from-bracket fa-rotate-180 icon',
            to: '#'
        }
    ];

    const itemsClass = "col-3 col-xs-3 h-100 d-flex align-items-center justify-content-center link-div"

    const [isActive, setIsActive] = useState("home");

    return (
        <div className='bottom-bar-main-div d-flex flex-row'>
            {
                navigationOptions.map((value, key) => {
                    return (
                        <div key={key} className={`${itemsClass}`}>
                            <a
                                key={key}
                                href={value.to}
                                className={isActive === value.name ? 'active' : ''}
                                onClick={() => setIsActive(value.name)}
                            >
                                <i className={`${value.icon}`} style={{ color: isActive === value.name ? 'white' : 'black' }}></i>
                                <span style={{ display: "none" }}>{value.name}</span>
                            </a>
                        </div>
                    )
                })
            }

        </div>
    )
}

export default BottomBar