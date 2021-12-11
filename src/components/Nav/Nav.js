import React from 'react'
import { Link } from 'react-router-dom'
import './Nav.css';

const links = [
  { 
    id: 0,
    name: 'projects',
    to: '/',
    className: 'nav-link',
    active: true
  },
  {
    id: 1,
    name: 'experiences',
    to: '/experience',
    className: 'nav-link',
    active: false
  },
  {
    id: 2,
    name: 'about',
    to: '/about',
    className: 'nav-link',
    active: false
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
            { links.map((link) =>
              <li key={link.id} onClick={() => handleActivePage(link.to)}>
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
