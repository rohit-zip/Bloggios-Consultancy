import React from 'react'
import Base from '../Base/Base'
import bloggios_logo from '../Assets/SVG/bloggios-white-purple-logo.svg'
import './ErrorScreen.css'

const ErrorScreen = () => {
    return (
        <Base
            bgColor={'#4258ff'}
            yHidden={true}
            mobileColor={'#6072ff'}
            fontWeight={200}
            textColor={'#ffff'}
            logo={bloggios_logo}
            dividerColor={'rgba(255, 255, 255, 0.4)'}
            lineColor={'rgba(255, 255, 255, 0.8)'}>
            <section className='error-screen-section'>
                <div>
                    <svg className='logo-svg' xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 600 300">
                        <symbol id="s-text">
                            <text textAnchor="middle"
                                x="50%" y="10%" dy=".85em">
                                BLOGGIOS
                            </text>
                        </symbol>

                        <use xlinkHref="#s-text" className="text"
                        ></use>
                        <use xlinkHref="#s-text" className="text"
                        ></use>
                        <use xlinkHref="#s-text" className="text"
                        ></use>
                        <use xlinkHref="#s-text" className="text"
                        ></use>
                        <use xlinkHref="#s-text" className="text"
                        ></use>

                    </svg>
                </div>

                <div>
                    <svg className='sub-logo-svg' xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 600 300">

                        <symbol id="a-text">
                            <text textAnchor="middle"
                                x="50%" y="50%" dy=".15em">
                                Coming Soon
                            </text>
                        </symbol>

                        <use xlinkHref="#a-text" className="sub-text"
                        ></use>
                        <use xlinkHref="#a-text" className="sub-text"
                        ></use>
                        <use xlinkHref="#a-text" className="sub-text"
                        ></use>
                        <use xlinkHref="#a-text" className="sub-text"
                        ></use>
                        <use xlinkHref="#a-text" className="sub-text"
                        ></use>

                    </svg>
                </div>
            </section>
        </Base>
    )
}

export default ErrorScreen