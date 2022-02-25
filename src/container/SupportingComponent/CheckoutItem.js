import React from 'react'
import "../../css/Checkout.css"
const CheckoutItem = ({s,
    m,
    l,
    img,
    id}) => {
    return (
        <div>
            <table className='order-table'>
                        <tbody>
                            <tr>
                                <td>
                                    <img src={`/img/${img}`} alt = ""
                                        className='full-width'></img>
                                </td>
                                <td>
                                    <br/>
                                    <span className='checkout_thin'>Id : {id}</span>
                                    <br/>
                                    Small :{s}
                                    <br/>
                                    Medium :{m} 
                                    <br/>
                                    Large :{l}
                                    <br/>
                                    
                                </td>

                            </tr> 
                            <tr>
                                <td>
                                    <div className='price'>Total items {s+m+l} : ${`${s*5 + m*7 + l*10}$`}</div>
                                </td>
                            </tr>
                        </tbody>

                    </table>
                    <div class='checkout_line'></div>
                    
        </div>
    )
}

export default CheckoutItem
