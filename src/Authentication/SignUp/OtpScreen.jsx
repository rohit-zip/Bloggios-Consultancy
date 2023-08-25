import React, { useEffect, useRef, useState } from 'react'
import Base from '../../Base/Base'
import './Styles/OtpScreen.css'
import bloggios_logo from '../../Assets/SVG/bloggios-white-purple-logo.svg'
import OtpComponent from './Component/OtpComponent'
import { useLocation, useNavigate } from 'react-router-dom'

const OtpScreen = () => {

    const navigate = useNavigate();
    const location = useLocation();

    const userEmail = location.state?.userEmail ? location.state.userEmail : "";

    useEffect(() => {
        if (userEmail === "") {
            navigate("/signup");
        }
    })

    const [isDisabled, setIsDisabled] = useState(false);
    const [buttonText, setButtonText] = useState("Resend OTP");
    const [counter, setCounter] = useState(25);

    useEffect(() => {
        setIsDisabled(true);
        setButtonText("Sent");
        setTimeout(() => {
            setIsDisabled(false);
            setButtonText("Resend OTP");
        }, 25000);
    }, isDisabled)

    function useInterval(callback, delay) {
        const savedCallback = useRef();

        // Remember the latest callback.
        useEffect(() => {
            savedCallback.current = callback;
        }, [callback]);

        // Set up the interval.
        useEffect(() => {
            let id = setInterval(() => {
                savedCallback.current();
            }, delay);
            return () => clearInterval(id);
        }, [delay]);
    }

    useInterval(() => {
        if (counter > 0) {
            setCounter(counter - 1);
        }
        if (counter === 0) {

        }
    }, 1000);

    const disableButton = () => {
        setCounter(25)
        setIsDisabled(true);
        setButtonText("Sent");
        setTimeout(() => {
            setIsDisabled(false);
            setButtonText("Resend OTP");
        }, 25000);
    }

    //state to store all input boxes    
    const [inputValues, setInputValues] = useState({
        input1: '',
        input2: '',
        input3: '',
        input4: '',
        input5: '',
        input6: '',
        // Add more input values here
    });
    //this function updates the value of the state inputValues
    const handleInputChange = (inputId, value) => {
        setInputValues((prevInputValues) => ({
            ...prevInputValues,
            [inputId]: value,
        }));
    };
    //this function processes form submission
    const handleSubmit = () => {
        const finalOtp = inputValues.input1 + "" + inputValues.input2 + "" + inputValues.input3 + "" + inputValues.input4 + "" + inputValues.input5 + "" + inputValues.input6;
        console.log(finalOtp);
    };

    return (
        <Base>
            <section className='bloggios-otp-section'>
                <div className='otp-main-div'>
                    <header>
                        <img src={bloggios_logo} alt="B" height={'80px'} />
                    </header>
                    <span>Verify your OTP</span>
                    <form action="#" data-autosubmit="true">
                        <div className="otp-input-field" id='OTPInputGroup' data-autosubmit="true">
                            <OtpComponent
                                id="input1"
                                value={inputValues.input1}
                                onValueChange={handleInputChange}
                                previousId={null}
                                handleSubmit={handleSubmit}
                                nextId="input2"
                            />
                            <OtpComponent
                                id="input2"
                                value={inputValues.input2}
                                onValueChange={handleInputChange}
                                previousId="input1"
                                handleSubmit={handleSubmit}
                                nextId="input3"
                            />
                            <OtpComponent
                                id="input3"
                                value={inputValues.input3}
                                onValueChange={handleInputChange}
                                previousId="input2"
                                handleSubmit={handleSubmit}
                                nextId="input4"
                            />
                            {/* Seperator */}
                            <OtpComponent
                                id="input4"
                                value={inputValues.input4}
                                onValueChange={handleInputChange}
                                previousId="input3"
                                handleSubmit={handleSubmit}
                                nextId="input5"
                            />
                            <OtpComponent
                                id="input5"
                                value={inputValues.input5}
                                onValueChange={handleInputChange}
                                previousId="input4"
                                handleSubmit={handleSubmit}
                                nextId="input6"
                            />
                            <OtpComponent
                                id="input6"
                                value={inputValues.input6}
                                onValueChange={handleInputChange}
                                previousId="input5"
                                handleSubmit={handleSubmit}
                            />
                        </div>
                        <button className={`${isDisabled ? 'resend-button-disabled' : 'resend-button'}`} onClick={() => disableButton()} disabled={isDisabled}>
                            <span>{buttonText}</span>
                            <span style={{
                                display: isDisabled ? 'block' : 'none',
                            }}>{counter}</span>
                        </button>
                    </form>
                </div>
            </section>
        </Base>
    )
}

export default OtpScreen