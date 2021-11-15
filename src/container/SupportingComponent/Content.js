import React from 'react'
import "../../css/Content.css"
import IntroLogoPic from "../../assets/intro-logo.png"
const Content = () => {
    return (
        <div class = "Content">

            <img className = "IntroLogoPic" src = {IntroLogoPic} alt = "intrologopic"/>

           <h1 className = "IntroText"><span className = "IntroTextSpan IntroTextSpanOne">Get Your Stickers</span><br/><span className = "IntroTextSpan IntroTextSpanTwo">Now</span></h1>
        </div>
    )
}

export default Content
