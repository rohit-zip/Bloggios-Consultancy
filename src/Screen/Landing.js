import Lottie from 'lottie-react'
import React from 'react'
import { useRef } from 'react';
import bloggios_logo from '../Asset/Lottie/a2.json'
import { useEffect } from 'react';
import '../Style/Landing.css'
import BottomBar from '../Component/Bottom-Bar/BottomBar';

const Landing = () => {
    // const isPlay = true;
    // const lottieRef = useRef();
    // useEffect(() => {
    //     isPlay ? lottieRef.current.play() : lottieRef.current.pause();
    // })
    // return (
    //     <Lottie lottieRef={lottieRef} animationData={bloggios_logo} />
    // )

    return (
        <div className='landing-div' >
            <BottomBar />
        </div>
    )
}

export default Landing