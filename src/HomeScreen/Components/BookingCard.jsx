import React from 'react'
import '../Styles/BookingCard.css'

const BookingCard = (props) => {
    return (
        <div onClick={props.onClick} className='booking-card'>
            <img className='icon-image' src={props.source} alt="headphone" />
            <div className='small-brief'>
                <span className='booking-title'>{props.title}</span>
                <span className='booking-subtitle'>{props.subTitle}</span>
            </div>
        </div>
    )
}

export default BookingCard