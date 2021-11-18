import React from 'react'
import './Navbar.css'
const Navbar = () => {
    
    return (
        <>
            <div className="nav">
                <label htmlFor="toggle">☰</label>
                <input type="checkbox" id='toggle' />
                <h2>BookPod.</h2>
                <div className="menu">
                <a href="http://about:blank">Home</a>
                <a href="http://about:blank">Categories</a>
                <a href="http://about:blank">Podcasts</a>
                </div>
            </div>
            <input className='search' type="text" placeholder='Search' />
        </>
    )
}

export default Navbar
