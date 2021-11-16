import React from 'react'
import IntroPage from './container/IntroPage'
import MainSection from './container/MainSection'

const Home = () => {
    return (
        <div style = {{overflow:'hidden'}}>
        <IntroPage/>
        <div className = "testMain">
        <MainSection/>
        </div>
     </div>
    )
}

export default Home
