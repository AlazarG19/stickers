import React from 'react'
import "../../css/Text.css"
const TextBlockOne = () => {
    return (
        <div
        className = "txt"
           style={{
    display: "flex",
    flexDirection: "column",
    alignContent: "space-between",
    justifyContent: "center",
    color:"#023e8a",
    marginBottom: "60px"

}}
        >
            <span>We have Sticker Design</span>
            <br/> 
            <span>of Differnet Genres and Types</span>
            
        </div>
    )
}

export default TextBlockOne
