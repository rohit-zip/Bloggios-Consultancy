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

const DropdownContent = () => {
    return (
        <div className='dropdown-content'>
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
            <div className="col-8">Rohit</div>
        </div>
    )
}

export default DropdownContent