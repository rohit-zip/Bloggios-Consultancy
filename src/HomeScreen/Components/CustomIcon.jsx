import React from 'react'
import '../Styles/CustomIcon.css'

const CustomIcon = (props) => {
    return (
        <div onClick={props.onClick} className='parent-div'>
            <div className='custom-icon-main-div'>
                <img src={props.icon} alt="" />
            </div>
            <span className='icon-name'>{props.name}</span>
        </div>
    )
}

export default CustomIcon