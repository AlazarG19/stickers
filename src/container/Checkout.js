import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import '../css/Checkout.css'
import AddedContext from './SupportingComponent/AddedContext'
import CheckoutItem from './SupportingComponent/CheckoutItem'
import Input from './SupportingComponent/Input'
import Button from './SupportingComponent/Button'
import '../css/Modal.css'
const Checkout = () => {
  const [modal, setModal] = useState(false)
  const toggleModal = () => {
    setModal(!modal)
  }
  const [modal2, setModal2] = useState(false)
  const toggleModal2 = () => {
    setModal2(!modal2)
  }
  const [modal3, setModal3] = useState(false)
  const toggleModal3 = () => {
    setModal3(!modal3)
  }
  if (modal) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }
  if (modal2) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }
  if (modal3) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }
  const [emp, setemp] = useState('')
  const [order, setorder] = useState([])
  const { updated, setupdated } = useContext(AddedContext)
  let [small, setSmall] = useState(0)
  let [medium, setMedium] = useState(0)
  let [large, setLarge] = useState(0)
  const getData = () => {
    // const {data} = await axios.get("http://localhost:5000/orders")
    let data =
      sessionStorage.getItem('cart') === null
        ? []
        : JSON.parse(sessionStorage.getItem('cart'))
    let a = 0
    let b = 0
    let c = 0
    data.map((items) => {
      if ('small' in items) {
        a += items.small
      }
      if ('medium' in items) {
        b += items.medium
      }
      if ('large' in items) {
        c += items.large
      }
    })
    a === 0 ? setSmall(0) : setSmall(a)
    b === 0 ? setMedium(0) : setMedium(b)
    c === 0 ? setLarge(0) : setLarge(c)
    setorder(data)
  }
  const onchange = (value) => {
    setemp(value)
  }
  const onclick = async () => {
    let order_id = sessionStorage.getItem('order_id')
    let id = sessionStorage.getItem('id')
    let cart = JSON.parse(sessionStorage.getItem('cart'))
    axios
      .post('https://stickerwebsite.herokuapp.com/orders', {
        order_id,
        id,
        cart,
        telegram_account: emp,
      })
      .then((data) => {
        if (data.data.success) {
          if (data.data.order === 'new') {
              toggleModal()
          } else if (data.data.order == 'edited') {
            toggleModal2()
        }
        } else {
          toggleModal3()
          console.log(data.data.error)
        }
      })
  }
  useEffect(() => {
    if (sessionStorage.getItem('id') === null) {
      window.location.assign('http://localhost:3000')
    }
    getData()
  }, [updated])

  return (
    <>
      <div className="checkout_container">
        <div className="checkout_window">
          <div className="order-info">
            <div className="order-info-content">
              <h2>Order Summary</h2>
              <div className="checkout_line"></div>
              {order.map((items) => (
                <CheckoutItem
                  s={'small' in items ? items.small : 0}
                  m={'medium' in items ? items.medium : 0}
                  l={'large' in items ? items.large : 0}
                  id={items.id}
                  img={items.img}
                  total={items.total}
                />
              ))}
              <div className="checkout_total">
                <span style={{ float: 'left' }}>TOTAL</span>
                <span style={{ float: 'right', textAlign: 'right' }}>
                  {`${
                    small * 5 + large * 10 + medium * 7 === 0
                      ? 0
                      : small * 5 + large * 10 + medium * 7
                  }$`}
                </span>
                <Input onchange={onchange} />
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                  {emp === '' ? (
                    <div></div>
                  ) : (
                    <Button onclick={onclick} text="submit" />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <h2>Successfully added your order</h2>
            <p>
              You will soon be notified at your telegram account ( {`@${emp}`})
              if you wanna edit your order you can without changing tab at this
              page if you open up a new tab it will be considered as a new order
            </p>
            <button className="close-modal" onClick={toggleModal}>
              CLOSE
            </button>
          </div>
        </div>
      )}
      {modal2 && (
        <div className="modal">
          <div onClick={toggleModal2} className="overlay"></div>
          <div className="modal-content">
            <h2>Successfully edited your order</h2>
            <p>
              You will soon be notified at your telegram account ( {`@${emp}`})
              if you wanna edit your order you can without changing tab at this
              page if you open up a new tab it will be considered as a new order
            </p>
            <button className="close-modal" onClick={toggleModal2}>
              CLOSE
            </button>
          </div>
        </div>
      )}
      {modal3 && (
        <div className="modal">
          <div onClick={toggleModal3} className="overlay"></div>
          <div className="modal-content">
            <h2>An error has occured </h2>
            <p>
            please try again later
            </p>
            <button className="close-modal" onClick={toggleModal3}>
              CLOSE
            </button>
          </div>
        </div>
      )}
    </>
  )
}

export default Checkout
