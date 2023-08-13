import React from 'react'
import Base from '../Base/Base'
import HeaderSection from './Components/HeaderSection'
import BestChoice from './Components/BestChoice'
import OurServices from './Components/OurServices'

const HomeScreen = () => {
    return (
        <Base>
            <HeaderSection />
            <BestChoice />
            <OurServices />
        </Base>
    )
}

export default HomeScreen