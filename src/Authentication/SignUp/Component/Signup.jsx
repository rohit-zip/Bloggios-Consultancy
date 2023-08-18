import React from 'react'
import '../Styles/Signup.css'
import coding_image from '../../../Assets/SVG/undraw_sharing_knowledge_03vp.svg'
import bloggios_logo from '../../../Assets/SVG/bloggios-white-purple-logo.svg'
import CustomInputField from './CustomInputField'

const inputList = [
    {
        label: 'Email',
        placeholder: 'Enter your Email'
    },
    {
        label: 'Password',
        placeholder: 'Enter your password'
    }
]

const Signup = () => {
    return (
        <section className='auth-bloggios-signup'>
            <div className='auth-signup-main-div'>
                <div className="col">
                    <div className='signup-logo-div'>
                        <img src={bloggios_logo} alt="Bloggios" height={'70px'} />
                        <span>BLOGGIOS</span>
                    </div>
                    <div className='signup-greeting-div'>
                        Welcome
                    </div>
                    <div className='input-fields-signup'>
                        {inputList.map((value, key) => {
                            return (
                                <CustomInputField label={value.label} placeholder={value.placeholder} />
                            )
                        })}
                    </div>
                    <button className='signup-button'>Sign Up</button>
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