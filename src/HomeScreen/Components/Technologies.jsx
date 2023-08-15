import React from 'react'
import '../Styles/Technologies.css'
import CustomIcon from './CustomIcon'
import spring_icon from '../../Assets/SVG/spring-boot-svgrepo-com.svg'
import java_icon from '../../Assets/SVG/java-svgrepo-com.svg'
import react_icon from '../../Assets/SVG/react-svgrepo-com.svg'
import flutter_icon from '../../Assets/SVG/flutter-svgrepo-com.svg'
import javascript_icon from '../../Assets/SVG/js-svgrepo-com.svg'
import docker_icon from '../../Assets/SVG/docker-svgrepo-com.svg'
import ViewAllIcon from '../../Component/ViewAllIcon'

const icon_list = [
    {
        name: 'Java Core',
        icon: java_icon
    },
    {
        name: 'Spring Boot',
        icon: spring_icon
    },
    {
        name: 'React JS',
        icon: react_icon
    },
    {
        name: 'Flutter',
        icon: flutter_icon
    },
    {
        name: 'Javascript',
        icon: javascript_icon
    },
    {
        name: 'Docker',
        icon: docker_icon
    }
]

const Technologies = () => {
    return (
        <section className='technologies-main'>
            <div className='technologies-container'>
                <div>
                    <span className='title'>Our Technical Expertise</span>
                    <span className='subtitle'>With a deep-rooted technical prowess, we excel in a spectrum of cutting-edge technologies. Our proficiency extends to Spring Boot, React, and Flutter, enabling us to craft seamless and dynamic web and mobile applications.</span>
                    <div className='technologies-icons-list'>
                        {icon_list.map((value, key) => {
                            return (
                                <CustomIcon icon={value.icon} name={value.name} />
                            )
                        })}
                        <ViewAllIcon />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Technologies