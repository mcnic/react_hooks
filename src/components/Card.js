import React from 'react'
import { Link } from 'react-router-dom'

export default function Card() {
  return (
    <div className='card'>
      <img src={''} alt={''} className='card-img-top' />
      <div className='card-body'>
        <h5 className='card-title'>ReactJS</h5>
        <Link to={'/profile/'.concat(42)} className='btn btn-primary'>open</Link>
      </div>

    </div>
  )
}
