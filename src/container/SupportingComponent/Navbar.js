import React from 'react'
import "../../css/navbar.css"
import Button from './Button'
import Logo from './Logo'
import {Link} from 'react-router-dom'
const Navbar = () => {
    return (
        <div className = "NavBar">
            <div
            style = {{
                margin:"10px"
            }}
            >
                <Logo picsize = "small"/>
            
            </div>
            <div className = "Buttons"
            >
                <Link to = "/">
                    <Button text = "Home" pcolor = "#00B4D8" scolor = "white" />
                </Link>
                <Link to = "/Shop">
                <Button text = "Shop" pcolor = "#00B4D8" scolor = "white" />
                </Link>

                <Button text = "About" pcolor = "#00B4D8" scolor = "white"/>
            </div>
        </div>
    )
}

export default Navbar
