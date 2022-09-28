import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import classes from '../Phones.module.css';

import { AiOutlineShoppingCart } from 'react-icons/ai';

import phonesData from './phonesData';

import { addItemToCart } from '../../../features/cart';



function PhoneMiddleContent() {
  const [checked, setChecked] = useState(true);

  const dispatch = useDispatch();

  const addCartHandler = (e, phone) => {
    e.preventDefault();
    dispatch(addItemToCart(phone));
  }

  return (
    <div className={classes.phoneContent}>
      <div className={classes.middleTitle}>
        <h1>Mobile Phones </h1>
        <input type='checkbox' checked={checked} onChange={() => setChecked(!checked)} />
        <p>In Stock</p>
      </div>
      <div className={classes.imageContainer}>
        {phonesData.map(phone => {
          const { image, title, price, id } = phone;
          return (
            <Link to={`/item/${id}/phone`} className={classes.images} key={id}>
              <img src={image} />
              <p className={classes.infoImage}>{title}</p>
              <div className={classes.priceAddCart}>
                <p className={classes.priceImage}>{price}$</p>
                <AiOutlineShoppingCart className={classes.shoppingCart} onClick={(e) => addCartHandler(e, phone)} />
              </div>
            </Link>
          )
        })}
      </div>
      <p className={classes.showMore}>Show more</p>
    </div>
  )
}

export default PhoneMiddleContent