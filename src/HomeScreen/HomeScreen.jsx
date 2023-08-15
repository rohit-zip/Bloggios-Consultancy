import React from 'react'
import Base from '../Base/Base'
import HeaderSection from './Components/HeaderSection'
import BestChoice from './Components/BestChoice'
import OurServices from './Components/OurServices'
import Technologies from './Components/Technologies'
import Booking from './Components/Booking'
import Footer from './Components/Footer'

const HomeScreen = () => {
    return (
        <Base>
            <HeaderSection />
            <BestChoice />
            <OurServices />
            <Technologies />
            <Booking />
            <Footer />
        </Base>
    )
}

export default HomeScreen