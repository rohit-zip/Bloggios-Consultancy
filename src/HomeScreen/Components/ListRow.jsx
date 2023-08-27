import React from 'react'


const ListRow = (props) => {
  return (
    <div onClick={props.onClick} className='list-row'>
      <div>
        <img className='images' src={props.image} alt={props.alt} />
      </div>
      <div className='right-pane-services'>
        <div>
          <div>{props.title}</div>
          <span>{props.body}</span>
        </div>
        <button onClick={props.buttonClick}>Learn more</button>
      </div>
    </div>
  )
}

export default ListRow