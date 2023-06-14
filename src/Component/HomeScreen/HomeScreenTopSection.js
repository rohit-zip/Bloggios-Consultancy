import React from 'react'
import person_image from '../../Asset/Svg/person-managing-digital-tasks.svg'
import './HomeScreenTopSection.css'

const HomeScreenTopSection = () => {
    return (
        <section id='#intro' className='row mx-5 my-4 home-screen-top-section'>
            <div className="col-lg-5 col-md-12 col-sm-12">
                <img src={person_image} alt="image" />
            </div>
            <div className="col-lg-7 col-md-12 col-sm-12 top-section-right-main-div">
                <span className='title'>Bloggios Consultancy</span>
                <span className='motto'>Think Tech, Choose Bloggios</span>
                <div className='row row-cols-2 d-flex m-4 w-75 p-4 align-self-center bg-info'>
                    <div className="col-3 tech-stack">
                        <span>Technologies</span>
                        <span>We Specialize In</span>
                    </div>
                    <div className="col-9">
                        <div className='row row-cols-4'>
                            <span>rohit</span>
                            <span>rohit</span>
                            <span>rohit</span>
                            <span>rohit</span>
                            <span>rohit</span>
                            <span>rohit</span>
                            <span>rohit</span>
                            <span>rohit</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HomeScreenTopSection