import React from 'react'
import { Link } from 'react-router-dom'
import './Nav.css';

function Nav() {
  return (
    <div>
      <nav className="navbar navbar-expand-sm">
        <div className="d-flex w-100 justify-content-between">
          <Link to="/" className="nav-link">haleyalee</Link>
          <div>
            <ul className="navbar-nav">
              <li className="nav-item"><Link to="/experience" className="nav-link">experience</Link></li>
              <li className="nav-item"><Link to="/about" className="nav-link">about</Link></li>
              <li className="nav-item"><a href="/" className="nav-link">resume</a></li>
            </ul>
          </div>
        </div>
      </nav>
      
    </div>
  )
}

export default Nav
