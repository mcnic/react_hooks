import React from 'react'
// import { LazyLoadImage } from 'react-lazy-load-image-component'
import { Link } from 'react-router-dom'

export default function Card({ user }) {
  return (
    <div className='card'>
      <img src={user.avatar_url} alt={user.login} className='card-img-top' />
      {/* <LazyLoadImage
        alt={''}
        // height={image.height}
        src={img}
      // width={image.width} 
      /> */}
      <div className='card-body'>
        <h5 className='card-title'>{user.login}</h5>
        <Link to={'/profile/' + user.login} className='btn btn-primary'>open</Link>
      </div>

    </div>
  )
}
