import React, { useEffect } from 'react'
import IntroPage from './container/IntroPage'
import MainSection from './container/MainSection' 
import {v4 as uuid} from 'uuid'
const Home = () => {
    useEffect(() => {
      if (sessionStorage.getItem('id') === null) {
        const u = uuid()
        sessionStorage.setItem('id', u)
      }
      if (sessionStorage.getItem('order_id') === null) {
        const orderu = uuid()
        sessionStorage.setItem('order_id', orderu)
      }
    }, [])
  return (
    <div style={{ overflow: 'hidden' }}>
      <IntroPage />
      <div className="testMain">
        <MainSection />
      </div>
    </div>
  )
}

export default Home
