import React, { useRef, useState } from 'react'
import '../Styles/CustomInputField.css'

const CustomInputField = (props) => {

    const [isVisible, setIsVisible] = useState(false);
    const [isFocus, setIsFocus] = useState(false);
    const textInputRef = useRef(null);

    const handleClick = () => {
        setIsFocus(true);
    }

    return (
        <div className='input-field-custom'>
            <span>{props.label}</span>
            <div className='input-field-div' style={{
                border: props.borderColor,
                backgroundColor: props.backgroundColor
            }}>
                <input
                    type={props.type}
                    onChange={props.onChange}
                    value={props.value}
                    ref={textInputRef}
                    onClick={() => handleClick()}
                    onKeyUp={props.onKeyUp}
                    placeholder={props.placeholder} />
                {
                    props.eyeIcon && <i onClick={props.passwordVisible} className={`fa-regular ${props.visibility ? 'fa-eye' : 'fa-eye-slash'}`}></i>
                }
            </div>
        </div>
    )
}

export default CustomInputField