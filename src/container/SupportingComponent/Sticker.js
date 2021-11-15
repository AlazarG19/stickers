import React from 'react'
import image from "../../assets/img/image (1).jpg"
import "../../css/Sticker.css"
import img from "../../assets/img/image (3).jpg"
import Button from './Button'
const Sticker = ({sticker, onDelete}) => {
    return (
    <div className = "stickerdiv">
        <img 
        style = {{
            width : "250px",
            height: "350px"
        }}
        src = {img}/>
        <h1
        style = {{textAlign:"center",color : "black"}}
        className = "txt"
        > Sticker Code : {sticker.code}</h1>
        <div style ={{marginBottom:"10px" ,display : "flex",justifyContent : "center"}}>
            <Button text = "Add to Cart"/>
        </div>
    </div>    )
}
export default Sticker;