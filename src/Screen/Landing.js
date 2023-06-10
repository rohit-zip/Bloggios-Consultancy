import React from 'react'
import '../Style/Landing.css'
import BottomBar from '../Component/Bottom-Bar/BottomBar';
import TopBar from "../Component/TopBar/TopBar";
import useWindowDimensions from '../Logic/WindowDimensions';
import MobileTopBar from '../Component/TopBar/MobileTopBar';

const Landing = () => {
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
        <div className='landing-div' >
            {/*<BottomBar />*/}
            {width > 775 ? <TopBar /> : <MobileTopBar />}
        </div>
    )
}

export default Landing