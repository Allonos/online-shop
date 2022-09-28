import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import classes from '../Phones.module.css';


import { addItemToCart } from '../../../features/cart';

import { AiOutlineShoppingCart } from 'react-icons/ai';
import GamingData from './GamingData';

function GamingMiddleContent() {
  const [checked, setChecked] = useState(true);

  const dispatch = useDispatch();

  const addCartHandler = (e, gaming) => {
    e.preventDefault();
    dispatch(addItemToCart(gaming));
  }

  return (
    <div className={classes.phoneContent}>
      <div className={classes.middleTitle}>
        <h1>Gaming </h1>
        <input type='checkbox' checked={checked} onChange={() => setChecked(!checked)} />
        <p>In Stock</p>
      </div>
      <div className={classes.imageContainer}>
        {GamingData.map(gaming => {
          const { image, title, price, id } = gaming;
          return (
            <Link to={`/item/${id}/gaming`} className={classes.images} key={id}>
              <img src={image} />
              <p className={classes.infoImage}>{title}</p>
              <div className={classes.priceAddCart}>
                <p className={classes.priceImage}>{price}$</p>
                <AiOutlineShoppingCart onClick={e => addCartHandler(e, gaming)} className={classes.shoppingCart} />
              </div>
            </Link>
          )
        })}
      </div>
      <p className={classes.showMore}>Show more</p>
    </div>
  )
}

export default GamingMiddleContent