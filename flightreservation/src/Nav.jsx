import React from 'react'
import { Link } from 'react-router-dom'
import { NavLink } from 'react-router-dom';

function Nav() {
  return (
    <div>
         <div>
        <ul>

            <li>
                <a href="#Help">Help</a>
            </li>
            <li>
                {/* <a href="login.html">Login</a> */}
                {/* <Link to="/login">Login</Link> */}
                <NavLink 
                        to="/login" 
                        className={({ isActive }) => (isActive ? 'active' : '')}
                        exact
                    >
                        Login
                    </NavLink>
            </li>
            <li>
                {/* <a href="registration.html">Register</a> */}
                {/* <Link to="/register">Register</Link> */}
                <NavLink 
                        to="/register" 
                        className={({ isActive }) => (isActive ? 'active' : '')}
                        exact
                    >
                        Register
                    </NavLink>
            </li>
            <li>
                {/* <a class="active" href="index.html">Home</a> */}
                {/* <Link to="/">Home</Link> */}

                <NavLink 
                        to="/" 
                        className={({ isActive }) => (isActive ? 'active' : '')}
                        exact
                    >
                        Home
                    </NavLink>

            </li>
            <li class="logo">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVUhaQQneWQ8NZ94I_s3oTY04WDZZ00BAGAw&s"
                    alt="no" width="50" height="50"/>
            </li>
        </ul>

    </div>
    </div>
  )
}

export default Nav