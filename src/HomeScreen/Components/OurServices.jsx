import React from 'react'
import '../Styles/OurServices.css'
import ListRow from './ListRow'
import mobile_bloggios from '../../Assets/SVG/mobile-bloggios.svg'
import web_bloggios from '../../Assets/SVG/web-design.svg'

const listData = [
    {
        title: "Web Development",
        image: web_bloggios,
        alt: 'web-development',
        body: "Websites and E-Commerce do not have to be expensive or complicated to be effective. We deal with the wide spectrum of clients with varying budgets and needs."
    },
    {
        title: "App Development",
        image: mobile_bloggios,
        alt: 'app-development',
        body: "Websites and E-Commerce do not have to be expensive or complicated to be effective. We deal with the wide spectrum of clients with varying budgets and needs."
    }
]

const OurServices = () => {
    return (
        <section className='our-services'>
            <div className='our-services-container'>
                <span>We help Buisnesses to make their Product come to life, worldwide.</span>
                {listData.map((value, key) => {
                    return (
                        <ListRow
                            key={key}
                            image={value.image}
                            title={value.title}
                            alt={value.alt}
                            body={value.body} />
                    )
                })}
                <button className='view-all-button'>View More</button>
            </div>
        </section>
    )
}

export default OurServices