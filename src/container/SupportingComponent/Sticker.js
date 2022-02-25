import React from 'react'
import "../../css/Sticker.css"
import AddToCartButton from './AddToCartButton'
const Sticker = ({sticker}) => {
    return (
    <div className = "stickerdiv">
        <img 
        style = {{
            maxHeight: "280px",
            maxWidth:"300px"  
        }}
        src = {`/img/${sticker.img}`} alt = "stickerimage"/>
        <h1
        style = {{textAlign:"center",color : "black"}}
        className = "txt"
        > Sticker Id : {sticker.id}</h1>
        <div style ={{marginBottom:"10px",marginTop :"25px" ,display : "flex",justifyContent : "center"}}>
            <AddToCartButton stickerId = {sticker.id}/>
        </div>
    </div>    )
}
export default Sticker;