import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className='navbar navbar-dark bg-primary navbar-expand-lg'>
      <div className='navbar-brand'>
        Github поискs
            </div>
      <ul className='navbar-nav'>
        <li className='nav-item'>
          <NavLink to='/' exact className='nav-link'>Главная</NavLink>
        </li>
        <li className='nav-item'>
          <NavLink to='/about' className='nav-link'>Информация</NavLink>
        </li>
      </ul>
    </nav>
  )
}
