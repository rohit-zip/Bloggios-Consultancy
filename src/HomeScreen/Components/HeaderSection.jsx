import React from 'react'
import '../Styles/HeaderSection.css'

const HeaderSection = () => {
    return (
        <section className='header-section'>
            <div className="col">
                <span>By the Developer of Bloggios <br /></span>
                <div className='bloggios-motto'>Convey your Idea,<br />We'll Implement</div>
                <div className='bloggios-bio'>We specialized in delivering cutting edge projects for Clients. With a strong focus on Java Spring Boot, React JS, Flutter, Docker, Kafka, and other advanced technologies, we provide innovative and scalable solutions that empower businesses to thrive in the digital era.</div>
            </div>
            <div className="col" />
        </section>
    )
}

export default HeaderSection