import "./App.css"
import Shop from "./container/Shop";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./Home";
import Cart from "./container/Cart";

import {useDispatch} from "react-redux";
import {dispatchGetOrder, dispatchGetSticker} from "./container/redux/action";
import {useEffect, useState} from "react";
import AddedContext from "./container/SupportingComponent/AddedContext";
import Checkout from "./container/Checkout";
function App() {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(dispatchGetSticker())
    }, [])
    const [updated,setupdated] = useState("false")
    const value = {updated,setupdated}
    return (
        <AddedContext.Provider value={value}>
        <Router>
            <Routes>
                <Route exact path="/" element={< Home />}/>
                <Route path="/Shop" element={< Shop />}/>
                <Route path="/Cart" element={< Cart />}/>
                <Route path="/Checkout" element={< Checkout />}/>
            </Routes>
        </Router>
        </AddedContext.Provider>

    );
}

export default App;
