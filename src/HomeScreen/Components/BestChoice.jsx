import React from 'react'
import '../Styles/BestChoice.css'
import InfoCard from './InfoCard'
import graph_icon from '../../Assets/SVG/graph.svg'
import gear_icon from '../../Assets/SVG/gear.svg'
import bug_icon from '../../Assets/SVG/bug.svg'

const card_list = [
    {
        icon: graph_icon,
        title: 'Scalable',
        content: 'Specialize in developing scalable applications tailored to meet the unique needs of our clients. With our expertise in software development, we create robust and flexible solutions that can grow and adapt alongside your business.'
    },
    {
        icon: gear_icon,
        title: 'Efficient',
        content: "At Bloggios, we understand the importance of efficiency in today's fast-paced digital landscape, and our team of experienced developers is dedicated to creating streamlined and high-performing solutions for Seamless user Experience."
    },
    {
        icon: bug_icon,
        title: 'Bug Free',
        content: "We pride ourselves on developing bug-free code to ensure the highest level of reliability, stability, and security for our clients' applications. We understand that bugs can lead to costly downtime and compromised user experiences."
    }
]


const BestChoice = () => {
    return (
        <section className='best-choice'>
            <div>
                <div>
                    <span className='best-choice-header'>Why Bloggios is best choice<br />for your unique idea</span>
                    <br />
                    <span className='best-choice-motto'>Bloggios is affordable and reliable Software Development Company that can help you create strong presence in this Modern World</span>
                    <div className='info-card-parent-div row row-cols-3'>
                        {card_list.map((card, index) => {
                            return (
                                <InfoCard
                                    key={index}
                                    icon={card.icon}
                                    title={card.title}
                                    content={card.content}
                                />
                            )
                        })}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default BestChoice