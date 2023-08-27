import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import background from '../Assets/SVG/background.svg'
import Base from '../Base/Base';
import './ServicesScreen.css'
import bloggios_logo from '../Assets/SVG/bloggios-white-purple-logo.svg'

const array = [<i className="fa-brands fa-linkedin"></i>, <i className="fa-brands fa-linkedin"></i>, <i className="fa-brands fa-linkedin"></i>]

const ServicesScreen = () => {
    return (
        <Base
            bgColor={'#4258ff'}
            fontWeight={200}
            textColor={'#ffff'}
            logo={bloggios_logo}
            dividerColor={'rgba(255, 255, 255, 0.4)'}
            lineColor={'rgba(255, 255, 255, 0.8)'} >
            <div style={{
                width: '80vw',
            }}>
                <Carousel prevIcon={<i className="fa-brands fa-linkedin"></i>}>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={background}
                            alt="First slide"
                            height={'500px'}
                        />
                        <Carousel.Caption>
                            <h5>First slide label</h5>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={background}
                            alt="Second slide"
                            height={'500px'}
                        />
                        <Carousel.Caption>
                            <h5>Second slide label</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={background}
                            alt="Third slide"
                            height={'500px'}
                        />
                        <Carousel.Caption>
                            <h5>Third slide label</h5>
                            <p>
                                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                            </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        </Base >
    )
}

export default ServicesScreen