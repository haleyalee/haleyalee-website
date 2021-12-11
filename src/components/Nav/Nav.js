import React from 'react'
import { Link } from 'react-router-dom'
import './Nav.css';

const links = [
  { 
    name: 'projects',
    to: '/',
    className: 'nav-link',
    active: (window.location.pathname === '/')
  },
  {
    name: 'experiences',
    to: '/experience',
    className: 'nav-link',
    active: (window.location.pathname === '/experience')
  },
  {
    name: 'about',
    to: '/about',
    className: 'nav-link',
    active: (window.location.pathname === '/about')
  }
]

function Nav() {

  const handleActivePage = (path) => {
    links.forEach((link) => {
      link.active = (path === link.to);
    })
  }
  
  return (
    <div>
      <nav className="navbar navbar-expand-sm d-flex justify-content-between">
        <Link to="/" id="brand" className="nav-link">haleyalee</Link>
        <div>
          <ul className="navbar-nav">
            { links.map((link, idx) =>
              <li key={idx} onClick={() => handleActivePage(link.to)}>
                <Link to={link.to} className={link.className} >
                  <p className={(link.active) ? "line" : ""} style={{marginBottom: 0}}> {link.name} </p>
                  {/* { (link.active) && <div className="line" /> } */}
                </Link>
              </li>
            ) }
          </ul>
        </div>
    </nav>
      
    </div>
  )
}

export default Nav
