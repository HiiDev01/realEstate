import React, { useEffect, useRef, useState } from 'react'
import { TextAlignJustify } from 'lucide-react';
import '../styles/Nav.css'


const Nav = () => {
  const [hamburgerToggle, setHamburgerToggle] = useState(false);
  const navRef = useRef();
  const navItem = [
    {name: "Home", path: '/'},
    {name: "listing", path: '/listing'},
    {name: "about", path: '/about'},
    {name: "blog", path: '/blog'}
  ]

  const toggleHamburger = ()=>{
    setHamburgerToggle(!hamburgerToggle);
    console.log("nav is clicked")
  }

  const handleClickOutside = (e) =>{
    if(navRef.current && !navRef.current.contains(e.target)){
      setHamburgerToggle(false);
    }
  }
  useEffect(()=>{
    document.addEventListener("mousedown", handleClickOutside);
    return () =>  document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  return (
    <nav className='nav'>
      <div className="logo">UrbanHaven</div>
      <div className='navItem' ref={navRef}>
        <ul  className={`navUl ${hamburgerToggle ? "toggle" : ""}`}>
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
          <button onClick={toggleHamburger}> <TextAlignJustify size={30}/></button>
        </div>
      </div>
    </nav>
  )
}

export default Nav
