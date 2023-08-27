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
import { useNavigate } from 'react-router-dom'

const icon_list = [
    {
        name: 'Java',
        icon: java_icon
    },
    {
        name: 'Spring',
        icon: spring_icon
    },
    {
        name: 'React',
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

    const navigate = useNavigate()

    return (
        <section className='technologies-main'>
            <div className='technologies-container'>
                <div>
                    <span className='title'>Our Technical Expertise</span>
                    <span className='subtitle'>With a deep-rooted technical prowess, we excel in a spectrum of cutting-edge technologies. Our proficiency extends to Spring Boot, React, and Flutter, enabling us to craft seamless and dynamic web and mobile applications.</span>
                    <div className='technologies-icons-list row row-cols-lg-4'>
                        {icon_list.map((value, key) => {
                            return (
                                <CustomIcon key={key} onClick={() => navigate('technology/' + value.name.toLowerCase())} icon={value.icon} name={value.name} />
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