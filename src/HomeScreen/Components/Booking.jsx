import React from 'react'
import '../Styles/Booking.css'
import headphone_icon from '../../Assets/SVG/headset-svgrepo-com.svg'
import demo_icon from '../../Assets/SVG/chat-svgrepo-com.svg'
import BookingCard from './BookingCard'
import { useNavigate } from 'react-router-dom'

const cardList = [
    {
        title: "Book a Call",
        navigate: 'book-call',
        subTitle: "Schedule a call with us to discuss your needs. Our experts are ready to assist you.",
        source: headphone_icon
    },
    {
        title: "Demo",
        navigate: 'book-demo',
        subTitle: "Experience firsthand how our solutions can transform your workflow. Request a demo today.",
        source: demo_icon
    }
]

const Booking = () => {

    const navigate = useNavigate()

    return (
        <section className='booking-section'>
            <div className='motto-heading'>Not only solve your problem<br />We reframe your story</div>
            <span className='motto-brief'>We don't just solve problems; we reshape narratives. Discover how our solutions redefine success, one story at a time. Beyond solutions, we craft transformations. Your challenges become stories of triumph through our innovative approaches.</span>
            <div className='booking-card-div'>
                {cardList.map((value, key) => {
                    return (
                        <BookingCard
                            key={key}
                            onClick={() => navigate(value.navigate)}
                            title={value.title}
                            source={value.source}
                            subTitle={value.subTitle} />
                    )
                })}
            </div>
        </section>
    )
}

export default Booking