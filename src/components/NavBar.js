import React from 'react'
import { NavLink } from "react-router-dom"

const linkStyles = {
    display: "inline-block",
    padding: "12px",
    margin: "0 6px 6px",
    background: "#A3A9AA",
    textDecoration: "none",
    color: "black",
}
const activeStyle = {
    background: "#C3FDD6", 
    borderRadius: "5px",
}

function NavBar() {
  return (
    <div className="nav">
        <NavLink 
            className="nav-bar"
            to="/"
            exact
            style={linkStyles}
            activeStyle={activeStyle}
        >Home
        </NavLink>
        <NavLink 
            className="nav-bar"
            to="/books"
            exact
            style={linkStyles}
            activeStyle={activeStyle}
        >Books
        </NavLink>
        <NavLink 
            className="nav-bar"
            to="/author"
            exact
            style={linkStyles}
            activeStyle={activeStyle}
        >Authors
        </NavLink>
        <NavLink 
            className="nav-bar"
            to="/bookform"
            exact
            style={linkStyles}
            activeStyle={activeStyle}
        >Add a Book
        </NavLink>
    </div>
  )
}

export default NavBar