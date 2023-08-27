import React from 'react'
import '../Styles/InfoCard.css'

const InfoCard = (props) => {
  return (
    <div onClick={props.onClick} className='info-card'>
      <div>
        <img src={props.icon} alt="icon" />
      </div>
      <div>{props.title}</div>
      <div>{props.content}</div>
    </div>
  )
}

export default InfoCard