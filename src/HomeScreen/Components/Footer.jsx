import React from 'react'
import useWindowDimensions from '../../Services/WindowsDimesions'

const Footer = () => {

    const { width, height } = useWindowDimensions();
    return (
        <div style={{ height: '60vh', fontSize: '40px' }}>{height}</div>
    )
}

export default Footer