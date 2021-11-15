import React from 'react'
import Navbar from './SupportingComponent/Navbar'
import "../css/IntroPage.css"
import Content from './SupportingComponent/Content'
const IntroPage = () => {
    return (
        <div className = "IntroPage">
            <Navbar/>
            <Content/>
        </div>
    )
}

export default IntroPage
