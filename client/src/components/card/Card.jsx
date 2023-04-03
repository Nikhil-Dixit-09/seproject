import React from 'react'
import './card.css'
const Card = (props) => {
    console.log(props)
  return (
    <div className='card'>
        <div className='image'>
            <img src={props.image} alt="" />
        </div>

        <div className='text'>
            {props.text}
        </div>

    </div>
  )
}

export default Card
