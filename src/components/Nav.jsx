import React, { useEffect, useState } from 'react'
import '../styles/Nav.css'


const Nav = () => {
  const navItem = [
    {name: "Home", path: '/'},
    {name: "listing", path: '/listing'},
    {name: "about", path: '/about'},
    {name: "blog", path: '/blog'}
  ]
  return (
    <nav className='nav'>
      <div className="logo">UrbanHaven</div>
      <ul className='navUl'>
        {navItem.map((item, i)=>(
          <li key={i}>
            <a href={item.path}>
              {item.name}
            </a>
          </li>
        ))}
      </ul>
      <div className="auth">
        <a href="/contact">contact us</a>
      </div>
    </nav>
  )
}

export default Nav
