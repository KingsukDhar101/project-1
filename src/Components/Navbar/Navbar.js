import React from 'react'
import './Navbar.css'
const Navbar = () => {
    
    return (
        <div className='navbar-container'>
            <div className='navbar'>
                <h2 className='logo'>BookPod.</h2>
                <nav>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Categories</a></li>
                        <li><a href="#">Podcasts</a></li>
                    </ul>
                </nav>
                <img src='https://i.imgur.com/tK6C3ci.png' alt='' className='menu-icon' />
            </div>
        </div>
    )
}

export default Navbar
