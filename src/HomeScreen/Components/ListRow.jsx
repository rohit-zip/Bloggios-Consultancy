import React from 'react'


const ListRow = (props) => {
  return (
    <div className='list-row'>
      <div>
        <img className='images' src={props.image} alt={props.alt} />
      </div>
      <div className='right-pane-services'>
        <div>
          <div>{props.title}</div>
          <span>{props.body}</span>
        </div>
        <button>Learn more</button>
      </div>
    </div>
  )
}

export default ListRow