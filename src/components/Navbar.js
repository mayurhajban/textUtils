import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';


export default function Navbar(props) {
  return (

    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode} text-white`}>
      <Link className="navbar-brand" to="/">{props.title}</Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <Link className="nav-link" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about">{props.about}</Link>
          </li>
        </ul>
      </div>
      <div className="form-check form-switch">
        <input onClick={props.toggleMode} className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
        <label className={`form-check-label text-${props.mode === 'light' ? 'dark' : 'light'}`} htmlFor="flexSwitchCheckDefault">{props.mode === 'light' ? "Enable DarkMode" : 'Disable DarkMode'}</label>
      </div>
    </nav>

  )
}

Navbar.prototype = {
  title: PropTypes.string.isRequired,
  about: PropTypes.string.isRequired
}

Navbar.defaultProps = {
  title: "Title",
  about: "About"
}