import React from 'react'
import "../../css/Input.css"
const Input = ({onchange}) => {
    return (
        <div className = "form_body">
            <div className="form">
                <input 
                    onChange={(event)=>{onchange(event.target.value)}}
                    style={{marginLeft:"15px"}}
                    type="text"
                    id="email"
                    className="form__input"
                    autocomplete="off"
                    placeholder=" "></input>
                <label for="email" className="form__label">Telegram Account</label>
                <span style={{position:"absolute", top:"10px",left:"-10px"}} className='form_at'>@</span>
            </div>
        </div>
    )
}

export default Input
