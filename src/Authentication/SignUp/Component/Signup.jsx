import React, { useEffect, useState } from 'react'
import '../Styles/Signup.css'
import coding_image from '../../../Assets/SVG/undraw_sharing_knowledge_03vp.svg'
import bloggios_logo from '../../../Assets/SVG/bloggios-white-purple-logo.svg'
import CustomInputField from './CustomInputField'
import { signUp } from '../../../Services/RestServices/UserServiceApi'
import { isVisible } from '@testing-library/user-event/dist/utils'


const Signup = () => {

    const [isVisible, setIsVisible] = useState(false);
    const [isErrorPassword, setIsErrorPassword] = useState(false);

    const [data, setData] = useState(
        {
            email: '',
            password: ''
        }
    )

    useEffect(() => {

    }, [isErrorPassword])

    const handleChange = (event, property) => {
        setData({
            ...data,
            [property]: event.target.value
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        signUp(data)
            .then((response) => {
                console.log(response);
                setData({
                    email: '',
                    password: ''
                })
            }).catch((error) => console.log(error))
    }

    const handleValidation = (event, property) => {
        if (property === 'password') {
            let passwordValue = event.target.value;
            passwordValue.length < 8 || passwordValue.length > 20 ? setIsErrorPassword(true) : setIsErrorPassword(false)
        }
    }

    const inputList = [
        {
            label: 'Email',
            placeholder: 'Enter your Email',
            type: 'text',
            constraint: 'email',
            borderColor: '1px solid rgba(255, 255, 255, 0.6)',
            backgroundColor: 'transparent'
        },
        {
            label: 'Password',
            placeholder: 'Enter your password',
            type: isVisible ? 'text' : 'password',
            constraint: 'password',
            borderColor: isErrorPassword ? '1px solid rgba(255, 0, 0, 0.6)' : '1px solid rgba(255, 255, 255, 0.6)',
            backgroundColor: isErrorPassword ? 'rgba(255, 0, 0, 0.1)' : 'transparent'
        }
    ]

    return (
        <section className='auth-bloggios-signup'>
            <div className='auth-signup-main-div'>
                <div className="col">
                    <div className='signup-logo-div'>
                        <img src={bloggios_logo} alt="Bloggios" />
                        <span>BLOGGIOS</span>
                    </div>
                    <div className='signup-greeting-div'>
                        Welcome
                    </div>
                    <div className='input-fields-signup'>
                        {inputList.map((value, key) => {
                            return (
                                <CustomInputField
                                    key={key}
                                    label={value.label}
                                    type={value.type}
                                    isError={isErrorPassword}
                                    borderColor={value.borderColor}
                                    eyeIcon={value.constraint === 'password'}
                                    onKeyUp={(e) => handleValidation(e, value.constraint)}
                                    visibility={isVisible}
                                    backgroundColor={value.backgroundColor}
                                    passwordVisible={() => setIsVisible(!isVisible)}
                                    onChange={(e) => handleChange(e, value.constraint)}
                                    value={value.constraint === 'email' ? data.email : data.password}
                                    placeholder={value.placeholder} />
                            )
                        })}
                    </div>
                    <button className='signup-button' onClick={(event) => handleSubmit(event)}>Sign Up</button>
                    <div className='bloggios-divider'>
                        <div className='pre-or'></div>
                        <span>or</span>
                        <div className='post-or'></div>
                    </div>
                    <button className='social-signup-button'>Continue with Google</button>
                </div>
                <div className="col">
                    <img src={coding_image} alt="" />
                </div>
            </div>
        </section>
    )
}

export default Signup