import React from 'react'
import '../Styles/Footer.css'

const Footer = () => {

    return (
        <section className='bloggios-landing-footer'>
            <div className='landing-footer-div d-flex'>
                <div className="col-5">
                    <span>Find Us</span>
                    <div className='footer-icons-div'>
                        <i class="fa-brands fa-instagram"></i>
                        <i class="fa-brands fa-facebook"></i>
                        <i class="fa-brands fa-square-twitter"></i>
                        <i class="fa-brands fa-linkedin"></i>
                    </div>
                </div>
                <div className="col-7 d-flex footer-services-section">
                    <div className="col">
                        <span>Dev Service</span>
                        <div>
                            <span>Web Development</span>
                            <span>App Development</span>
                            <span>Backend</span>
                            <span>Frontend</span>
                        </div>
                    </div>
                    <div className="col">
                        <span>Resources</span>
                        <div>
                            <span>Pricing</span>
                            <span>Blog</span>
                            <span>Projects</span>
                            <span>About</span>
                        </div>
                    </div>
                    <div className="col">
                        <span>Learn</span>
                        <div>
                            <span>Instructor</span>
                            <span>Learner</span>
                            <span>Courses</span>
                            <span>Free Resource</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className='footer-last-section'>
                <div>
                    <span>Bloggios</span>
                    <span>Term of Use</span>
                    <span>Privacy Policy</span>
                </div>
                <div>
                    <span>Copyright © 2023 Bloggios. All Right Reserved</span>
                </div>
            </div>
        </section>
    )
}

export default Footer