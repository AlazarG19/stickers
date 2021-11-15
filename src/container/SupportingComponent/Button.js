import "../../css/Button.css"
import { useState } from 'react'
const Button = ({text,pcolor,scolor}) => {
    const [txtColor,setTextColor] = useState(scolor)
    const [bgColor,setBgColor] = useState(pcolor)
    const [borderColor,setBorderColor] = useState(scolor)
    
    return (
        <div className="button_container">

        <button className="animationbtn">
            <span>{text}</span>
        </button>
    
       </div>
    )}


export default Button
