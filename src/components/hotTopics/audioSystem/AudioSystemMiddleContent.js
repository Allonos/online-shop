import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import classes from '../Phones.module.css';

import { AiOutlineShoppingCart } from 'react-icons/ai';

import AudioSystemData from './AudioSystemData';

import { addItemToCart } from '../../../features/cart';

function AudioSystemMiddleContent() {
  const [checked, setChecked] = useState(true);

  const dispatch = useDispatch();

  const addCartHandler = (e, audioSystem) => {
    e.preventDefault();
    dispatch(addItemToCart(audioSystem));
  }

  return (
    <div className={classes.phoneContent}>
      <div className={classes.middleTitle}>
        <h1>Audio System </h1>
        <input type='checkbox' checked={checked} onChange={() => setChecked(!checked)} />
        <p>In Stock</p>
      </div>
      <div className={classes.imageContainer}>
        {AudioSystemData.map(audioSystem => {
          const { image, title, price, id } = audioSystem;
          return (
            <Link to={`item/${id}/audio`} className={classes.images} key={id}>
              <img src={image} />
              <p className={classes.infoImage}>{title}</p>
              <div className={classes.priceAddCart}>
                <p className={classes.priceImage}>{price}$</p>
                <AiOutlineShoppingCart onClick={e => addCartHandler(e, audioSystem)} className={classes.shoppingCart} />
              </div>
            </Link>
          )
        })}
      </div>
      <p className={classes.showMore}>Show more</p>
    </div>
  )
}

export default AudioSystemMiddleContent;