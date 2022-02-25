import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import '../../css/Cart.css'
import AddedContext from './AddedContext'
const CartItem = ({ s, m, l, img, id, total }) => {
  // const {updated, setupdated} = useContext(AddedContext)
  const refresh = () => {
    window.location.reload(false)
  }
  let { updated, setupdated } = useContext(AddedContext)
  let [small, setSmall] = useState(0)
  let [medium, setMedium] = useState(0)
  let [large, setLarge] = useState(0)

  useEffect(() => {
    s == null ? setSmall(0) : setSmall(s)
    m == null ? setMedium(0) : setMedium(m)
    l == null ? setLarge(0) : setLarge(l)
  }, [])
  const addSmall = () => {
    if (sessionStorage.getItem('cart') === null) {
      sessionStorage.setItem('cart', JSON.stringify([]))
    }
    let img = id + '.png'
    console.log('requested small')
    let orderList = JSON.parse(sessionStorage.getItem('cart'))
    var i = null
    for (i = 0; orderList.length > i; i += 1) {
      if (orderList[i].id === id) {
        if ('small' in orderList[i]) {
          orderList[i]['small']++
          orderList[i]['total']++
          sessionStorage.setItem('cart', JSON.stringify(orderList))
          setSmall(small + 1)
          setupdated(!updated)
          return sessionStorage.getItem('cart')
        } else {
          orderList[i]['small'] = 1
          orderList[i]['total']++
          sessionStorage.setItem('cart', JSON.stringify(orderList))
          setSmall(small + 1)
          setupdated(!updated)
          return sessionStorage.getItem('cart')
        }
      }
    }
    orderList.push({
      id: id,
      img: img,
      small: 1,
      total: 1,
    })
    sessionStorage.setItem('cart', JSON.stringify(orderList))
    setSmall(small + 1)
    setupdated(!updated)
    return sessionStorage.getItem('cart')

    // axios.post("http://localhost:5000/orders", {
    //     id:id,
    //     size:"small",
    //     operation: "add"
    //   }).then(()=>{
    //       setSmall(small + 1)
    //       setupdated(!updated)
    //   })
  }
  const addMedium = () => {
    if (sessionStorage.getItem('cart') === null) {
      sessionStorage.setItem('cart', JSON.stringify([]))
    }
    let img = id + '.png'
    console.log('requested medium')
    let orderList = JSON.parse(sessionStorage.getItem('cart'))
    var i = null
    for (i = 0; orderList.length > i; i += 1) {
      if (orderList[i].id === id) {
        if ('medium' in orderList[i]) {
          orderList[i]['medium']++
          orderList[i]['total']++
          sessionStorage.setItem('cart', JSON.stringify(orderList))
          setMedium(medium + 1)
          setupdated(!updated)
          return sessionStorage.getItem('cart')
        } else {
          orderList[i]['medium'] = 1
          orderList[i]['total']++
          sessionStorage.setItem('cart', JSON.stringify(orderList))
          setMedium(medium + 1)
          setupdated(!updated)
          return sessionStorage.getItem('cart')
        }
      }
    }
    orderList.push({
      id: id,
      img: img,
      medium: 1,
      total: 1,
    })
    sessionStorage.setItem('cart', JSON.stringify(orderList))
    setMedium(medium + 1)
    setupdated(!updated)
    return sessionStorage.getItem('cart')
    // axios
    //     .post("http://localhost:5000/orders", {
    //     id: id,
    //     size: "medium",
    //     operation: "add"
    // })
    //     .then(() => {
    //         setMedium(medium + 1)
    //         setupdated(!updated)
    //     })
  }
  const addLarge = () => {
    if (sessionStorage.getItem('cart') === null) {
      sessionStorage.setItem('cart', JSON.stringify([]))
    }
    let img = id + '.png'
    console.log('requested large')
    let orderList = JSON.parse(sessionStorage.getItem('cart'))
    var i = null
    for (i = 0; orderList.length > i; i += 1) {
      if (orderList[i].id === id) {
        if ('large' in orderList[i]) {
          orderList[i]['large']++
          orderList[i]['total']++
          sessionStorage.setItem('cart', JSON.stringify(orderList))
          setLarge(large + 1)
          setupdated(!updated)
          return sessionStorage.getItem('cart')
        } else {
          orderList[i]['large'] = 1
          orderList[i]['total']++
          sessionStorage.setItem('cart', JSON.stringify(orderList))
          setLarge(large + 1)
          setupdated(!updated)
          return sessionStorage.getItem('cart')
        }
      }
    }
    orderList.push({
      id: id,
      img: img,
      large: 1,
      total: 1,
    })
    sessionStorage.setItem('cart', JSON.stringify(orderList))
    setLarge(large + 1)
    setupdated(!updated)
    return sessionStorage.getItem('cart')

    // axios
    //   .post('http://localhost:5000/orders', {
    //     id: id,
    //     size: 'large',
    //     operation: 'add',
    //   })
    //   .then(() => {
    //     setLarge(large + 1)
    //     setupdated(!updated)
    //   })
  }
  const subSmall = (number) => {
    if (number > 0) {
      if (sessionStorage.getItem('cart') === null) {
        sessionStorage.setItem('cart', JSON.stringify([]))
      }
      console.log('requested small')
      let orderList = JSON.parse(sessionStorage.getItem('cart'))
      var i = null
      for (i = 0; orderList.length > i; i += 1) {
        if (orderList[i].id === id) {
          if ('small' in orderList[i]) {
            orderList[i]['small']--
            orderList[i]['total']--
            sessionStorage.setItem('cart', JSON.stringify(orderList))
            setSmall(small - 1)
            setupdated(!updated)
            return sessionStorage.getItem('cart')
          } else {
            orderList[i]['small'] = 1
            orderList[i]['total']++
            sessionStorage.setItem('cart', JSON.stringify(orderList))
            setSmall(small - 1)
            setupdated(!updated)
            return sessionStorage.getItem('cart')
          }
        }
      }
      //   axios
      //     .post('http://localhost:5000/orders', {
      //       id: id,
      //       size: 'small',
      //       operation: 'sub',
      //     })
      //     .then(() => {
      //       setSmall(small - 1)
      //       setupdated(!updated)
      //     })
    }
  }
  const subMedium = (number) => {
    if (number > 0) {
      if (sessionStorage.getItem('cart') === null) {
        sessionStorage.setItem('cart', JSON.stringify([]))
      }
      console.log('requested medium')
      let orderList = JSON.parse(sessionStorage.getItem('cart'))
      var i = null
      for (i = 0; orderList.length > i; i += 1) {
        if (orderList[i].id === id) {
          if ('medium' in orderList[i]) {
            orderList[i]['medium']--
            orderList[i]['total']--
            sessionStorage.setItem('cart', JSON.stringify(orderList))
            setMedium(medium - 1)
            setupdated(!updated)
            return sessionStorage.getItem('cart')
          } else {
            orderList[i]['medium'] = 1
            orderList[i]['total']++
            sessionStorage.setItem('cart', JSON.stringify(orderList))
            setMedium(medium - 1)
            setupdated(!updated)
            return sessionStorage.getItem('cart')
          }
        }
      }

      //   axios
      //     .post('http://localhost:5000/orders', {
      //       id: id,
      //       size: 'medium',
      //       operation: 'sub',
      //     })
      //     .then(() => {
      //       setMedium(medium - 1)
      //       setupdated(!updated)
      //     })
    }
  }
  const subLarge = (number) => {
    if (number > 0) {
      if (sessionStorage.getItem('cart') === null) {
        sessionStorage.setItem('cart', JSON.stringify([]))
      }
      console.log('requested large')
      let orderList = JSON.parse(sessionStorage.getItem('cart'))
      var i = null
      for (i = 0; orderList.length > i; i += 1) {
        if (orderList[i].id === id) {
          if ('large' in orderList[i]) {
            orderList[i]['large']--
            orderList[i]['total']--
            sessionStorage.setItem('cart', JSON.stringify(orderList))
            setLarge(large - 1)
            setupdated(!updated)
            return sessionStorage.getItem('cart')
          } else {
            orderList[i]['large'] = 1
            orderList[i]['total']++
            sessionStorage.setItem('cart', JSON.stringify(orderList))
            setLarge(large - 1)
            setupdated(!updated)
            return sessionStorage.getItem('cart')
          }
        }
      }

      //   axios
      //     .post('http://localhost:5000/orders', {
      //       id: id,
      //       size: 'large',
      //       operation: 'sub',
      //     })
      //     .then(() => {
      //       setLarge(large - 1)
      //       setupdated(!updated)
      //     })
    }
  }
  const deleteOrder = (id) => {
    if (sessionStorage.getItem('cart') === null) {
      sessionStorage.setItem('cart', JSON.stringify([]))
    }
    let order = JSON.parse(sessionStorage.getItem('cart'))
    let newOrder = order.filter((item) => {
        return item.id != id;
    })
    sessionStorage.setItem("cart",JSON.stringify(newOrder))
    // axios
    //   .post('http://localhost:5000/orders/delete', {
    //     id: id,
    //   })
    //   .then(() => {
    //     setupdated(!updated)
    //   })
  }

  return (
    <div>
      <div class="product">
        <div class="cart-img-container">
          <img class="cart_img" src={`/img/${img}`} alt="" />
        </div>
        <div class="product-info">
          <div class="product_name_and_size">
            <h3 class="product-name">Id :{id}</h3>
            <div class="cart_item_size">
              <div class="small_items_col items_col">
                <div class="small_txt size_txt">S</div>
                <button
                  onClick={() => {
                    subSmall(small)
                  }}
                  class="small_minus minus"
                >
                  -
                </button>
                <div class="small_value size_value">
                  {small == null ? 0 : small}
                </div>
                <button onClick={addSmall} class="small_plus plus">
                  +
                </button>
              </div>
              <div class="medium_items_col items_col">
                <div class="medium_txt size_txt">M</div>
                <button
                  onClick={() => {
                    subMedium(medium)
                  }}
                  class="medium_minus minus"
                >
                  -
                </button>
                <div class="medium_value size_value">
                  {medium == null ? 0 : medium}
                </div>
                <button onClick={addMedium} class="medium_plus plus">
                  +
                </button>
              </div>
              <div class="large_items_col items_col">
                <div class="large_txt size_txt">L</div>
                <button
                  onClick={() => {
                    subLarge(large)
                  }}
                  class="large_minus minus"
                >
                  -
                </button>
                <div class="large_value size_value">
                  {large == null ? 0 : large}
                </div>
                <button onClick={addLarge} class="large_plus plus">
                  +
                </button>
              </div>
            </div>
          </div>
          <div class="single_product_total">
            <div class="small_total">S : {`${small}  ${small * 5}$`}</div>
            <div class="medium_total">M : {`${medium}  ${medium * 5}$`}</div>
            <div class="large_total">L : {`${large}  ${large * 5}$`}</div>
            <div class="single_item_total">
              Total{' '}
              {`${small * 5 + medium * 7 + large * 10}  ${
                small * 5 + medium * 7 + large * 10
              }$`}
            </div>
          </div>
          <p
            class="product-remove"
            onClick={() => {
              deleteOrder(id)
              refresh()
            }}
          >
            <i class="fa fa-trash" aria-hidden="true"></i>
          </p>
        </div>
      </div>
    </div>
  )
}

export default CartItem
