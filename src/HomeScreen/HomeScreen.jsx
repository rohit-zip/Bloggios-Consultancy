import React from 'react'
import Base from '../Base/Base'
import HeaderSection from './Components/HeaderSection'
import BestChoice from './Components/BestChoice'
import OurServices from './Components/OurServices'
import Technologies from './Components/Technologies'
import Booking from './Components/Booking'
import Footer from './Components/Footer'
import Testimonials from './Components/Testimonals'

const HomeScreen = () => {
    return (
        <Base>
            <HeaderSection />
            <BestChoice />
            <OurServices />
            <Technologies />
            <Testimonials />
            <Booking />
            <Footer />
        </Base>
    )
}

export default HomeScreen