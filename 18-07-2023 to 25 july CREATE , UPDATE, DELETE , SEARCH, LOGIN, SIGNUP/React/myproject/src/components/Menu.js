import React from 'react'
import { NavLink } from 'react-router-dom'
import{useAuth0} from "@auth0/auth0-react"
function Menu() {
  let {loginWithPopup,loginWithRedirect,logout,isAuthenticated,user}  =useAuth0()
  return (
    <>
    
    <nav className="navbar navbar-expand-lg bg-info">
                    <div className="container-fluid">
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/read">UserRead</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/create">UserCreate</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/update/1">UserUpdate</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/search">UserSearch</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" onClick={loginWithRedirect}>Login</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" onClick={logout} >Logout</NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                
                <div>
                    <h2>
                   User-- {isAuthenticated?user.name:"Logout"}
                   </h2>
                </div>
                </>
  )
}

export default Menu