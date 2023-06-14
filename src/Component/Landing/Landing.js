import React from 'react'
import './Landing.css'
import TopBar from "../TopBar/TopBar";
import useWindowDimensions from '../../Logic/WindowDimensions';
import MobileTopBar from '../TopBar/MobileTopBar';

const Landing = ({ children }) => {
    // const isPlay = true;
    // const lottieRef = useRef();
    // useEffect(() => {
    //     isPlay ? lottieRef.current.play() : lottieRef.current.pause();
    // })
    // return (
    //     <Lottie lottieRef={lottieRef} animationData={bloggios_logo} />
    // )

    const { width, height } = useWindowDimensions();

    return (
        <div className='landing-div' style={{ color: "white" }} >
            {/*<BottomBar />*/}
            {width > 767 ? <TopBar /> : <MobileTopBar />}
            {children}
        </div>
    )
}

export default Landing