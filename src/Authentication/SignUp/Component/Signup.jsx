import React, { useEffect, useState } from 'react'
import '../Styles/Signup.css'
import coding_image from '../../../Assets/SVG/undraw_sharing_knowledge_03vp.svg'
import bloggios_logo from '../../../Assets/SVG/bloggios-white-purple-logo.svg'
import CustomInputField from './CustomInputField'
import { signUp } from '../../../Services/RestServices/UserServiceApi'
import { Alert, Collapse, IconButton } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close';
import { useNavigate } from 'react-router-dom'


const Signup = () => {

    const [isVisible, setIsVisible] = useState(false);
    const [isErrorPassword, setIsErrorPassword] = useState(false);
    const [restError, setRestError] = useState(false);
    const [restSuccess, setRestSuccess] = useState(false);
    const [errorData, setErrorData] = useState("");
    const [successData, setSuccessData] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const navigate = useNavigate();

    const [data, setData] = useState(
        {
            email: '',
            password: ''
        }
    )

    useEffect(() => {
        setTimeout(() => {
            if (restError) {
                setRestError(false);
            }
        }, 4000);
    }, [restError])

    useEffect(() => {
        setRestError(false);
        setTimeout(() => {
            if (restSuccess) {
                setRestSuccess(false);
                navigate('/');
            }
        }, 1000);
    }, [restSuccess])

    const handleChange = (event, property) => {
        setData({
            ...data,
            [property]: event.target.value
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setIsLoading(true);
        signUp(data)
            .then((response) => {
                console.log(response);
                setRestError(false);
                setRestSuccess(true);
                setIsLoading(false);
                setSuccessData(response.message);
                setData({
                    email: '',
                    password: ''
                })
            })
            .catch((error) => {
                console.log(error?.response?.data?.message);
                setErrorData(error?.response?.data?.message);
                setIsLoading(false);
                setRestError(true);
                setRestSuccess(false);
            })
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
        <>
            <div style={{
                position: 'absolute',
                height: '100%',
                width: '100%',
                display: isLoading ? 'flex' : 'none',
                backgroundColor: isLoading ? 'rgba(0, 0, 0, 0.4)' : 'transparent',
                filter: 'blur(80px)',
                webkitFilter: 'blur(80px)'
            }}></div>
            <div style={{
                position: 'absolute', right: '20px', top: '100px'
            }}>
                {
                    restSuccess ? SuccessToast() : ErrorToast()
                }
            </div>
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
        </>
    )

    function ErrorToast() {
        return <Collapse in={restError}>
            <Alert
                severity="error"
                variant='filled'
                action={<IconButton
                    aria-label="close"
                    color="inherit"
                    size="small"
                    onClick={() => {
                        setRestError(false)
                    }}
                >
                    <CloseIcon fontSize="inherit" />
                </IconButton>}
                sx={{ mb: 2 }}
            >
                {errorData ? errorData : 'Something went wrong at Server Side'}
            </Alert>
        </Collapse>
    }

    function SuccessToast() {
        return <Collapse in={restSuccess}>
            <Alert
                severity="success"
                variant='filled'
                action={<IconButton
                    aria-label="close"
                    color="inherit"
                    size="small"
                    onClick={() => {
                        setRestSuccess(false)
                    }}
                >
                    <CloseIcon fontSize="inherit" />
                </IconButton>}
                sx={{ mb: 2 }}
            >
                {successData}
            </Alert>
        </Collapse>
    }
}



export default Signup