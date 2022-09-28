import React, { Fragment, useEffect, useState } from 'react'
import Modal from '../../../modal/Modal'
import { useSelector, useDispatch } from 'react-redux';

import classes from './Cart.module.css';

import { IoCloseOutline } from 'react-icons/io5'
import { FiShoppingCart } from 'react-icons/fi'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'

import { Link } from 'react-router-dom';
import { resetItems, setOrderHistory, updateCartItem } from '../../../features/cart';

function Cart(props) {
  const [totalPrice, setTotalPrice] = useState(0);
  const [isBought, setIsBought] = useState(false);

  const selected = useSelector(state => state.cart.chosenItems);

  const dispatch = useDispatch();

  useEffect(() => {
    let price = 0;

    selected.map(x => {
      price += x.quantity * x.item.price;
    })
    setTotalPrice(price);
  }, [selected])

  const decreaseQuantity = (id, quantity) => {
    if (quantity !== 0) {
      dispatch(updateCartItem({ id, quantity: quantity - 1 }))
    }
  }

  const buy = () => {
    setIsBought(true);
    dispatch(setOrderHistory(selected));
    dispatch(resetItems())
  }

  return (
    <Modal onClose={props.onClose} type={isBought ? 'bought' : ''}>
      {!isBought && (
        <Fragment>
          <div className={classes.header}>
            <IoCloseOutline onClick={props.onClose} className='close-btn' />
            <FiShoppingCart className='shopping-cart' />
          </div>
          <div className={classes.titles}>
            <ul className={classes['titles-list']}>
              <li>Product name</li>
              <li>Quantity</li>
              <li>Price</li>
            </ul>
          </div>
          <div className={classes.container}>
            {selected.map(selected => (
              <div className={classes.content} key={selected.item.id}>
                <div className={classes.photo}>
                  <img src={selected.item.image} />
                </div>
                <div className={classes.name}>
                  <p>{selected.item.title}</p>
                </div>
                <div className={classes.quntity}>
                  <AiOutlineMinus onClick={() => decreaseQuantity(selected.item.id, selected.quantity)} className={classes.minus} />
                  <p>{selected.quantity}</p>
                  <AiOutlinePlus onClick={() => dispatch(updateCartItem({ id: selected.item.id, quantity: selected.quantity + 1 }))} className={classes.plus} />
                </div>
                <div className={classes.price}>
                  <p>{selected.item.price * selected.quantity}$</p>
                </div>
                <div className={classes.subTotal}>
                </div>
              </div>
            ))}
          </div>
          <div className={classes.sumUp}>
            <p>Total price</p>
            <p className={classes.sumUpP}>{totalPrice}$</p>
          </div>
          <button className={classes.buy} onClick={buy} type='submit'>Buy</button>
        </Fragment>
      )}
      {isBought && (
        <div className={classes['bought-container']}>
          <h1 className={classes.bought}>You have successfully bought items.</h1>
          <Link to='/home' onClick={props.onClose} className={classes['go-home']}>Go to main page</Link>
          <Link to='/history' onClick={props.onClose} className={classes['see-history']}>Go to history page</Link>
        </div>
      )}
    </Modal>
  )
}

export default Cart