import React from 'react'
import "../../css/CartIcon.css"
const CartIcon = ({total}) => {
    const number = total
    
    return (
    <div className="carticon_div" >
        <div className="carticon_childdiv">
            <img className="carticon" src="./cart.png" alt="" srcSet=""/>
            <img className = "background-number"   alt="" src = "background.png" />

            <div style={{
                top: number>9? "-4px": "-5px",
                left : number>9? "17px" : "20px",
                fontSize : number>9? "17px":"20px"
            }} className = "cart_number"


            >{number}</div>
        </div>
    </div>
    )
}
export default CartIcon
