import React from 'react'
import '../Styles/CustomInputField.css'

const CustomInputField = (props) => {
    return (
        <div className='input-field-custom'>
            <span>{props.label}</span>
            <input type="text" placeholder={props.placeholder} />
        </div>
    )
}

export default CustomInputField