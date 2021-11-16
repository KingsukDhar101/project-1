import React, { Component } from 'react'
import Navbar from './Components/Navbar/Navbar'
import Header from './Components/Header/Header'
import MiddleSection from './Components/MiddleSection/MiddleSection'
import WriterSection from './Components/WriterSection/WriterSection'

export default class App extends Component {
    render() {
        return (
            <div className='app-container'>
                <Navbar />
                <Header />
                <MiddleSection />
                <WriterSection />
            </div>
        )
    }
}
