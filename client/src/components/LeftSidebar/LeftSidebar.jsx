import React from 'react'
import './LeftSidebar.css'
import './Button1.css'
import {NavLink} from 'react-router-dom'
import Globe from '../../assets/globe.svg'

const LeftSidebar = () => {
  return (
    <div className='left-sidebar'>
      <nav className='side-nav'>
        <NavLink to = '/' className='side-nav-links' activeClassName ='active'>
          <p>Home</p>
        </NavLink>
        <div className='side-nav-div'>
          <div><p>PUBLIC</p></div>
          <NavLink to = '/Questions' className='side-nav-links' activeClassName='active'>
            <img src={Globe} alt = "Globe" height='20px'/>
            <p style={{paddingLeft: "10px"}}>Questions</p>
          </NavLink>
          <NavLink to = '/Tags' className='side-nav-links' activeClassName='active' style={{paddingLeft:"40px"}}>
              <p>Tags</p>
          </NavLink>
          <NavLink to = '/Users' className='side-nav-links' activeClassName='active' style={{paddingLeft:"40px"}}>
              <p>Users</p>
          </NavLink>

          {/* Temporary Check */}
          <a href="https://amankas.github.io/Atom-D-Community-CheckFeed/">
            <button1><span>Community</span><i></i></button1>
          </a>

        </div>
      </nav>
    </div>
  )
}

export default LeftSidebar
