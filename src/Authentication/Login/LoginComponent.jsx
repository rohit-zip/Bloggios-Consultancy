import React, { useEffect, useState } from 'react'
import './Styles/Login.css'
import login_image from '../../Assets/SVG/undraw_login_re_4vu2.svg'
import bloggios_logo from '../../Assets/SVG/bloggios-white-purple-logo.svg'
import CustomInputField from '../SignUp/Component/CustomInputField'
import { signUp } from '../../Services/RestServices/UserServiceApi'
import { Alert, Collapse, IconButton } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close';
import { useNavigate } from 'react-router-dom'
import { loginUser } from '../../Services/RestServices/AuthServer'


const LoginComponent = (props) => {

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

    const [userResponseData, setUserResponseData] = useState({
        email: '',
        userId: ''
    });

    useEffect(() => {
        setTimeout(() => {
            if (restError) {
                setRestError(false);
            }
        }, 4000);
    }, [restError])

    const handleChange = (event, property) => {
        setData({
            ...data,
            [property]: event.target.value
        })
    }

    const handleRestError = (error) => {
        console.log(error?.response?.status)
        if (error.response.status === 401) {
            setErrorData("Please Enter correct Login credentials");
        } else {
            setErrorData(error?.response?.data?.message);
        }
        setIsLoading(false);
        setRestSuccess(false);
        setRestError(true);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setIsLoading(true);
        loginUser(data)
            .then((response) => {
                console.log(response);
                setData({
                    email: '',
                    password: ''
                })
                navigate('/user/dashboard')
            })
            .catch((error) => {
                handleRestError(error);
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
                position: 'absolute', bottom: '40px', left: '50%', transform: 'translateX(-50%)'
            }}>
                {
                    restSuccess ? SuccessToast() : ErrorToast()
                }
            </div>
            <section className='auth-bloggios-login'>
                <div className='auth-login-main-div'>
                    <div className="col">
                        <div className='login-logo-div'>
                            <img src={bloggios_logo} alt="Bloggios" />
                            <span>BLOGGIOS</span>
                        </div>
                        <div className='login-greeting-div'>
                            Welcome Back
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
                        <button className='signup-button' onClick={(event) => handleSubmit(event)}>Login</button>
                        <div className='bloggios-divider'>
                            <div className='pre-or'></div>
                            <span>or</span>
                            <div className='post-or'></div>
                        </div>
                        <button className='social-signup-button'>Login with Google</button>
                    </div>
                    <div className="col">
                        <img src={login_image} alt="" />
                    </div>
                </div>
            </section>
        </>
    )

    function ErrorToast() {
        return <Collapse sx={{ display: restError ? 'block' : 'none' }} in={restError}>
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
        return <Collapse sx={{ display: restSuccess ? 'block' : 'none' }} in={restSuccess}>
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



export default LoginComponent