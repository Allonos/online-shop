import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import classes from '../Phones.module.css';

import { AiOutlineShoppingCart } from 'react-icons/ai';
import AccessoriesData from './AccessoriesData';

import { addItemToCart } from '../../../features/cart';

function AccessoriesMiddleContent() {
  const [checked, setChecked] = useState(true);

  const dispatch = useDispatch();

  const addCartHandler = (e, accessory) => {
    e.preventDefault();
    dispatch(addItemToCart(accessory));
  }

  return (
    <div className={classes.phoneContent}>
      <div className={classes.middleTitle}>
        <h1>Accessories </h1>
        <input type='checkbox' checked={checked} onChange={() => setChecked(!checked)} />
        <p>In Stock</p>
      </div>
      <div className={classes.imageContainer}>
        {AccessoriesData.map(accessory => {
          const { image, title, price, id } = accessory;
          return (
            <Link to={`/item/${id}/accessories`} className={classes.images} key={id}>
              <img src={image} />
              <p className={classes.infoImage}>{title}</p>
              <div className={classes.priceAddCart}>
                <p className={classes.priceImage}>{price}$</p>
                <AiOutlineShoppingCart onClick={e => addCartHandler(e, accessory)} className={classes.shoppingCart} />
              </div>
            </Link>
          )
        })}
      </div>
      <p className={classes.showMore}>Show more</p>
    </div>
  )
}

export default AccessoriesMiddleContent