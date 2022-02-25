import axios from 'axios'
import React, { useContext } from 'react'
import "../../css/AddToCart.css"
import AddedContext from './AddedContext'
const AddToCartButton = ({stickerId}) => {
    const {updated,setupdated} = useContext(AddedContext)
    const addSmall = () =>{
        if(sessionStorage.getItem("cart") === null){
            sessionStorage.setItem("cart", JSON.stringify([]))
        }
        let id = stickerId
        let img = id + ".png"
        console.log("requested small")
        let orderList = JSON.parse(sessionStorage.getItem('cart'))
        var i = null;
        for (i = 0; orderList.length > i; i += 1) {
            if (orderList[i].id === id) {
                if ("small" in orderList[i]) {
                        orderList[i]["small"]++
                        orderList[i]["total"]++
                    sessionStorage.setItem("cart", JSON.stringify(orderList))
                    setupdated(!updated)
                    return sessionStorage.getItem("cart")
                } else {
                        orderList[i]["small"] = 1
                        orderList[i]["total"]++
                        sessionStorage.setItem("cart", JSON.stringify(orderList))
                        setupdated(!updated)
                        return sessionStorage.getItem("cart")
                    
                }
            }
        }
            orderList.push({
                "id": id,
                "img": img,
                "small": 1,
                total: 1
            })    
        sessionStorage.setItem("cart", JSON.stringify(orderList))
        setupdated(!updated)
        return sessionStorage.getItem("cart")
        // axios.post("http://localhost:5000/orders", {
        //     id:stickerId,
        //     size:"small",
        //     operation: "add"
        //   }).then(()=>{
        //       setupdated(!updated)
        //   })
    }
    const addMedium = () =>{
        if(sessionStorage.getItem("cart") === null){
            sessionStorage.setItem("cart", JSON.stringify([]))
        }
        let id = stickerId
        let img = id + ".png"
        console.log("requested medium")
        let orderList = JSON.parse(sessionStorage.getItem('cart'))
        var i = null;
        for (i = 0; orderList.length > i; i += 1) {
            if (orderList[i].id === id) {
                if ("medium" in orderList[i]) {
                        orderList[i]["medium"]++
                        orderList[i]["total"]++
                    sessionStorage.setItem("cart", JSON.stringify(orderList))
                    setupdated(!updated)
                    return sessionStorage.getItem("cart")
                } else {
                        orderList[i]["medium"] = 1
                        orderList[i]["total"]++
                        sessionStorage.setItem("cart", JSON.stringify(orderList))
                        setupdated(!updated)
                        return sessionStorage.getItem("cart")
                    
                }
            }
        }
            orderList.push({
                "id": id,
                "img": img,
                "medium": 1,
                total: 1
            })    
        sessionStorage.setItem("cart", JSON.stringify(orderList))
        setupdated(!updated)
        return sessionStorage.getItem("cart")
        // axios.post("http://localhost:5000/orders", {
        //     id:stickerId,
        //     size:"medium",
        //     operation: "add"
        //   }).then(()=>{
        //     setupdated(!updated)
        // })
    }
    const addLarge = () =>{
        if(sessionStorage.getItem("cart") === null){
            sessionStorage.setItem("cart", JSON.stringify([]))
        }
        let id = stickerId
        let img = id + ".png"
        console.log("requested large")
        let orderList = JSON.parse(sessionStorage.getItem('cart'))
        var i = null;
        for (i = 0; orderList.length > i; i += 1) {
            if (orderList[i].id === id) {
                if ("large" in orderList[i]) {
                        orderList[i]["large"]++
                        orderList[i]["total"]++
                    sessionStorage.setItem("cart", JSON.stringify(orderList))
                    setupdated(!updated)
                    return sessionStorage.getItem("cart")
                } else {
                        orderList[i]["large"] = 1
                        orderList[i]["total"]++
                        sessionStorage.setItem("cart", JSON.stringify(orderList))
                        setupdated(!updated)
                        return sessionStorage.getItem("cart")
                    
                }
            }
        }
            orderList.push({
                "id": id,
                "img": img,
                "large": 1,
                total: 1
            })    
        sessionStorage.setItem("cart", JSON.stringify(orderList))
        setupdated(!updated)
        return sessionStorage.getItem("cart")
        // axios.post("http://localhost:5000/orders", {
        //     id:stickerId,
        //     size:"medium",
        //     operation: "add"
        //   }).then(()=>{
        //     setupdated(!updated)
        // })
    
        // axios.post("http://localhost:5000/orders", {
        //     id:stickerId,
        //     size:"large",
        //     operation: "add"
        //   }).then(()=>{
        //     setupdated(!updated)
        // })
    }
    return (
        <div className ="trapdoor_parent">
            <div className ="trapdoor">
                <div className ="top door"></div>
                <div className ="bottom door"></div>
                <div className ="allbtn">
                    <div className ="social_main_btn">
                        <div className ="social-sizebtns">
                            <button onClick={addSmall} onTouchStart={addSmall} className ="sizebtn small" >
                                <div className ="sizebtn_txt sizebtn_txt_small">S</div>
                            </button>
                        </div>
                    </div>
                    <div className ="social_main_btn">
                        <div className ="social-sizebtns">
                            <button onClick={addMedium} onTouchStart={addMedium} className ="sizebtn medium" >
                                <div className ="sizebtn_txt sizebtn_txt_medium">M</div>
                            </button>
                        </div>
                    </div>
                    <div className ="social_main_btn">
                        <div className ="social-sizebtns">
                            <button  onClick={addLarge} onTouchStart={addLarge} className ="sizebtn large" >
                                <div className ="sizebtn_txt sizebtn_txt_large">L</div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddToCartButton
