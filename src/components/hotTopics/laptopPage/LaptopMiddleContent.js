import React, { useState } from 'react'

import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import classes from '../Phones.module.css';

import { AiOutlineShoppingCart } from 'react-icons/ai';
import LaptopsData from './LaptopData';

import { addItemToCart } from '../../../features/cart';

function LaptopMiddleContent() {
  const [checked, setChecked] = useState(true);

  const dispatch = useDispatch();

  const addCartHandler = (event, laptop) => {
    event.preventDefault();
    dispatch(addItemToCart(laptop))
  }

  return (
    <div className={classes.phoneContent}>
      <div className={classes.middleTitle}>
        <h1>Laptops</h1>
        <input type='checkbox' checked={checked} onChange={() => setChecked(!checked)} />
        <p>In Stock</p>
      </div>
      <div className={classes.imageContainer}>
        {LaptopsData.map(laptop => {
          const { image, title, price, id } = laptop;
          return (
            <Link to={`/item/${id}/laptop`} className={classes.images} key={id}>
              <img src={image} />
              <p className={classes.infoImage}>{title}</p>
              <div className={classes.priceAddCart}>
                <p className={classes.priceImage}>{price}$</p>
                <AiOutlineShoppingCart onClick={e => addCartHandler(e, laptop)} className={classes.shoppingCart} />
              </div>
            </Link>
          )
        })}
      </div>
      <p className={classes.showMore}>Show more</p>
    </div>
  )
}

export default LaptopMiddleContent