import { useContext, useEffect, useState} from 'react';
import AddedContext from './SupportingComponent/AddedContext';
import DashBoard from './SupportingComponent/DashBoard';
import NavBar from './SupportingComponent/Navbar'
import {v4 as uuid} from 'uuid'

const Shop = ({}) => {    
    // const {updated, setupdated} = useContext(AddedContext)
    // // const value = {updated,setupdated}
    
    useEffect(() => {
        if (sessionStorage.getItem('id') === null) {
          const u = uuid()
          sessionStorage.setItem('id', u)
        }
        if (sessionStorage.getItem('order_id') === null) {
            const orderu = uuid()
            sessionStorage.setItem('order_id', orderu)
          }
      }, [])
    return (
        <div style = {{
            backgroundColor: "#11101D"}}>
            
                <div
                    style={{
                    backgroundColor: "#E4E9F7",
                    margin: "0 0 0 70px"
                }}>
                    <NavBar/>
                </div>
                <DashBoard/>
        </div>

    )
}

export default Shop
