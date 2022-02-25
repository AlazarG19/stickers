import {v4 as uuid} from 'uuid'
import React, {useContext, useEffect, useState} from 'react'
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import '../css/Cart.css'
import AddedContext from './SupportingComponent/AddedContext'
import CartItem from './SupportingComponent/CartItem'
import Navbar from './SupportingComponent/Navbar'
import Button from './SupportingComponent/Button';
const Cart = () => {
    const {updated, setupdated} = useContext(AddedContext)
    const [order,
        setorder] = useState([])
    let [small,
        setSmall] = useState(0)
    let [medium,
        setMedium] = useState(0)
    let [large,
        setLarge] = useState(0)
    const getData = () => {
        // const {data} = await axios.get("http://localhost:5000/orders")
        let data = sessionStorage.getItem("cart") === null ? [] : JSON.parse(sessionStorage.getItem('cart'));
        let a = 0
        let b = 0
        let c = 0
        data.map((items) => {
            if ("small" in items) {
                a += items.small
            }
            if ("medium" in items) {
                b += items.medium
            }
            if ("large" in items) {
                c += items.large
            }
        })
        a === 0
            ? setSmall(0)
            : setSmall(a)
        b === 0
            ? setMedium(0)
            : setMedium(b)
        c === 0
            ? setLarge(0)
            : setLarge(c)
        setorder(data)
    }
    useEffect(() => {
        if(sessionStorage.getItem("id") === null){
            const u = uuid()
            sessionStorage.setItem("id",u)
        }
        if(sessionStorage.getItem("order_id") === null){
            const orderu = uuid()
            sessionStorage.setItem("order_id",orderu)
        }
        getData()   
    }, [updated])
    
    return (
        <div>
            <Navbar/>
            <div class="cart-container">
                <h1>Shopping Cart</h1>
                <div class="cart">
                    <div class="products">
                        {order.map((items) => (<CartItem
                            s={items.small}
                            m={items.medium}
                            l={items.large}
                            id={items.id}
                            img={items.img}
                            total={items.total}/>))}
                    </div>
                    <div class="cart-total">
                        <p>
                            <span>Number of Items</span>
                            <span>{(small + large + medium) === 0
                                    ? 0
                                    : small + large + medium}</span>
                        </p>
                        <p>
                            <span>Total</span>
                            <span>{`${ (small * 5 + large * 10 + medium * 7) === 0
                                    ? 0
                                    : small * 5 + large * 10 + medium * 7}$`}</span>
                        </p>
                        <Link to="/checkout" style={{ textDecoration: 'none' }}>
                            <Button text = "Proceed to Checkout"/>

                        </Link>

                    </div>
                </div>
            </div>

        </div>
    )
}
export default Cart
