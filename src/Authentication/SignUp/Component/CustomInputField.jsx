import React from 'react'
import '../Styles/CustomInputField.css'

const CustomInputField = (props) => {
    return (
        <div className='input-field-custom'>
            <span>{props.label}</span>
            <input 
                type={props.type}
                onChange={props.onChange}
                value={props.value}
                placeholder={props.placeholder} />
        </div>
    )
}

export default CustomInputField