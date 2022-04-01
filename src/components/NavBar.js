import React from 'react'
import { NavLink } from "react-router-dom"

const linkStyles = {
    display: "inline-block",
    padding: "12px",
    margin: "6px 6px 6px",
    background: "#A3A9AA",
    textDecoration: "none",
    color: "black",
    borderRadius: "5px",
}
const activeStyle = {
    background: "#6c7957", 
    borderRadius: "5px",
}

function NavBar() {
  return (
    <div className="nav">
        <h1 className="logo position-absolute top-0 end-0">Reader</h1>
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