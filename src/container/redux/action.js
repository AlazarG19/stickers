import axios from "axios"
export const dispatchGetSticker = () => {
    return (dispatch) => {
        axios.get("https://stickerwebsite.herokuapp.com/stickers")
        .then((res)=>{
            dispatch({type: "GET_STICKERS", payload : res.data})
        }).catch((err)=>{
            console.log(err)
        })
    }
}
export const dispatchGetOrder = () => {
    return (dispatch) => {
        axios.get("http://localhost:5000/orders")
        .then((res)=>{
            dispatch({type: "GET_ORDERS", payload : res.data})
        }).catch((err)=>{
            console.log(err)
        })
    }
}