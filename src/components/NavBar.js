import React from 'react'
import { NavLink } from "react-router-dom"

const linkStyles = {
    display: "inline-block",
    padding: "12px",
    margin: "0 6px 6px",
    background: "#D4F4DD",
    textDecoration: "none",
    color: "black",
}

function NavBar() {
  return (
    <div>
        <NavLink 
            className="nav-bar"
            to="/"
            exact
            style={linkStyles}
            activeStyle={{
                background: "#BE8BFF", 
                borderRadius: "25px",
            }}
        >Home
        </NavLink>
        <NavLink 
            className="nav-bar"
            to="/books"
            exact
            style={linkStyles}
            activeStyle={{
                background: "#BE8BFF", 
                borderRadius: "25px",
            }}
        >Books
        </NavLink>
        <NavLink 
            className="nav-bar"
            to="/bookdetail"
            exact
            style={linkStyles}
            activeStyle={{
                background: "#BE8BFF", 
                borderRadius: "25px",
            }}
        >Book
        </NavLink>
        <NavLink 
            className="nav-bar"
            to="/bookform"
            exact
            style={linkStyles}
            activeStyle={{
                background: "#BE8BFF", 
                borderRadius: "25px",
            }}
        >Form
        </NavLink>
    </div>
  )
}

export default NavBar