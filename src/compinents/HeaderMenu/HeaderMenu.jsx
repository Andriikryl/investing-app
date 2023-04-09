import React from 'react'
import { NavLink } from 'react-router-dom'

export default function HeaderMenu() {
  return (
    <div className='Menu-box'>
        <nav className='Menu-nav'>
            <ul className='Menu-list'>
                <li className='Menu-item'>
            
                        <NavLink className={({isActive}) => isActive ? "active" : null} to="/">
                            Main
                        </NavLink>

                </li>
                <li className='Menu-item'>
                        <NavLink to="/stocks">
                            Stocks
                        </NavLink>
                </li>
            </ul>
        </nav>
    </div>
  )
}
