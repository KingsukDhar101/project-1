import React, { Component } from 'react'
import './Header.css';

export default class Header extends Component {
    render() {
        return (
            <div className='header'>
                <h1>Home of <span Style='color:#212197'>100,000+</span><br/>books and podcasts</h1>
                <p>Get the latest books and listen to the<br/> latest podcasts all in one place</p>
                <button className='btn bg-blue'>Get Started</button>
            </div>
        )
    }
}
