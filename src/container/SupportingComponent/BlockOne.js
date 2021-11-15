import React from 'react'
import AnimationBlockOne from './AnimationBlockOne'
import TextBlockOne from './TextBlockOne'
import "../../css/BlockOne.css"
const BlockOne = () => {
    return (
        <div className = "BlockOne">
          <AnimationBlockOne/>
          <TextBlockOne/>
        </div>
    )
}

export default BlockOne
