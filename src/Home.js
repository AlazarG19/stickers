import React from 'react'
import IntroPage from './container/IntroPage'
import MainSection from './container/MainSection'

const Home = () => {
    return (
        <div >
        <IntroPage/>
        <div className = "testMain">
        <MainSection/>
        </div>
     </div>
    )
}

export default Home
