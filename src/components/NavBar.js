import React from 'react'
import { NavLink, Router } from 'react-router-dom'

const NavBar = () => {
    return(
    <div>
            <NavLink to='/stations'>Stations</NavLink>
            <NavLink to='/login'>Login</NavLink>
            <NavLink to='/signup'>Signup</NavLink>
    </div>
    )
}

export default NavBar