import React from 'react'
import './DropdownContent.css'

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
    }
]

const subList = [
    {
        title: "E-Commerce",
        subTitle: "Application allows people to buy and sell physical goods, services, etc"
    },
    {
        title: "Static Website",
        subTitle: "A website with static content, mostly ideal for Portfolio, Small Buisnesses, Menu Cards, Brochure etc"
    },
    {
        title: "Custom Webapp",
        subTitle: "An application developed on the basis of clients need and having responsive UI for compatibility on multiple devices"
    },
    {
        title: "Mobile Application",
        subTitle: "An application specifically developed for Mobile Devices containing Android and IOS"
    },
    {
        title: "Development Support",
        subTitle: "Technical support, Bug/Fix or Version Upgrade for already developed Project"
    }
]

const DropdownContent = () => {

    return (
        <div className='dropdown-content' style={{ zIndex: 1 }}>
            <div className="col-4 left-pane">
                <span className="dropdown-content-header-left-pane">Featured</span>
                {featuredList.map((value, key) => {
                    return (
                        <div key={key} className='left-pane-featured-list'>
                            <span className="featured-title">{value.title}</span>
                            <span className="featured-subtitle">{value.subTitle}</span>
                        </div>
                    )
                })}
            </div>
            <div className="right-pane">
                <span>Development and Support</span>
                <div>
                    {subList.map((value, key) => {
                        return (
                            <div key={key} className='right-pane-list'>
                                <span className="sub-list-title">{value.title}</span>
                                <span className="sub-list-subtitle">{value.subTitle}</span>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default DropdownContent