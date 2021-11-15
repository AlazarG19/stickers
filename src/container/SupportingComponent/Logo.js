import React from 'react'
import LogoPic from "../../assets/logo.png"
import { useState,useEffect } from 'react'
const Logo = ({picsize}) => {
    const [size,setSize] = useState("10px")
    useEffect(() => {
        if(picsize === "small"){
            setSize("40px")
    }else if(picsize === "medium"){
        setSize("80px")
    }else if(picsize === "large"){
        setSize("120px")
    }else{
        alert("none")
    }
    })
    return (
        
        <img 
        style = {{width:size,height:size,cursor:"pointer"}}
        src = {LogoPic} alt = "logo"/>
    )
}

export default Logo
