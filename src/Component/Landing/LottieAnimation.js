import { useLottie } from "lottie-react";
import groovyWalkAnimation from "../../Asset/Lottie/16399-data-eraser-software.json";

const style = {
};

const LottieAnimation = () => {
    const options = {
        animationData: groovyWalkAnimation,
        loop: true,
        autoplay: true,
    };

    const { View } = useLottie(options, style);

    return View;
};

export default LottieAnimation;