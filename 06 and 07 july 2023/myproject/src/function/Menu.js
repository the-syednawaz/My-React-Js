import React from 'react'
import {Link} from "react-router-dom"
function Menu() {
  return (
    <>
    <Link to="/">Home</Link>
    <br/><br/>
    <Link to="/about">About</Link>
    <br/><br/>
    <Link to="/news">News</Link>
    <br/><br/>
    <Link to="/contact">Contact</Link>
    <br/><br/> 
    </>
  )
}

export default Menu