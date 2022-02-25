import React, {useContext, useEffect, useState} from 'react'
import "../../css/navbar.css"
import Button from './Button'
import Logo from './Logo'
import {Link} from 'react-router-dom'
import AddedContext from './AddedContext'
import axios from 'axios'
import CartIcon from './CartIcon'
const Navbar = () => {
    const {updated, setupdated} = useContext(AddedContext)
    const [total,
        setTotal] = useState(0)
    const [data,
        setData] = useState([])
    // const getData = async() => {
    //     // const {data} = await axios.get("http://localhost:5000/orders")
    //     // let cart = [{
    //     //     id: "A01",
    //     //     img: "A01.png",
    //     //     medium: 5,
    //     //     total: 5
    //     // },{
    //     //     id: "A02",
    //     //     img: "A02.png",
    //     //     medium: 5,
    //     //     total: 5
    //     // }]
    //     // sessionStorage.setItem("cart", JSON.stringify(cart))
        
    // }
    useEffect(() => {
        let data = sessionStorage.getItem("cart") === null ? [] : JSON.parse(sessionStorage.getItem('cart'));
        console.log(data)
        setData(data)
        let a = 0
        data.map((items) => {
            a += items.total
        })
        setTotal(a)
    }, [updated])
    
    return (
        <div className="NavBar">
            <div style={{
                margin: "10px"
            }}>
                <Logo picsize="small"/>

            </div>
            <div className="Buttons">
                <Link to="/">
                    <Button text="Home" pcolor="#00B4D8" scolor="white"/>
                </Link>
                <Link to="/Shop">
                    <Button text="Shop" pcolor="#00B4D8" scolor="white"/>
                </Link>
                <Link to="/Cart">   
                    <CartIcon total={total}/>
                </Link>
            </div>
        </div>
    )
}

export default Navbar
