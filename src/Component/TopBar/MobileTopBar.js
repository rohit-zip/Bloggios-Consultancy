import React, { useState } from 'react'
import './MobileTopBar.css'
import bloggios_logo from '../../Asset/Svg/bloggios1.svg'

const featuredList = [
    {
        title: "REST API's",
        subTitle: "Optimised and Efficient API Endpoints"
    },
    {
        title: "Microservices",
        subTitle: "Scalable Microservices with Spring Boot framework"
    },
    {
        title: "Client Side",
        subTitle: "Eye catching UI development with React JS or Flutter"
    },
    {
        title: "E-Commerce",
        subTitle: "Application allows people to buy and sell physical goods, services, etc"
    },
    {
        title: "Static Website",
        subTitle: "A website with static content, mostly ideal for Portfolio, Small Buisnesses, Menu Cards, Brochure etc"
    },
    {
        title: "Webapp",
        subTitle: "An application developed on the basis of clients need and having responsive UI for compatibility on multiple devices"
    },
    {
        title: "Mobile App",
        subTitle: "An application specifically developed for Mobile Devices containing Android and IOS"
    },
    {
        title: "Support",
        subTitle: "Technical support, Bug/Fix or Version Upgrade for already developed Project"
    }
]

const MobileTopBar = () => {

    const [isShown, setIsShown] = useState(false);
    const [solutionsShown, setSolutionsShown] = useState(false);

    const handleBurgerShown = (value) => {
        setSolutionsShown(false)
        setIsShown(value);
    }


    return (
        <>
            <div className={`mobile-top-bar ${isShown && 'burger-shown'}`}>
                <img src={bloggios_logo} alt='B' />
                <i onClick={() => handleBurgerShown(!isShown)} className={`fa-solid ${isShown ? 'fa-xmark' : 'fa-bars'}`}></i>
            </div>
            <div className={`menu-content d-flex flex-column ${isShown && 'active-burger'}`}>
                <div>
                    <span>Portfolio</span>
                    <i class="fa-solid fa-chevron-right"></i>
                </div>
                <div>
                    <span>About Bloggios</span>
                    <i class="fa-solid fa-chevron-right"></i>
                </div>
                <div onClick={() => setSolutionsShown(!solutionsShown)} >
                    <span>Solutions</span>
                    <i class={`fa-solid fa-chevron-right ${solutionsShown && 'fa-rotate-90'}`}></i>
                </div>
            </div>
            <div className={`d-flex row row-cols-2 g-4 justify-content-between align-items-center items-main-div ${solutionsShown && 'active-solutions'}`}>
                {featuredList.map((value, key) => {
                    return (
                        <div key={key} className="d-flex justify-content-between align-items-center flex-row" >
                            <span>{value.title}</span>
                            <i className="fa-solid fa-up-right-from-square"></i>
                        </div>
                    )
                })}
                <div style={{ width: '90%', textAlign: 'center', marginLeft: '5%' }}>All Services</div>
            </div>
        </>

    )
}

export default MobileTopBar