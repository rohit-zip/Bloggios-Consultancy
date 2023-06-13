import React from 'react'
import '../Style/Landing.css'
import BottomBar from '../Component/Bottom-Bar/BottomBar';
import TopBar from "../Component/TopBar/TopBar";
import useWindowDimensions from '../Logic/WindowDimensions';
import MobileTopBar from '../Component/TopBar/MobileTopBar';
import LottieAnimation from '../Component/Landing/LottieAnimation';

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
        <div className='landing-div' style={{ color: "white" }} >
            {/*<BottomBar />*/}
            {width > 775 ? <TopBar /> : <MobileTopBar />}
            <div className='bg-info container-fluid'>
                <div className="col-4 bg-success">
                    Rohit
                </div>
                <div className="col-12 bg-body">
                    Rohit
                </div>
            </div>
        </div>
    )
}

export default Landing