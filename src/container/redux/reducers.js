import { combineReducers } from "redux"

const stickerCatalogueReducer = (state = [],action) =>{
    switch(action.type){
        case "GET_STICKERS":
            return action.payload
        default:
            return [...state]
    }
}
const orderReducer = (state = [],action)=>{
    switch(action.type){
        case "GET_ORDERS":
            return action.payload
        default:
            return [...state]
    }
}
const stickerReducer = combineReducers({
    stickerCatalogueReducer
    ,orderReducer
})
export default stickerReducer